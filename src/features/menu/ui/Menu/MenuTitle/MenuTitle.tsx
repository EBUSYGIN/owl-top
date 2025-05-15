import cn from "classnames";
import { Icon } from "@/src/shared/ui";
import { MenuTitleProps } from "./MenuTitle.props";
import styles from "./MenuTitle.module.css";

export function MenuTitle({
  category,
  appearance,
  icon,
  className,
  active,
  children,
  ...props
}: MenuTitleProps) {
  const IconComponent = icon ? Icon[icon] : null;

  return (
    <button
      className={cn(styles[appearance], className, { [styles.active]: active })}
      {...props}
    >
      {IconComponent && <IconComponent />}
      {category}
      {children ? children : ""}
    </button>
  );
}
