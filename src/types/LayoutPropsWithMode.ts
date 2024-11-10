import { ReactNode } from "react";

export interface LayoutPropsWithMode {
  children: ReactNode;
  mode: "editor" | "viewer";
}
