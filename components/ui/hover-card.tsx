"use client"

import { Tooltip as BaseTooltip } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

const HoverCard = BaseTooltip.Root

const HoverCardTrigger = BaseTooltip.Trigger

const HoverCardContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseTooltip.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseTooltip.Popup>>;
  }
) => (<BaseTooltip.Popup
  ref={ref}
  className={cn(
    "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    className
  )}
  {...props}
/>)
HoverCardContent.displayName = "HoverCardContent"

export { HoverCard, HoverCardTrigger, HoverCardContent }
