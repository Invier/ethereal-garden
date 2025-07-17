"use client"

import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

import { buttonVariants } from "./button"

const AlertDialog = BaseAlertDialog.Root

const AlertDialogTrigger = BaseAlertDialog.Trigger

const AlertDialogPortal = BaseAlertDialog.Portal

const AlertDialogOverlay = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAlertDialog.Backdrop>
) => (
  <BaseAlertDialog.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0",
      className
    )}
    {...props}
  />
)
AlertDialogOverlay.displayName = "AlertDialogOverlay"

const AlertDialogContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAlertDialog.Popup>
) => (
  <AlertDialogPortal>
    <AlertDialogOverlay ref={ref} />
    <BaseAlertDialog.Popup
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[leave]:slide-out-to-left-1/2 data-[leave]:slide-out-to-top-[48%] data-[enter]:slide-in-from-left-1/2 data-[enter]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
)
AlertDialogContent.displayName = "AlertDialogContent"

const AlertDialogHeader = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAlertDialog.Title> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseAlertDialog.Title>>;
  }
) => (<BaseAlertDialog.Title
  ref={ref}
  className={cn("text-lg font-semibold", className)}
  {...props}
/>)
AlertDialogTitle.displayName = "AlertDialogTitle"

const AlertDialogDescription = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAlertDialog.Description> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseAlertDialog.Description>>;
  }
) => (
  <BaseAlertDialog.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
)
AlertDialogDescription.displayName = "AlertDialogDescription"

const AlertDialogAction = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAlertDialog.Close> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseAlertDialog.Close>>;
  }
) => (
  <BaseAlertDialog.Close
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
)
AlertDialogAction.displayName = "AlertDialogAction"

const AlertDialogCancel = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAlertDialog.Close> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseAlertDialog.Close>>;
  }
) => (
  <BaseAlertDialog.Close
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
)
AlertDialogCancel.displayName = "AlertDialogCancel"

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
