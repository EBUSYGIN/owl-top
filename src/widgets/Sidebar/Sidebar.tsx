import { Menu } from "@/src/features/menu/ui/Menu/Menu";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
