"use client";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;

export function SheetContent({ side='left', className, children, ...props }) {
  return <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px]" />
    <Dialog.Content className={cn('fixed z-50 inset-y-0 bg-background shadow-2xl p-0 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out', side==='left' ? 'left-0 w-[290px]' : 'right-0 w-[290px]', className)} {...props}>
      {children}
      <Dialog.Close className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted" aria-label="Close"><X size={18}/></Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>;
}
