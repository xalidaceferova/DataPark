import * as React from "react"
import { cn } from "@/lib/utils"
import { IoIosSearch } from "react-icons/io";
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    ( 
    <><input
      type={type}
      className={cn(
        "flex  h-[46px]  w-[740px] bg-[#F6F6F6] rounded-md border border-input  px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  placeholder:text-[16px] placeholder:ml-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      ref={ref}
      {...props} />
     
       </>
    )
  );
})
Input.displayName = "Input"

export { Input }