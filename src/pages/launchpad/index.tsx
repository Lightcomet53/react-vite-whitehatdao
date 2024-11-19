import { Outlet } from "react-router";
import BitRivals from "./BitRivals";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Popup from "./allpresales/Popup";

const LaunchPad: React.FC = () => {
  return (
    <div className="flex 2xl:h-[calc(100vh-85px)] sm:h-[calc(100vh-82px)] h-[calc(100vh-80px)] justify-between">
      <div className="border-r border-r-borderColor relative text-[13px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] w-[20vw] 2xl:w-[17vw]">
        <LeftSidebar />
      </div>
      <div className="pt-3 px-4 w-[60vw] 2xl:w-[66vw]">
        <BitRivals />
        <Outlet />
      </div>
      <div className="border-borderColor border-l w-[20vw] 2xl:w-[17vw]">
        <RightSidebar />
      </div>
      <Popup />
    </div>
  )
}
export default LaunchPad;