"use client"

import { Checkbox as BaseCheckbox } from "@base-ui-components/react"
import { Check } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const Checkbox = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseCheckbox.Root> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseCheckbox.Root>>;
  }
) => (<BaseCheckbox.Root
  ref={ref}
  className={cn(
    "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[checked]:text-primary-foreground",
    className
  )}
  {...props}
>
  <BaseCheckbox.Indicator
    className={cn("flex items-center justify-center text-current")}
  >
    <Check className="h-4 w-4" />
  </BaseCheckbox.Indicator>
</BaseCheckbox.Root>)
Checkbox.displayName = "Checkbox"

export { Checkbox }
