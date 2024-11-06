import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"

import { Loader2 } from "lucide-react";
import { variants, cn } from "../utils";

export enum IconPosition {
  LEFT = "left",
  RIGHT = "right",
  NONE = "none",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof variants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPos?: IconPosition;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, iconPos = IconPosition.LEFT, loading = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : "button";

    const buttonCx = cn(variants({ variant, size }), "flex gap-2 items-center justify-center", className);

    const isIconLeft = iconPos === IconPosition.LEFT;
    const isIconRight = iconPos === IconPosition.RIGHT;
    
    const renderIcon = loading ? <Loader2 className="animate-spin h-6 w-6" /> : icon

    return (
      <Comp className={`${buttonCx}`} ref={ref} disabled={loading} {...rest}>
        {isIconLeft && icon && renderIcon}
        {rest?.children}
        {isIconRight && icon && renderIcon}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button }
