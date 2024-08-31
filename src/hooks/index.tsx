import { ReactNode } from "react";
import { MinicartProvider } from "./MinicartContent";

interface ChildrenProps {
  children: ReactNode;
}

export function AppProvider({ children }: ChildrenProps) {
  return <MinicartProvider>{children}</MinicartProvider>;
}
