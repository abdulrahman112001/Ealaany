import { ReactNode } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { FormikValues } from "formik"
import { IoMdAdd } from "react-icons/io"
import { Spinner } from "../UI/Spinner"

const buttonVars = tv({
  base: "relative w-full h-[50px] text-center text-white rounded-xl border  font-semibold mr-4 hover:opacity- transition",
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-transparent text-secondary",
      outline: "bg-transparent text-secondary  !border-primary",
      // success: "bg-green-500 text-white",
      // danger: "bg-red-500 text-white",
      // warning: "bg-yellow-500 text-black",
    },
    disabled: {
      true: "!bg-primary opacity-40  cursor-not-allowed !border-0 !text-white",
    },
    bordered: {
      true: "border-2",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      disabled: true,
      className: "text-gray-500 border-gray-300 border-2",
    },
    {
      color: "primary",
      bordered: true,
      className: "text-mainGreen border-mainGreen bg-white",
    },
    {
      color: "secondary",
      disabled: true,
      className: "text-gray-500 border-gray-300 border-2",
    },
    {
      color: "secondary",
      bordered: true,
      className: "text-secondary border-secondary bg-white",
    },
    {
      color: "dark",
      disabled: true,
      className: "text-gray-500 border-gray-300 border-2 bg-white",
    },
    {
      color: "success",
      bordered: true,
      className: "text-green-500 border-green-500 bg-white",
    },
    {
      color: "danger",
      bordered: true,
      className: "text-red-500 border-red-500 bg-white",
    },
    {
      color: "warning",
      bordered: true,
      className: "text-yellow-500 border-yellow-500 bg-white",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
})

type ButtonVariants_TP = VariantProps<typeof buttonVars>

interface ButtonProps_TP extends ButtonVariants_TP {
  children: ReactNode
  className?: string
  disabled?: boolean
  action?: (param: FormikValues) => void
  variant?: "primary" | "secondary" | "outline"
  loading?: boolean
  type?: "button" | "submit" | "reset"
  bordered?: boolean
  addIcon?: boolean
}

export const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  action,
  loading,
  type = "button",
  bordered = false,
  addIcon,
  ...props
}: ButtonProps_TP) => {
  const newClass =
    (className || "") +
    (loading ? " inline-flex justify-center items-center gap-2" : "")

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={buttonVars({
        color: variant,
        disabled: disabled || loading,
        bordered: bordered,
        className: newClass,
      })}
      onClick={action}
      {...props}
    >
      {loading && <Spinner />}
      <div className="flex items-center justify-center gap-2">
        {addIcon && <IoMdAdd />}
        {children}
      </div>
    </button>
  )
}
