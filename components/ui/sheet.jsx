"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({ side = "left", className = "", children, ...props }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="sheet-overlay" />
      <Dialog.Content className={`sheet-content sheet-${side} ${className}`} {...props}>
        {children}
        <Dialog.Close className="sheet-close" aria-label="Close menu"><X size={18} /></Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;
