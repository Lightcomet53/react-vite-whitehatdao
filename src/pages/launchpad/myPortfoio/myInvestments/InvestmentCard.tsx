import UpSvg from "@/components/icons/Up-svg";
import { IconSettings } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { PresaleCardType } from "../../managePresale/PresaleCard";
import clsx from "clsx";
import { getStepColor } from "@/components/utils/func";

const InvestmentCard: React.FC<PresaleCardType> = (props) => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-lighterColor rounded-lg p-3 mb-2">
      <div className="flex w-2/5">
        <img src={props.avatar} alt="investment-image" className="w-[40px] h-[40px] rounded-full mr-2" />
        <div>
          <p><span>{props.name}</span> <span className="font-bold">&{12.33}</span></p>
          <p className="text-[11px]"><span>Solana</span> <span className="text-gray-600">- Network</span></p>
        </div>
        <div>
          <div className="text-[10px] flex items-center pt-1 ml-2"><span className="rounded-sm mr-1 px-1 text-greenColor bg-[#00D26C1F]">{0.05}%</span> <UpSvg /></div>
        </div>
        <div>
          <div className="rounded-sm mt-1 ml-2 bg-lightestColor px-1 flex items-center">
            <div className={clsx("w-[5px] h-[5px] rounded-full mr-1", getStepColor(props.step))}></div>
            <span className="text-[10px]">{props.step.toUpperCase()} PRESALE</span>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex justify-around py-1 border-b border-gray-500">
          <span className="text-xs w-1/3 text-center text-gray-500">INVESTED</span>
          <span className="text-xs w-1/3 text-center text-gray-500">BALANCE</span>
          <span className="text-xs w-1/3 text-center text-gray-500">VALUE</span>
        </div>
        <div className="flex justify-around pt-2">
          <span className="text-xs w-1/3 text-center text-gray-500">{2.3} SQL</span>
          <span className="text-xs w-1/3 text-center text-gray-500">{12312} DOGE</span>
          <p className="text-xs w-1/3 text-center text-gray-500">234.03 <span className="text-greenColor ml-1">+{3.3}%</span></p>
        </div>
      </div>
      <div className="w-1/5 flex justify-end items-center">
        <button className="orange-gradient rounded-lg font-primary px-5 py-1 flex items-center" onClick={() => navigate("/presale-detail/" + props.id)}>
          <IconSettings className="w-5 mr-1" /> Manage Positions
        </button>
      </div>
    </div>
  )
}
export default InvestmentCard;