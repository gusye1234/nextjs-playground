import { ReactNode } from "react";
import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string,
    children: ReactNode
}) => {
    return (
    <div className={cn("bg-blue-200 my-auto mx-auto w-full max-w-screen-xl px-2 md:px-4 py-1 md:py-2", className)}>
        {children}
    </div>
    )
};


export default MaxWidthWrapper;