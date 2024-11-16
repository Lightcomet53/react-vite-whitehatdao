import InvestmentCard, { investmentType } from "./InvestmentCard";




const data: investmentType[] = [
  { image: "/assets/images/investments/1.png", name: "DOGE", price: 12.33, percent: 0.03, invested: 2.3, balance: 12312, value: 232.03, diffValue: 3.34 },
  { image: "/assets/images/investments/1.png", name: "DOGE", price: 12.33, percent: 0.03, invested: 2.3, balance: 12312, value: 232.03, diffValue: 3.34 },
  { image: "/assets/images/investments/1.png", name: "DOGE", price: 12.33, percent: 0.03, invested: 2.3, balance: 12312, value: 232.03, diffValue: 3.34 },
]

const InvestmentList: React.FC = () => {
  return (
    <div>
      {
        data.map((item: investmentType, index: number) => (
          <InvestmentCard
            key={index.toString()}
            {...item}
          />
        ))
      }
    </div>
  )
}
export default InvestmentList;