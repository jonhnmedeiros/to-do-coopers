
interface ButtonProps {
  text: string;
  extraClasses?: string;
  onClick: () => void;
}

export const Button = ({text, extraClasses, ...rest}: ButtonProps) => {
  return (
    <button
      className={`font-semibold leading-[29px] text-white text-2xl w-[300px] h-16 rounded-[10px] ${extraClasses}`}
      {...rest}
    >{text}</button>
  )
}