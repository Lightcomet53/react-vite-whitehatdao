import NFTCard from "./NFTCard";

const NFTList: React.FC = () => {
  return (
    <div className="flex justify-between overflow-y-scroll h-[calc(100vh-302px)]">
      <div className="w-[32%] pr-1 lg:pr-4">
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </div>
      <div className="my-3 w-[2px] bg-borderColor h-full"></div>
      <div className="w-[32%] px-3 lg:px-4">
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </div>
      <div className="my-3 w-[2px] bg-borderColor h-full"></div>
      <div className="w-[32%] pl-1 lg:pl-4">
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </div>
    </div>
  )
}
export default NFTList;