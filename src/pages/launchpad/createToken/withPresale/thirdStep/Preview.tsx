import PreviewBox from "@/components/common/PreviewBox";
import PreviewLink from "@/components/common/PreviewLink";
import PreviewText from "@/components/common/PreviewText";

const Preview: React.FC = () => {
  return (
    <div className="w-1/2 px-8">
      <h5 className="mb-5">PREVIEW</h5>
      <PreviewBox />
      <div className="bg-lighterColor mt-5 p-5 rounded-lg">
        <h6 className="text-[18px] mb-10">Token Information</h6>
        <PreviewText name="Name" value={<span></span>} />
        <PreviewText name="Symbol" value={<span></span>} />
        <PreviewText name="Decimals" value={<span>6</span>} />
        <PreviewText name="Presale Allocation" value={<span>XXXXXXX</span>} />
        <PreviewText name="Token Contact Address" value={<PreviewLink to="#" text="ESZrirvWmzfasUxR3Q7iaiX8R48JYurrMhrZ9DeSLuae" />} />
        <PreviewText border={false} name="Token Creator Address" value={<PreviewLink to="#" text="ESZrirvWmzfasUxR3Q7iaiX8R48JYurrMhrZ9DeSLuae" />} />
        <PreviewText name="Max Supply" value={<span>XXXXXX</span>} />
        <PreviewText name="Locked amount" value={<span>XXXXXX</span>} />
        </div>
    </div>
  )
}
export default Preview;