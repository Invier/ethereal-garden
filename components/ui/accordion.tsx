"use client"

import { Accordion as BaseAccordion } from "@base-ui-components/react"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const Accordion = BaseAccordion.Root

const AccordionTrigger = ({ className, children, ref, ...props }:
  React.ComponentPropsWithRef<typeof BaseAccordion.Trigger>
) => (
  <BaseAccordion.Header className="flex">
    <BaseAccordion.Trigger
      ref={ref}
      {...props}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[aria-expanded=true]>svg]:rotate-180",
        className
      )}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
)

const AccordionContent = ({ className, children, ref, ...props }: React.ComponentPropsWithRef<typeof BaseAccordion.Panel>) => (
  <BaseAccordion.Panel
    ref={ref}
    className="overflow-hidden text-sm data-[hidden]:animate-accordion-up data-[hidden=false]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </BaseAccordion.Panel>
)

const AccordionItem = ({ className, children, ref, ...props }: React.ComponentPropsWithRef<typeof BaseAccordion.Item>) => (
  <BaseAccordion.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  >
    {children}
  </BaseAccordion.Item>
)

export type AccordionProps = BaseAccordion.Root.Props

Accordion.displayName = "Accordion"
AccordionItem.displayName = "AccordionItem"
AccordionTrigger.displayName = "AccordionTrigger"
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionTrigger, AccordionContent, AccordionItem }
