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
    <div className="flex justify-between p-5 px-0 w-full mb-2 bitribals">
      <div className="flex items-center w-full overflow-x-scroll">
        <div>
          <div className="flex py-2 px-3 items-center justify-center w-[170px] bg-[#15131D] rounded-[64px]">
            {/* <img src="/assets/images/bit_rials.png" alt="bit-rials" width={28.8} height={28.8} className="rounded-full" /> */}
            <h6 className="font-bold text-greenColor">Upcoming Presales</h6>
          </div>
        </div>
        <IconTrendingUp className="ml-3 mr-8 w-[30px]" />
        <div className="flex justify-between w-full pb-2">
          {
            bitArr.map((item: bitType) => (
              <div key={item.name} className="flex items-center mr-2 bg-[#15131D] pr-2 rounded-[320px]">
                <div>
                  <div className="w-[24px] h-[24px] text-[12px] rounded-full flex justify-center items-center text-white">
                    <img src={item.image} alt="bitrivals" className="w-full h-full rounded-full" />
                  </div>
                </div>
                <span className="text-[11px] mx-2">{item.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default BitRivals;