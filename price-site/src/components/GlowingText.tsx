import React from "react";

type GlowingTextProps = 
{
    children: React.ReactNode;
    as?: keyof React.JSX.IntrinsicElements; 
    className?: string;
};

export const GlowingText: React.FC<GlowingTextProps> = ( props: GlowingTextProps ) => {
  return (
    <div className={"relative inline-block" + props.className}>
      <span className="relative z-10 text-white text-2xl">{ props.children }</span>
      <span
        className="absolute inset-0 blur-[25px] animate-glowText bg-gradient-to-r from-purple-600 via-sky-400 to-purple-600 bg-[200%] text-transparent bg-clip-text text-2xl font-inherit pointer-events-none select-none"
        aria-hidden="true"
      >
        { props.children }
      </span>
    </div>
  );
};
