import { useState } from "react";
import Preview from "./Preview";
import TokenInfo from "./TokenInfo";

export interface RegularPresaleFormType {
  name: string;
  symbol: number;
  decimals: number;
  maxSupply: string;
  contractAddress: string;
  creatorAddress: string;
  dex: string;
  image: string | undefined;
}

const initialForm: RegularPresaleFormType = {
  name: "",
  symbol: 0,
  decimals: 8,
  maxSupply: "",
  contractAddress: "",
  creatorAddress: '',
  dex: "A",
  image: undefined
}
const CreateRegularPresale: React.FC = () => {
  const [form, setForm] = useState<RegularPresaleFormType>({ ...initialForm })
  return (
    <div className="h-[calc(100vh-176px)] overflow-y-scroll pb-3">
      <div className="bg-lightColor py-10 px-5 rounded-lg flex">
        <TokenInfo form={form} setForm={setForm} />
        <Preview form={form} />
      </div>
    </div>
  )
}
export default CreateRegularPresale;