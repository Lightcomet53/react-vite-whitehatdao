import { IconTrendingUp } from "@tabler/icons-react";

interface bitType {
  name: string;
  image: string;
}

const bitArr: bitType[] = [
  { name: "KOLZ", image: "/assets/images/bitrivals/1.png" },
  { name: "BNOM", image: "/assets/images/bitrivals/2.png" },
  { name: "PKC", image: "/assets/images/bitrivals/3.png" },
  { name: "SRIVAL", image: "/assets/images/bitrivals/4.png" },
  { name: "BDToken", image: "/assets/images/bitrivals/5.png" },
  { name: "KLLR", image: "/assets/images/bitrivals/6.png" },
  { name: "DBB", image: "/assets/images/bitrivals/7.png" },
]

const BitRivals: React.FC = () => {
  return (
    <div className="flex justify-between p-5 px-0 w-full mb-2">
      <div className="flex items-center w-full">
        <div className="flex py-2 px-5 pr-10 items-center bg-[#15131D] rounded-[64px]">
          <img src="/assets/images/bit_rials.png" alt="bit-rials" width={28.8} height={28.8} className="rounded-full" />
          <h6 className="font-bold ml-4">BitRivals</h6>
        </div>
        <IconTrendingUp className="ml-3 mr-8 w-[30px]" />
        <div className="flex justify-between w-full">
          {
            bitArr.map((item: bitType, i) => (
              <div key={item.name} className="flex items-center mr-1 bg-[#15131D] pr-2 rounded-[320px]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#F6851B] flex justify-center items-center text-white">{i + 1}</div>
                <span className="text-[11px] ml-3 mr-2">{item.name}</span>
                <img src={item.image} alt="bitrivals" width={16} height={16} className="rounded-[8px]" />
              </div>
            ))
          } 
        </div>
      </div>
    </div>
  )
}
export default BitRivals;