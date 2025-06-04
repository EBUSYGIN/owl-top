import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SubmitNotificationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  changeSubmitStatus: (status: boolean | null) => void;
  color: "green" | "red";
  title: string;
  info: string;
}
