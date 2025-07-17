"use client"

import { Dialog as BaseDialog } from "@base-ui-components/react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const Sheet = BaseDialog.Root

const SheetTrigger = BaseDialog.Trigger

const SheetClose = BaseDialog.Close

const SheetPortal = BaseDialog.Portal

const SheetOverlay = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseDialog.Backdrop> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseDialog.Backdrop>>;
  }
) => (<BaseDialog.Backdrop
  ref={ref}
  className={cn(
    "fixed inset-0 z-50 bg-black/80  data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0",
    className
  )}
  {...props}
/>)
SheetOverlay.displayName = "SheetOverlay"

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[leave]:duration-300 data-[enter]:duration-500 data-[enter]:animate-in data-[leave]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[leave]:slide-out-to-top data-[enter]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[leave]:slide-out-to-bottom data-[enter]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[leave]:slide-out-to-left data-[enter]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[leave]:slide-out-to-right data-[enter]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithRef<typeof BaseDialog.Popup>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = (
  {
    ref,
    side = "right",
    className,
    children,
    ...props
  }: SheetContentProps & {
    ref?: React.RefObject<React.ElementRef<typeof BaseDialog.Popup>>;
  }
) => (<SheetPortal>
  <SheetOverlay />
  <BaseDialog.Popup
    ref={ref}
    className={cn(sheetVariants({ side }), className)}
    {...props}
  >
    <BaseDialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[enter]:bg-secondary">
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </BaseDialog.Close>
    {children}
  </BaseDialog.Popup>
</SheetPortal>)
SheetContent.displayName = "SheetContent"

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseDialog.Title> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseDialog.Title>>;
  }
) => (<BaseDialog.Title
  ref={ref}
  className={cn("text-lg font-semibold text-foreground", className)}
  {...props}
/>)
SheetTitle.displayName = "SheetTitle"

const SheetDescription = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseDialog.Description> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseDialog.Description>>;
  }
) => (<BaseDialog.Description
  ref={ref}
  className={cn("text-sm text-muted-foreground", className)}
  {...props}
/>)
SheetDescription.displayName = "SheetDescription"

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
