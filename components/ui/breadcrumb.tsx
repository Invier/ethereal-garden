import { ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const Breadcrumb = (
  {
    ref,
    ...props
  }: React.ComponentPropsWithRef<"nav"> & {
    ref?: React.RefObject<HTMLDivElement>;
  }
) => <nav ref={ref} aria-label="breadcrumb" {...props} />
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<"ol"> & {
    ref?: React.RefObject<HTMLOListElement>;
  }
) => (<ol
  ref={ref}
  className={cn(
    "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
    className
  )}
  {...props}
/>)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<"li"> & {
    ref?: React.RefObject<HTMLLIElement>;
  }
) => (<li
  ref={ref}
  className={cn("inline-flex items-center gap-1.5", className)}
  {...props}
/>)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = (
  {
    ref,
    asChild,
    className,
    ...props
  }: React.ComponentPropsWithRef<"a"> & {
    ref?: React.RefObject<HTMLAnchorElement | HTMLDivElement>;
    asChild?: boolean;
  }
) => {
  if (asChild) {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn("transition-colors hover:text-foreground", className)}
        {...props as React.HTMLAttributes<HTMLDivElement>}
      />
    );
  }

  return (
    <a
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
}
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<"span"> & {
    ref?: React.RefObject<HTMLSpanElement>;
  }
) => (<span
  ref={ref}
  role="link"
  aria-disabled="true"
  aria-current="page"
  className={cn("font-normal text-foreground", className)}
  {...props}
/>)
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  ref,
  children,
  className,
  ...props
}: React.ComponentProps<"li"> & {
  ref?: React.RefObject<HTMLLIElement>;
}) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  ref,
  className,
  ...props
}: React.ComponentProps<"span"> & {
  ref?: React.RefObject<HTMLSpanElement>;
}) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}