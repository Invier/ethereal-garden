"use client"

import { Separator as BaseSeparator } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

const Separator = (
  {
    ref,
    className,
    orientation = "horizontal",
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSeparator> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSeparator>>;
  }
) => (<BaseSeparator
  ref={ref}
  orientation={orientation}
  className={cn(
    "shrink-0 bg-border",
    orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
    className
  )}
  {...props}
/>)
Separator.displayName = "Separator"

export { Separator }
