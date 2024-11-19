import { presaleData } from "@/components/utils/constants";
import Steps from "../allpresales/Steps";
import PresaleCard, { PresaleCardType } from "./PresaleCard";
import { useState } from "react";
import clsx from "clsx";



const ManagePresale: React.FC = () => {
  const [step, setStep] = useState<string>("Live");
  const getNumber = (index: number) => {
    if (index % 3 === 0) return "pr-3 2xl:pr-5";
    else if (index % 3 === 1) return "px-3 2xl:px-5";
    else return "pl-3 2xl:pl-5";
  }

  return (
    <div className="bg-lightColor rounded-lg p-6 m-3 h-[calc(100vh-180px)] overflow-y-scroll">
      <h5 className="mb-5">PRESALE PAGE</h5>
      <p className="mb-5">List of all Projects Launched</p>
      <Steps step={step} setStep={setStep} />
      <div className="flex">
        {
          presaleData.filter((item: PresaleCardType) => item.step === step).map((item: PresaleCardType, index: number) => (
            <div key={index} className={clsx("w-1/3", getNumber(index))}>
              <PresaleCard {...item} />
            </div>

          ))
        }
      </div>
    </div>
  )
}
export default ManagePresale;