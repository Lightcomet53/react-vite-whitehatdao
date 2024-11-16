import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";

const lockOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]

const LockToken: React.FC = () => {

  return (
    <div className="w-1/2 px-8">
      <h5 className="mb-6">LOCK TOKEN</h5>
      <div className="mb-5">
        <LabelText>Token Contract Address</LabelText>
        <CustomInput placeholder="Enter Token contract address" />
      </div>
      <div className="mb-10 mt-5">
        <LabelText>Token Lock amount</LabelText>
        <CustomSelect options={lockOptions} label="Select lock amount" />
      </div>
      <div className="mb-10 mt-5">
        <LabelText>Choose Lock Duration</LabelText>
        <CustomSelect options={lockOptions} label="Select lock duration" />
      </div>
      <GradientButton className="w-full rounded-lg mb-8">Create Lock</GradientButton>
    </div>
  )
}
export default LockToken; 