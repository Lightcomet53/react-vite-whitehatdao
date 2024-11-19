import { Outlet } from "react-router";
import Headers from "./Headers";

const MyPortfolio: React.FC = () => {
  return (
    <div className="px-10">
      <Headers />
      <div className="overflow-y-scroll h-[calc(100vh-212px)]">
        <Outlet />
      </div>
    </div>
  )
}
export default MyPortfolio;