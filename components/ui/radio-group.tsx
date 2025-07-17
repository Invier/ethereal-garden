"use client"

import { RadioGroup as BaseRadioGroup, Radio as BaseRadio } from "@base-ui-components/react"
import { Circle } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const RadioGroup = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseRadioGroup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseRadioGroup>>;
  }
) => {
  return (
    <BaseRadioGroup
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
}
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseRadio.Root> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseRadio.Root>>;
  }
) => {
  return (
    <BaseRadio.Root
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <BaseRadio.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </BaseRadio.Indicator>
    </BaseRadio.Root>
  )
}
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
