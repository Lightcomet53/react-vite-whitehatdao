import NFTCard, { NFTCardType } from "./NFTCard";
import { presaleData } from "@/components/utils/constants";

interface PropsType {
  step: string;
}

const NFTList: React.FC<PropsType> = props => {

  return (
    <div className="flex flex-wrap overflow-y-scroll h-[calc(100vh-318.55px)] -mx-5">
      {
        presaleData.filter((item: NFTCardType) => item.step === props.step).map((item: NFTCardType, index: number) => (
          <div key={index} className={"px-5 w-1/3"}>
            <NFTCard {...item} />
          </div>

        ))
      }
    </div>
  )
}
export default NFTList;