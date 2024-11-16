import CustomInput from "@/components/common/CustomInput";
import CustomSelect from "@/components/common/CustomSelect";
import GradientButton from "@/components/common/GradientButton";
import LabelText from "@/components/common/LabelText";
import MoveButton from "@/components/common/MoveButton";
import { IconPhotoPlus } from "@tabler/icons-react";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router";

const chainOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]

const timeOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]

const dexOptions: { title: string, value: string }[] = [
  { title: "A", value: "a" },
  { title: "B", value: "b" },
  { title: "C", value: "c" },
]

const suggestionOptions: string[] = ["DeFI", "DAO", 'Meme Coin', "Non-Profit", "Public Goods", 'RWA', "NFT"]

const TokenInfo: React.FC = () => {

  const navigate = useNavigate();

  const handleBack = () => {
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
        <LabelText>Contract Address</LabelText>
        <CustomInput placeholder="Enter Token contact address" />
      </div>
      <div className="mb-5">
        <LabelText>Contract Owner Address</LabelText>
        <CustomInput placeholder="Enter owner contract address" />
      </div>
      <div className="mb-5">
        <LabelText>Socials</LabelText>
        <CustomInput className="mb-3" placeholder="Website URL" />
        <CustomInput className="mb-3" placeholder="Twitter URL" />
        <CustomInput className="mb-3" placeholder="Telegram Group URL" />
        <CustomInput className="mb-3" placeholder="Discord URL" />
        <CustomInput className="mb-3" placeholder="Whitepaper URL" />
        <CustomInput className="mb-3" placeholder=" URL" />
      </div>
      <div className="mb-5">
        <LabelText>Intended amound to raise:</LabelText>
        <CustomInput placeholder="Enter amound to raise" />
      </div>
      <div className="mb-5">
        <LabelText>Presale starts:</LabelText>
        <div className="flex">
          <div className="w-3/4 pr-2">
            <CustomInput placeholder="dd/mm/yy" />
          </div>
          <div className="1/4">
            <CustomSelect options={timeOptions} label="UTC Time" />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <LabelText>Presale ends:</LabelText>
        <div className="flex">
          <div className="w-3/4 pr-2">
            <CustomInput placeholder="dd/mm/yy" />
          </div>
          <div className="1/4">
            <CustomSelect options={timeOptions} label="UTC Time" />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <CustomSelect options={dexOptions} label="Select Dex" />
      </div>
      <div className="mb-3">
        <LabelText>Tags - Max 2 tags</LabelText>
        <CustomInput />
      </div>
      <div className="flex items-center mb-5">
        <span className="mr-2 text-sm">Suggestion:</span>
        {
          suggestionOptions.map((item: string) => (
            <div className="bg-[#475569] px-1 py-[2px] rounded-lg text-[8px] mr-1">{item}</div>
          ))
        }
      </div>
      <div className="mb-20">
        <FileUploader label="Upload an image" children={
          <div className="w-full h-[130px] border-dashed border-2 border-gray-400 flex justify-center items-center rounded-xl">
            <div>
              <IconPhotoPlus className="w-[50px] h-[50px] m-auto mb-2" />
              <h5>Upload an image</h5>
            </div>
          </div>
        }
        />
      </div>
      <div className="flex justify-between">
        <MoveButton disabled={true} onClick={handleBack}>Back</MoveButton>
        <GradientButton className="rounded-lg">Create Presale</GradientButton>
      </div>
    </div>
  )
}
export default TokenInfo; 