import { useState } from "react";
import Preview from "./Preview";
import TokenInfo from "./TokenInfo";

export interface NoPresaleFormType {
  name: string;
  symbol: number;
  decimals: number;
  maxSupply: string
}

const initialForm: NoPresaleFormType = {
  name: "",
  symbol: 0,
  decimals: 8,
  maxSupply: ""
}

const NoPresale: React.FC = () => {
  const [form, setForm] = useState<NoPresaleFormType>({ ...initialForm })
  return (
    <div className="bg-lightColor py-10 px-5 rounded-lg flex h-[calc(100vh-176px)] overflow-y-scroll">
      <TokenInfo form={form} setForm={setForm} />
      <Preview form={form} />
    </div>
  )
}
export default NoPresale;