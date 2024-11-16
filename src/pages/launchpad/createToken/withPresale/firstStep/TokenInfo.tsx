import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";
import MoveButton from "@/components/common/MoveButton";
import { useNavigate } from "react-router";

const chainOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]

const TokenInfo: React.FC = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/launchpad/create-token/with-presale/second-step")
  }

  return (
    <div className="w-1/2 px-8">
      <h5>TOKEN INFORMATION</h5>
      <div className="mb-10 mt-5">
        <LabelText>Select Chain</LabelText>
        <CustomSelect options={chainOptions} label="Select chain to launch" />
      </div>
      <GradientButton className="mb-8">Fair Launch Presale</GradientButton>
      <div className="mb-5">
        <LabelText>Token Name</LabelText>
        <CustomInput placeholder="Enter Token name" />
      </div>
      <div className="mb-5">
        <LabelText>Symbol (Max 10)</LabelText>
        <CustomInput placeholder="Enter Token symbol" />
      </div>
      <div className="mb-5">
        <LabelText>Decimals</LabelText>
        <CustomInput placeholder="Enter Token decimals" />
      </div>
      <div className="mb-10">
        <LabelText>Max Supply</LabelText>
        <CustomInput placeholder="Enter Token max supply" />
      </div>
      <GradientButton className="w-full rounded-lg mb-8">Create Token</GradientButton>
      <div className="flex justify-between">
        <MoveButton disabled={true}>Back</MoveButton>
        <MoveButton onClick={handleNext}>Next</MoveButton>
      </div>
    </div>
  )
}
export default TokenInfo; 