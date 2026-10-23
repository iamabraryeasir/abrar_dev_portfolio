"use client";

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { MagneticButton } from "./MagneticButton";

export type ButtonVariant = "filled" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  magnetic?: boolean;
  className?: string;
  children?: ReactNode;
}

export type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: never;
  };

export type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  filled:
    "bg-[#E04D2D] text-white shadow-md shadow-[#E04D2D]/20 hover:bg-[#1A1C20] hover:shadow-xl hover:shadow-[#1A1C20]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-98",
  outline:
    "border-2 border-[#1A1C20] bg-white text-[#1A1C20] shadow-sm hover:bg-[#F4F4F0] hover:border-[#1A1C20] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-98",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
  icon: "h-11 w-11 p-0",
};

export function Button({
  variant = "filled",
  size = "md",
  icon,
  iconPosition = "right",
  magnetic = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-medium rounded-full cursor-pointer select-none transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E04D2D] disabled:opacity-50 disabled:pointer-events-none";
  const variantClass = VARIANT_STYLES[variant];
  const sizeClass = SIZE_STYLES[size];

  const combinedClassName = `${baseClasses} ${variantClass} ${sizeClass} ${className}`;
  const inlineColor = variant === "filled" ? "#FFFFFF" : "#1A1C20";

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span
          className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
          style={{ color: inlineColor }}
        >
          {icon}
        </span>
      )}
      {children && (
        <span
          className="transition-colors duration-300"
          style={{ color: inlineColor }}
        >
          {children}
        </span>
      )}
      {icon && iconPosition === "right" && (
        <span
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ color: inlineColor }}
        >
          {icon}
        </span>
      )}
    </>
  );

  const renderElement = () => {
    if ("href" in props && typeof props.href === "string") {
      const { href, target, rel, ...rest } = props;
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.endsWith(".pdf") ||
        target === "_blank";

      if (isExternal) {
        return (
          <a
            href={href}
            target={target}
            rel={
              rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)
            }
            className={combinedClassName}
            style={{ color: inlineColor }}
            {...rest}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className={combinedClassName}
          style={{ color: inlineColor }}
          {...rest}
        >
          {content}
        </Link>
      );
    }

    const { type = "button", ...rest } = props as ButtonAsButton;
    return (
      <button
        type={type}
        className={combinedClassName}
        style={{ color: inlineColor }}
        {...rest}
      >
        {content}
      </button>
    );
  };

  if (magnetic) {
    return (
      <MagneticButton
        className={
          className.includes("w-full") ? "w-full sm:w-auto" : undefined
        }
      >
        {renderElement()}
      </MagneticButton>
    );
  }

  return renderElement();
}
