"use client";
import Link from "next/link";
import cn from "classnames";

import { Icon } from "../Icon/Icon";
import { ButtonProps } from "./Button.props";

import styles from "./Button.module.css";

export function Button({
  children,
  className,
  appearance = "primary",
  size = "m",
  icon,
  typeOf = "button",
  href = "",
  ...props
}: ButtonProps) {
  const IconComponent = icon ? Icon[icon] : null;

  if (typeOf === "button") {
    return (
      <button
        className={cn(
          styles.button,
          styles[size],
          styles[appearance],
          className
        )}
        {...props}
      >
        {IconComponent && <IconComponent className={styles.icon} />}
        {children}
      </button>
    );
  }

  if (typeOf === "a") {
    return (
      <a
        className={cn(
          styles.button,
          styles[size],
          styles[appearance],
          className
        )}
        href={href}
        target="_blank"
      >
        {IconComponent && <IconComponent className={styles.icon} />}
        {children}
      </a>
    );
  }

  if (typeOf === "link") {
    return (
      <Link
        className={cn(
          styles.button,
          styles[size],
          styles[appearance],
          className
        )}
        href={href}
      >
        {IconComponent && <IconComponent className={styles.icon} />}
        {children}
      </Link>
    );
  }
}
