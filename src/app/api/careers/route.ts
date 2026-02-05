import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const GHL_API_KEY = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      currentFirm,
      yearsExperience,
      licenses,
      interest,
    } = body;

    const tags = ["Agent Recruit", "Website Lead"];

    const customFields = [
      ...(yearsExperience
        ? [{ key: "years_of_experience", field_value: yearsExperience }]
        : []),
      ...(licenses?.length
        ? [{ key: "licenses_held", field_value: licenses.join(", ") }]
        : []),
      ...(interest
        ? [{ key: "interest_reason", field_value: interest }]
        : []),
    ];

    const ghlPayload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      tags,
      source: "Website - Agent Recruitment",
    };

    if (currentFirm) {
      ghlPayload.companyName = currentFirm;
    }

    if (customFields.length > 0) {
      ghlPayload.customFields = customFields;
    }

    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify(ghlPayload),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("GoHighLevel API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to submit to CRM" },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, contactId: data.contact?.id });
  } catch (error) {
    console.error("Error submitting to GoHighLevel:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
