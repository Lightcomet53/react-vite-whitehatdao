import { IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router";

const TokenCard: React.FC<{ title: string, href: string, image: string }> = ({ title, href, image }) => {

  const navigate = useNavigate();

  return (
    <div
      className="rounded-2xl px-2 py-4 2xl:px-5 mx-5 cursor-pointer hover:shadow-gray-700 hover:shadow-lg relative overflow-hidden h-full"
      onClick={() => navigate("/launchpad/create-token" + href)}
    >
      <img src={image} alt="coin-image" className="absolute w-full h-full blur-[3px] rounded-lg left-0 top-0 z-0" />
      <div className="w-full h-full bg-[rgba(21,19,29,0.9)] pt-10 pb-7 px-16 flex flex-col relative justify-center items-center text-center rounded-2xl">
        <h5 className="font-primary text-[18px] 2xl:text-[20px]">{title}</h5>
        <div>
          <IconPlus className="w-[45px] h-[40px] mt-3" />
        </div>
      </div>
    </div>
  )
}
export default TokenCard;