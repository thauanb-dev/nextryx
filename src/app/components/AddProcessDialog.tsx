import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderOpen } from "lucide-react";

export function AddProcessDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <FolderOpen
            aria-label="Criar Processo"
            className="size-7 text-stone-600  transition-colors duration-200 hover:text-emerald-600 hover:scale-110 "
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Novo Processo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Número do Processo</Label>
              <Input id="name-1" name="name" defaultValue="001.2025.123.45-78" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Descrição</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue="Observacoes sobre o meu processo"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
