import Steps from "../allpresales/Steps";
import PresaleCard from "./PresaleCard";



const ManagePresale: React.FC = () => {
  return (
    <div className="bg-lightColor rounded-lg p-6 m-3">
      <h6 className="mb-5">PRESALE PAGE</h6>
      <p className="mb-5 text-sm">List of all Projects Launched</p>
      <Steps />
      <div className="flex">
        <div className="w-1/3 px-3">
          <PresaleCard />
        </div>
        <div className="w-1/3 px-3">
          <PresaleCard />
        </div>
        <div className="w-1/3 px-3">
          <PresaleCard />

        </div>
      </div>
    </div>
  )
}
export default ManagePresale;