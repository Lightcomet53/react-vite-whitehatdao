import { Card, CardBody, CardFooter, CardHeader, Progress } from "@material-tailwind/react";
import { IconBellFilled, IconBrandX, IconHeart, IconMessageFilled, IconPlus, IconSend, IconWorld } from "@tabler/icons-react";

const NFTCard: React.FC = () => {
  return (
    <Card className="w-full overflow-hidden bg-lightColor rounded-[15px] mb-14">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="/assets/images/NFTCard/1.jpg"
          alt="NFTCard-image"
          className="h-[50px] w-full"
        />
      </CardHeader>
      <CardBody className="p-5 pb-0">
        <div className="flex items-center text-white">
          <div className="w-[8px] h-[8px] bg-green-500 rounded-full mr-2"></div>
          <span className="text-[12px] mr-3">SALE LIVE</span>
          <span className="text-[12px]">6:23:32:44</span>
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
        <div>
          <div className="flex justify-between text-[12px]">
            <span>Progress</span>
            <span>Intended Raise</span>
          </div>
          <Progress color="green" style={{backgroundColor: "#99999940"}} value={80} variant="gradient" className="my-1" />
          <div className="flex justify-between text-[12px]">
            <span>2100 SOL</span>
            <span>100%</span>
            <span>2100 SOL</span>
            </div>
        </div>
        <div className="flex justify-between mt-5 px-4">
          <p className="border-b border-borderColor text-[12px]">Rate <span className="ml-1 text-orange-500">111.111 $RIVAL</span></p>
          <p className="border-b border-borderColor text-[12px]">LOCK <span className="ml-1 text-orange-500">Manual</span></p>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between p-5">
        <div className="flex items-center">
            <IconWorld color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
            <IconSend color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
            <IconBrandX color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
        </div>
        <IconPlus color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
        <div className="flex items-center">
            <IconMessageFilled color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
            <IconBellFilled color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
            <IconHeart color="#919EAB" className="cursor-pointer w-[17px] mx-1" />
        </div>
      </CardFooter>
    </Card>
  )
}
export default NFTCard;