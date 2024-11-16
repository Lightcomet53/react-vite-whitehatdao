import { Outlet } from "react-router";
import BitRivals from "./BitRivals";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Popup from "./allpresales/Popup";

const LaunchPad: React.FC = () => {
  return (
    <div className="flex 2xl:h-[calc(100vh-73px)] xl:h-[calc(100vh-69px)] sm:h-[calc(100vh-65px)] h-[calc(100vh-63px)] justify-between">
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