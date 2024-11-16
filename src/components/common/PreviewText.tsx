import clsx from "clsx";

const PreviewText: React.FC<{ name: string, value: React.ReactNode, border?: boolean }> = ({ name, value, border }) => {
  return (
    <div className={clsx("w-full flex items-center border-borderColor py-6", border ? " border-b" : "border-none")}>
      <div className="w-1/3">{name}</div>
      <div className="w-2/3 pl-2 overflow-x-hidden text-[12px]">{value}</div>
    </div>
  )
}
PreviewText.defaultProps = {
  border: true
}
export default PreviewText;