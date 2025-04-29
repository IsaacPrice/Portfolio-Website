import { ExternalLink } from "lucide-react";
import React, { useState } from "react"

type HoverLinkProps = 
{
    text: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
    variant?: "default" | "underlineAccent" | "fullAccent" | "gradientAccent";
    iconPrefix?: React.ReactNode;
    [key: string]: any;
}

export const HoverLink: React.FC<HoverLinkProps> = ( props: HoverLinkProps ) =>
{
    const [hovering, setHovering] = useState<boolean>(false);

    return (
        <div 
            className="flex flex-row items-center gap-2"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            >
            { props.iconPrefix }
            <a 
                className={`flex flex-col cursor-pointer ${props.variant == "fullAccent" ? "text-sky-400" : "" }`}
                onClick={ props.onClick } 
                href={ props.href }
                target={ props.external ? "_blank" : ""}
                >
                { (props.external && hovering) ? 
                    <span className="flex flex-row items-center gap-2">
                        { props.text }
                        <ExternalLink className="size-5 text-gray-300" />
                    </span>
                :
                    props.text
                }
                <div className="w-full h-[2px]">
                    <div className={`${hovering ? "w-full" : "w-0"} h-full ${(props.variant == "underlineAccent" || props.variant == "fullAccent") ? "bg-sky-400" : "bg-white"} transition-all duration-333`} />
                </div>
                
            </a>
            
        </div>
    )
}     
