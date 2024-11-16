import Steps from "../allpresales/Steps";
import PresaleCard from "./PresaleCard";



const ManagePresale: React.FC = () => {
  return (
    <div className="bg-lightColor rounded-lg p-6 m-3">
      <h5 className="mb-5">PRESALE PAGE</h5>
      <p className="mb-5">List of all Projects Launched</p>
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