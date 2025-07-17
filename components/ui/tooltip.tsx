"use client"

import { Tooltip as BaseTooltip } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

const TooltipProvider = BaseTooltip.Provider

const Tooltip = BaseTooltip.Root

const TooltipTrigger = BaseTooltip.Trigger

const TooltipContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseTooltip.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseTooltip.Popup>>;
  }
) => (
  <BaseTooltip.Portal>
    <BaseTooltip.Popup
      ref={ref}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[leave]:animate-out data-[leave]:fade-out-0 data-[leave]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </BaseTooltip.Portal>
)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
