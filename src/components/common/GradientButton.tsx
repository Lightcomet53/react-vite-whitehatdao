import React from "react"
import clsx from 'clsx';

const GradientButton: React.FC<{ children: React.ReactNode, className?: string }> = ({ className, children }) => {
  return (
    <button className={clsx("orange-gradient rounded-full font-primary px-5 py-2", className)}>{children}</button>
  )
}
export default GradientButton;