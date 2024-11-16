import GradientButton from "@/components/common/GradientButton";
import DownloadSvg from "@/components/icons/Download-svg";
import SettingSvg from "@/components/icons/Setting-svg";
import clsx from "clsx";


const PresaleCard: React.FC = () => {

  const getColor = (step: string) => {
    if (step === "LIVE") {
      return "bg-greenColor"
    } else if (step === "UPCOMING") {
      return "bg-orange-500"
    } else {
      return "bg-purple-500"
    }
  }

  return (
    <div className="rounded-xl bg-lighterColor py-4 px-5 mb-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className={clsx("w-[8px] h-[8px] mr-2 rounded-full", getColor("LIVE"))}></div>
          <span className="text-[11px]">LIVE</span>
          <span className="text-[11px]">6:12:43:34:22</span>
        </div>
        <div className="flex items-center">
          <SettingSvg />
          <span className="text-[11px] ml-1">Manage Presale</span>
        </div>
      </div>
      <div className="flex items-center mb-4 mt-7">
        <div className="relative">
          <img src="/assets/images/status/1.png" alt="status" className="absolute -top-[10px] -left-[10px] w-[28px] h-[28px]" />
          <img src="/assets/images/avatars/a.png" alt="avatar" className="mr-4 rounded-full w-[51px] h-[51px]" />
        </div>
        <div className="text-white">
          <p className="text-[12px]">PINGO</p>
          <p className="text-[11.5px]">Hyper Launch</p>
          <p className="text-[11.5px]">Spots Left 2499990</p>
        </div>
      </div>
      <div className="flex justify-between">
        <GradientButton className="text-[12px] px-1 rounded-lg h-8 py-0">Trade Live on Dex</GradientButton>
        <button className="text-[12px] rounded-lg font-primary h-9 py-0 bg-white px-3 text-black flex items-center"><DownloadSvg className="mr-2 mt-[1px]" /> Investor CSV File</button>
      </div>
    </div>
  )
}
export default PresaleCard;