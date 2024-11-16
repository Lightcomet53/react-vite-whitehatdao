import { useState } from "react";
import Steps from "./Steps";
import InvestmentList from "./InvestmentList";


const MyInvestments: React.FC = () => {
  const [step, setStep] = useState<string>("Live")
  return (
    <div>
      <Steps step={step} setStep={setStep} />
      <InvestmentList />
    </div>
  )
}
export default MyInvestments;