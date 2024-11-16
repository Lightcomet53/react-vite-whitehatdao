import GradientButton from "@/components/common/GradientButton";
import RedditSvg from "@/components/icons/Reddit-svg";
import TelegramSvg from "@/components/icons/Telegram-svg";
import TwitterSvg from "@/components/icons/twitter-svg";
import WhatsAppSvg from "@/components/icons/Whatsapp-svg";
import { Button } from "@material-tailwind/react";

const LeftSidebar: React.FC = () => {
  return (
    <div className="py-8 border-r pt-[80px] border-r-borderColor relative">
      <div className="xl:w-[17vw]">
        <h5 className="bg-[#222227] text-[20px] p-3 text-center">dogwifhat</h5>
        <div className=" px-3 flex flex-col items-center">
          <img src="/assets/images/avatars/dog.jpg" alt="avatar" className="w-[150px] my-5" />
          <div className="flex mb-10">
            <TwitterSvg className="mr-2" />
            <TelegramSvg className="mr-2" />
            <RedditSvg className="mr-2" />
            <WhatsAppSvg className="mr-2" />
          </div>
          <Button className="bg-[#475DC0] px-16">Promote</Button>
          <div className="mt-4 rounded-lg p-4 mb-5" style={{
            backgroundImage: 'radial-gradient(100% 110% at 50% 0%, #202F27 10%, #000000 90%)'
          }}>
            <p className="text-[11px] text-center" style={{lineHeight: 1}}>Dogwifhat is a memecoin based on a popular meme of a Shiba Inu puppy wearing a pink beanie. It's a relative newcomer to the memecoin segment, having launched in late 2023, but has seen remarkably rapid growth thanks to an engaged community.</p>
          </div>
          <GradientButton className="rounded-lg text-[14px]" style={{lineHeight: 1}}>Claim 5% of Total Amount Raised</GradientButton>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar;