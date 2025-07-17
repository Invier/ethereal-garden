"use client"

import * as React from "react"

import { cn } from "../utils"

const AspectRatio = (
  {
    ref,
    className,
    ratio = 16 / 9,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.RefObject<HTMLDivElement>;
    ratio?: number;
  }
) => (
  <div
    ref={ref}
    className={cn("relative w-full", className)}
    style={{ paddingBottom: `${100 / ratio}%` }}
    {...props}
  >
    <div className="absolute inset-0 overflow-hidden">
      {props.children}
    </div>
  </div>
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }