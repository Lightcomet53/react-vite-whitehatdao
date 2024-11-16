import Preview from "./Preview";
import TokenInfo from "./TokenInfo";

const CreateRegularPresale: React.FC = () => {
  return (
    <div className="h-[calc(100vh-176px)] overflow-y-scroll pb-3">
      <div className="bg-lightColor py-10 px-5 rounded-lg flex">
        <TokenInfo />
        <Preview />
      </div>
    </div>
  )
}
export default CreateRegularPresale;