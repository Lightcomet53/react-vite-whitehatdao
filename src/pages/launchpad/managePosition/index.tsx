import BitRivals from "@/pages/launchpad/BitRivals";
import LeftSidebar from "./LeftSideBar";
import RightSidebar from "./RightSideBar";
import Transactions from "./Transactions";

const ManagePosition: React.FC = () => {
  return (
    <>
      <div className="flex 2xl:h-[calc(100vh-85px)] sm:h-[calc(100vh-82px)] h-[calc(100vh-80px)] justify-between">
        <LeftSidebar />
        <div className="pt-3 w-full px-4">
          <BitRivals />
          <div className="h-[calc(100vh-176px)] -mx-4">
            <div className="h-[600px]"></div>
            <Transactions />
          </div>
        </div>
        <RightSidebar />
      </div>
    </>
  )
}
export default ManagePosition;