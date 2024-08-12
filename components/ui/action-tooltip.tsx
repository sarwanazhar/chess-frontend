'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";

interface ActionTooltipProps{
    label?: string;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | "left";
    align?: 'start' | 'center' | 'end';
    hidden?: boolean;
}

const ActionTooltip = ({
    label,
    children,
    side,
    align,
    hidden
}: ActionTooltipProps) => {

    if (hidden) {
        return (
            <div>{children}</div>
        )
    }

    return ( 
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children} 
                </TooltipTrigger>
                <TooltipContent align={align} side={side}>
                    <p className="font-semibold text-sm capitalize">
                        {label?.toLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
     );
}
 
export default ActionTooltip;