import { useContext } from "react";
import { SidebarContext } from "../context/sidebar.context";

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("SidebarContext must be used within a SidebarProvider");
  }

  return context;
};
