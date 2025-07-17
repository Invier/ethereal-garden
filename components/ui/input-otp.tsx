"use client"

import { OTPInput, OTPInputContext, OTPInputProps, RenderProps } from "input-otp"
import { Minus } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const InputOTP = (
  {
    ref,
    className,
    containerClassName,
    ...props
  }: Omit<React.ComponentPropsWithRef<typeof OTPInput>, "render"> & {
    ref?: React.RefObject<React.ElementRef<typeof OTPInput>>;
  }
) => (<OTPInput
  ref={ref}
  containerClassName={cn(
    "flex items-center gap-2 has-[:disabled]:opacity-50",
    containerClassName
  )}
  className={cn("disabled:cursor-not-allowed", className)}
  {...props as OTPInputProps}
/>)
InputOTP.displayName = "InputOTP"

const InputOTPGroup = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<"div"> & {
    ref?: React.RefObject<React.ElementRef<"div">>;
  }
) => (<div ref={ref} className={cn("flex items-center", className)} {...props} />)
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = (
  {
    ref,
    index,
    className,
    ...props
  }: React.ComponentPropsWithRef<"div"> & {
    ref?: React.RefObject<React.ElementRef<"div">>;
    index: number;
  }
) => {
  const inputOTPContext: RenderProps | undefined = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots?.[index] ?? {}

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = (
  {
    ref,
    ...props
  }: React.ComponentPropsWithRef<"div"> & {
    ref?: React.RefObject<React.ElementRef<"div">>;
  }
) => (<div ref={ref} role="separator" {...props}>
  <Minus />
</div>)
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
