import { Outlet } from "react-router";
import BitRivals from "./BitRivals";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Popup from "./Popup";

const LaunchPad: React.FC = () => {
  return (
    <div className="flex 2xl:h-[calc(100vh-88px)] xl:h-[calc(100vh-84px)] h-[calc(100vh-80px)] justify-between">
      <div className="border-borderColor border-r">
        <LeftSidebar />
      </div>
      <div className="pt-3 px-4 w-[60vw] lg:w-[66vw]">
        <BitRivals />
        <Outlet />
      </div>
      <div className="border-borderColor border-l">
        <RightSidebar />
      </div>
      <Popup />
    </div>
  )
}
export default LaunchPad;