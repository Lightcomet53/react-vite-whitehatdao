import { Outlet } from "react-router"

const WithPresale: React.FC = () => {
  return (
      <div className="h-[calc(100vh-174px)] overflow-y-scroll pb-3">
        <Outlet />
      </div>
  )
}
export default WithPresale;