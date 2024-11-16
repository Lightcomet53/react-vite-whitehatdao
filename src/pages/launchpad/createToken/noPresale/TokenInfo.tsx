import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";

const chainOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]

const TokenInfo: React.FC = () => {

  return (
    <div className="w-1/2 px-8">
      <h5>TOKEN INFORMATION</h5>
      <div className="mb-28 mt-5">
        <LabelText>Select Chain</LabelText>
        <CustomSelect options={chainOptions} label="Select chain to launch" />
      </div>
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
    </div>
  )
}
export default TokenInfo; 