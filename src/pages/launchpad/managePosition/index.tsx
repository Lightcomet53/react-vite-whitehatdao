import BitRivals from "@/pages/launchpad/BitRivals";
import LeftSidebar from "./LeftSideBar";
import RightSidebar from "./RightSideBar";
import Transactions from "./Transactions";
import TradingViewWidget from "@/components/trading-view";

const ManagePosition: React.FC = () => {
  return (
    <>
      <div className="flex 2xl:h-[calc(100vh-85px)] xl:h-[calc(100vh-83px)] sm:h-[calc(100vh-80px)] h-[calc(100vh-63px)] justify-between">
        <LeftSidebar />
        <div className="pt-3 w-full px-4">
          <BitRivals />
          <div className="h-[calc(100vh-177px)] overflow-y-scroll -mx-4">
            <div className="h-[500px] mb-4">
              <TradingViewWidget />
            </div>
            <Transactions />
          </div>
        </div>
        <RightSidebar />
      </div>
    </>
  )
}
export default ManagePosition;