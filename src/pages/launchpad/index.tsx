import { Outlet } from "react-router";
import BitRivals from "./BitRivals";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Popup from "./Popup";

const LaunchPad: React.FC = () => {
  return (
    <div className="flex 2xl:h-[calc(100vh-88px)] xl:h-[calc(100vh-84px)] h-[calc(100vh-80px)] justify-between">
      <LeftSidebar />
      <div className="pt-3 w-full px-4">
        <BitRivals />
        <Outlet />
      </div>
      <RightSidebar />
      <Popup />
    </div>
  )
}
export default LaunchPad;