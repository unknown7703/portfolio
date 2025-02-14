"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-8 text-center">
        <DialogHeader>
          <DialogTitle className="self-center mb-6">Connect with Me</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6 text-primary">
            <a href="https://www.linkedin.com/in/t-aatreya-27a519248/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={32} className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://github.com/unknown7703" target="_blank" rel="noopener noreferrer">
              <Github size={32} className="hover:text-gray-500 transition-colors" />
            </a>
          </div>
          <DialogFooter>
            <Button variant="default" asChild>
              <a href="mailto:atreya7703@gmail.com">
                <Mail size={20} className="mr-2" /> Mail Me
              </a>
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
