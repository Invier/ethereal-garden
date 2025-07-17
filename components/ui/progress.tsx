"use client"

import { Progress as BaseProgress } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

const Progress = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseProgress.Root> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseProgress.Root>>;
  }
) => (<BaseProgress.Root
  ref={ref}
  className={cn(
    "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
    className
  )}
  {...props}
>
  <BaseProgress.Indicator
    className="h-full w-full flex-1 bg-primary transition-all"
    style={{ transform: `translateX(-${100 - (props.value || 0)}%)` }}
  />
</BaseProgress.Root>)
Progress.displayName = "Progress"

export { Progress }
