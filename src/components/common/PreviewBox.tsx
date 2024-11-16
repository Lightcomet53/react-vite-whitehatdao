import TwitterSvg from "../icons/twitter-svg";
import TelegramSvg from "../icons/Telegram-svg";
import RedditSvg from "../icons/Reddit-svg";
import WhatsAppSvg from "../icons/Whatsapp-svg";
import CopySvg from "../icons/Copy-svg";

const PreviewBox: React.FC = () => {
  return (
    <div className="p-2 bg-lighterColor rounded-lg">
      <div className="flex justify-between items-center p-2 bg-lightestColor rounded-lg">
        <div className="flex items-center">
          <div className="w-[51px] h-[51px] bg-[#3A6024] rounded-full mr-3"></div>
          <div>
            <p className="text-blue-700">Token Name</p>
            <p>Symbol</p>
          </div>
        </div>
        <div className="flex items-center">
          <TwitterSvg className="mx-1" />
          <TelegramSvg className="mx-1" />
          <RedditSvg className="mx-1" />
          <WhatsAppSvg className="mx-1" />
          <CopySvg className="mx-1" />
        </div>
      </div>
    </div>
  )
}
export default PreviewBox;