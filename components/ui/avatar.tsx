"use client"

import { Avatar as BaseAvatar } from "@base-ui-components/react"
import * as React from "react"

import { cn } from "../utils"

const Avatar = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAvatar.Root>
) => (<BaseAvatar.Root
  ref={ref}
  className={cn(
    "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
    className
  )}
  {...props}
/>)
Avatar.displayName = "Avatar"

const AvatarImage = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAvatar.Image>
) => (<BaseAvatar.Image
  ref={ref}
  className={cn("aspect-square h-full w-full", className)}
  {...props}
/>)
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseAvatar.Fallback>
) => (<BaseAvatar.Fallback
  ref={ref}
  className={cn(
    "flex h-full w-full items-center justify-center rounded-full bg-muted",
    className
  )}
  {...props}
/>)
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
