import CreateTokenCard from "./CreateTokenCard";

const CreateTokenList: React.FC = () => {
  return (
    <div>
      <div className="py-[50px] flex justify-center mb-32">
        <CreateTokenCard title="Create Token With Dynamic FairLaunch Presale" href="/with-presale/first-step" image="/assets/images/memo-coin.png" />
        <CreateTokenCard title="Create ERC20 Token Without Presale" href="/no-presale" image="/assets/images/ERC-coin.png" />
      </div>
      <p className="text-[#8C8C8C] text-[14px] font-primary">
        Terms & Conditions:<br /><br />
        1. The Terms & Conditions outline the process for creating a token with a Dynamic Fairlaunch Presale. Users can create a token and presale without paying service fees, but a 5% platform fee is charged on the total funds raised if the presale is successful. Token creators have the option to lock up 10% to 20% of the tokens for a specified period, with these tokens being unlocked after the lockup ends. The remaining tokens are added to the presale, where investors can trade during the live event, helping to determine the token price. To be listed on a decentralized exchange (Dex), the presale must raise at least 30% of the target funds. After the presale, automated liquidity is added to the Dex, and LP tokens are burned, which helps prevent rug pulls and ensures community trust.<br /><br />
        2. The creation of an ERC20 token without a presale will incur a fee of $20 USDC, and the total supply of the token will be transferred directly to the token creator's wallet.
      </p>
    </div>
  )
}
export default CreateTokenList;