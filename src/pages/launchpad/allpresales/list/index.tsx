import clsx from "clsx";
import NFTCard, { NFTCardType } from "./NFTCard";
import { presaleData } from "@/components/utils/constants";

interface PropsType {
  step: string;
}

const NFTList: React.FC<PropsType> = props => {

  const getNumber = (index: number) => {
    if (index % 3 === 0) return "pr-3 2xl:pr-5";
    else if (index % 3 === 1) return "px-3 2xl:px-5";
    else return "pl-3 2xl:pl-5";
  }

  return (
    <div className="flex flex-wrap overflow-y-scroll h-[calc(100vh-318.55px)]">
      {
        presaleData.filter((item: NFTCardType) => item.step === props.step).map((item: NFTCardType, index: number) => (
          <div key={index} className={clsx("w-1/3", getNumber(index))}>
            <NFTCard {...item} />
          </div>

        ))
      }
    </div>
  )
}
export default NFTList;