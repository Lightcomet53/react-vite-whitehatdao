import { Textarea, TextareaProps } from "@material-tailwind/react";
import clsx from "clsx";

interface PropsType extends TextareaProps {
  className?: string;
}

const CustomTextarea: React.FC<PropsType> = ({ className, ...props }) => {
  return (
    <Textarea labelProps={{className: "content-none"}} className={clsx("placeholder:opacity-50 text-gray-500 border-none", className && className)} style={{backgroundColor: "#211E2C"}} {...props} />
  )
}

export default CustomTextarea;