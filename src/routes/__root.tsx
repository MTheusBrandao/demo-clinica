import { Outlet } from "react-router-dom";
import appCss from "../styles.css?url";

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  );
}
