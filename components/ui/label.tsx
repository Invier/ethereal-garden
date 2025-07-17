"use client"

import { Field } from "@base-ui-components/react"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof Field.Label> & {
    ref?: React.RefObject<React.ElementRef<typeof Field.Label>>;
  } & VariantProps<typeof labelVariants>
) => (<Field.Label
  ref={ref}
  className={cn(labelVariants(), className)}
  {...props}
/>)
Label.displayName = "Label"

export { Label }
