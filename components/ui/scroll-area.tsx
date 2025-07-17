"use client"

import { ScrollArea as BaseScrollArea } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

const ScrollArea = (
  {
    ref,
    className,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseScrollArea.Root> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseScrollArea.Root>>;
  }
) => (<BaseScrollArea.Root
  ref={ref}
  className={cn("relative overflow-hidden", className)}
  {...props}
>
  <BaseScrollArea.Viewport className="h-full w-full rounded-[inherit]">
    {children}
  </BaseScrollArea.Viewport>
  <ScrollBar />
  <BaseScrollArea.Corner />
</BaseScrollArea.Root>)
ScrollArea.displayName = "ScrollArea"

const ScrollBar = (
  {
    ref,
    className,
    orientation = "vertical",
    ...props
  }: React.ComponentPropsWithRef<typeof BaseScrollArea.Scrollbar> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseScrollArea.Scrollbar>>;
  }
) => (<BaseScrollArea.Scrollbar
  ref={ref}
  orientation={orientation}
  className={cn(
    "flex touch-none select-none transition-colors",
    orientation === "vertical" &&
      "h-full w-2.5 border-l border-l-transparent p-[1px]",
    orientation === "horizontal" &&
      "h-2.5 flex-col border-t border-t-transparent p-[1px]",
    className
  )}
  {...props}
>
  <BaseScrollArea.Thumb className="relative flex-1 rounded-full bg-border" />
</BaseScrollArea.Scrollbar>)
ScrollBar.displayName = "ScrollBar"

export { ScrollArea, ScrollBar }
