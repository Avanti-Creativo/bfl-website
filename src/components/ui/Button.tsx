"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", pulse = false, children, href, target, rel, disabled, type = "button", onClick }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 btn-glow cursor-pointer";
    
    const variants = {
      primary: "bg-primary-green text-white hover:bg-primary-green-dark shadow-lg hover:shadow-xl",
      secondary: "bg-primary-blue text-white hover:bg-primary-blue-dark shadow-lg hover:shadow-xl",
      outline: "border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white",
      ghost: "text-primary-blue hover:bg-primary-blue/10",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const content = (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          pulse && "animate-pulse-subtle",
          className
        )}
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );

    if (href) {
      const computedRel =
        rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
      return (
        <a
          href={href}
          target={target}
          rel={computedRel}
          className="inline-block"
        >
          {content}
        </a>
      );
    }

    return content;
  }
);

Button.displayName = "Button";

export { Button };
