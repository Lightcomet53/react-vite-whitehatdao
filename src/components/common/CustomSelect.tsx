import { Option, Select, SelectProps } from "@material-tailwind/react";
import clsx from "clsx";

interface PropsType extends SelectProps {
  className?: string;
  options: {
    title: string;
    value: string;
  }[]
}

const CustomSelect: React.FC<PropsType> = ({ options, ...props }) => {
  return (
    <Select
      variant="outlined"
      className={clsx("border-none rounded-lg px-3 bg-lighterColor")}
      labelProps={{
        className: "px-3 content-none"
      }}
      menuProps={{
        className: "bg-lighterColor"
      }}
      {...props}
    >
      {
        options.map((item, index) => (
          <Option key={index} value={item.value}>
            {item.title}
          </Option>
        ))
      }
    </Select>
  )
}

export default CustomSelect;