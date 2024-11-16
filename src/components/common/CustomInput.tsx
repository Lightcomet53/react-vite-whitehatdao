import { Input, InputProps } from "@material-tailwind/react";
import clsx from "clsx";

interface PropsType extends InputProps {
  className?: string;
}

const CustomInput: React.FC<PropsType> = ({ className, ...props }) => {
  return (
    <Input crossOrigin={false} labelProps={{ className: "content-none" }} containerProps={{ className }} className={clsx("placeholder:opacity-50 text-gray-500 border-none mb-3")} style={{ backgroundColor: "#211E2C" }} {...props} />
  )
}

export default CustomInput;