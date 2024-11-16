import UpSvg from "@/components/icons/Up-svg";
import { IconSettings } from "@tabler/icons-react";
import { useNavigate } from "react-router";

export interface investmentType {
  image: string;
  name: string;
  price: number;
  percent: number;
  invested: number;
  balance: number;
  value: number;
  diffValue: number;
}

const InvestmentCard: React.FC<investmentType> = (props) => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-lighterColor rounded-lg p-3 mb-2">
      <div className="flex w-2/5">
        <img src={props.image} alt="investment-image" className="w-[40px] h-[40px] rounded-full mr-2" />
        <div>
          <p><span>{props.name}</span> <span className="font-bold">&{props.price}</span></p>
          <p className="text-[11px]"><span>Solana</span> <span className="text-gray-600">- Network</span></p>
        </div>
        <div>
          <div className="text-[10px] flex items-center pt-1 ml-2"><span className="rounded-sm mr-1 px-1 text-greenColor bg-[#00D26C1F]">{props.percent}%</span> <UpSvg /></div>
        </div>
        <div>
          <div className="rounded-sm mt-1 ml-2 bg-lightestColor px-1 flex items-center">
            <div className="w-[5px] h-[5px] rounded-full bg-greenColor"></div>
            <span className="text-[10px]">LIVE PRESALE</span>
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
          <span className="text-xs w-1/3 text-center text-gray-500">{props.invested} SQL</span>
          <span className="text-xs w-1/3 text-center text-gray-500">{props.balance} DOGE</span>
          <p className="text-xs w-1/3 text-center text-gray-500">{props.value} <span className="text-greenColor ml-1">+{props.diffValue}%</span></p>
        </div>
      </div>
      <div className="w-1/5 flex justify-end items-center">
        <button className="orange-gradient rounded-lg font-primary px-5 flex items-center text-[10px] h-7" onClick={() => navigate("/manage-position")}>
          <IconSettings className="w-4 mr-1" /> Manage Positions
        </button>
      </div>
    </div>
  )
}
export default InvestmentCard;