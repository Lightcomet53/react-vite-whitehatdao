import Preview from "./Preview";
import TokenInfo from "./TokenInfo";

const WithPresaleThirdStep: React.FC = () => {
  return (
    <div className="bg-lightColor py-10 px-5 rounded-lg flex">
      <TokenInfo />
      <Preview />
    </div>
  )
}
export default WithPresaleThirdStep;