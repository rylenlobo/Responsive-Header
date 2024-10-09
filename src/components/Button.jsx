import { cn } from "../../utils/utils";

const Button = ({ className,children }) => {
  
  return (
    <button className={cn("font-sans font-medium rounded-lg border-black border-2 text-black px-5 py-1.5 bg-white  active:scale-95 transition-all duration-150", className)} >
      {children}
    </button>
  );
};

export default Button;