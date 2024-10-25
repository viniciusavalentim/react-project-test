import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import "./index.css";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Component } from "./chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Produtos</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Id Do Produto" className="w-auto" />
          <Input name="name" placeholder="Nome do produto" className="w-auto" />
          <Button type="submit" variant={"outline"}>
            <Search className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>
                Criar um novo produto no sistema
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-6">
              <div className="flex-col items-center text-left gap-4">
                <Label htmlFor="name">Produto</Label>
                <Input className="" id="name"></Input>
              </div>
              <div className="items-center text-left gap-4">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-3" id="price"></Input>
              </div>
              <div className="items-center text-left gap-4">
                <Label htmlFor="price">Another</Label>
                <Select>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Search className="w-4 h-4 mr-2" />
                      Pesquisar
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant={"outline"}>
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit" variant={"default"}>
                  Adicionar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg mt-4">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map(() => {
              return (
                <TableRow>
                  <TableCell>81as5das1d</TableCell>
                  <TableCell>Produto 01</TableCell>
                  <TableCell>R$ 70,00</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <Component />
    </div>
  );
}
