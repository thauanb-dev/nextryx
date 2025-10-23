"use client"

import { ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"
import {  MoreHorizontal ,Clipboard, Eraser, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type DefProcess = {
  id: string
  tag: string
  process_number: string
  status: "pendente" | "em atendimento" | "concluido" 
}

export const columns: ColumnDef<DefProcess>[] = [

    {
    accessorKey: "status",
    header: () => <div className="text-center px-1"> Status</div>,
    cell: ({cell})=>{
          const value = cell.getValue<DefProcess["status"]>()
          const style = {
            "pendente": "bg-yellow-500",
            "em atendimento": "bg-blue-500",
            "concluido": "bg-green-500",
          }[value] ?? "bg-gray-500"
          const label = {
            "pendente": "Pendente",
            "em atendimento": "Em atendimento",
            "concluido": "Concluído",
          }[value] ?? value
          return (
            <div className="text-left px-1">
              <Badge variant={"default"}  className={`px-2 py-0.5 text-xs font-medium ${style}`}>
                {label}
              </Badge>
            </div>
          )
          },
  },
  {
    accessorKey: "tag",
    header: () => <div className="text-center px-1">Tag</div>,
    cell: ({cell})=>{
          const value = cell.getValue<string>()
          return <div className="text-center px-1">
                    <Badge variant={"secondary"} className="px-2 py-0.5 text-xs font-medium">
                      {value.toWellFormed()}
                    </Badge>  
                </div>
          },
  },
  {
    accessorKey: "process_number",
    header: () => <div className="text-center px-1">N° Processo</div>  
  },
  //actions 
  {
    id: "actions",
    header: () => <div className="text-cente ">...</div>,  
    cell: ({ row }) => {
      const process = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4 opacity-60" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(process.process_number)
                  toast.success("Número do Processo Copiado", {
                    description: process.process_number,
                  })
                }
              }
              >
              <Clipboard className="h-4 w-4"/>
              Copiar Número de Processo
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Eraser className="h-4 w-4"/>
              Deletar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="h-4 w-4"/>
              Duplicar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]