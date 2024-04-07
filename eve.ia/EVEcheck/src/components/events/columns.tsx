import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal} from "lucide-react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatRelative } from  "date-fns"
import { ptBR } from "date-fns/locale"

export type Event = {
  id: number
  name: string
  email: string
  createdAt: string
  checkedInAt: string
}

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "select",
    header: ({ table }) => (
      <input 
     
      type="checkbox"
      className=""/>
      
    ),
    cell: ({ row }) => (
      <input type="checkbox" className=""  checked= {row.getIsSelected()} />
    ),
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
         className="my-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         ID
         
        </Button>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="text-left mx-[13%]">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Participante
          
        </Button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="flex flex-col items-start mx-[12%]">
        <div  className="text-left">
        <div >{row.original.name}</div>
        <div className="text-xs text-muted-foreground">{row.original.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
      
        <Button
         className="flex text-start mx-[13%]"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Inscrição
          
        </Button>
       
      )
    },
        cell: ({ row }) => (
          <div className="flex flex-col items-start mx-[12%]">
            <div  className="text-left">
            <div >{formatRelative(new Date(row.original.createdAt), new Date(), {locale: ptBR})}</div>
            </div>
          </div>
        ),
  },
  {
    accessorKey: "checkedInAt",
    header: ({ column }) => {
      return (
        
        <Button
          className="flex text-left mx-[13%]"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
        Check-in
        </Button>
        
      )
    },
    cell: ({ row }) => (
      <div className="flex items-start mx-[12%]">
        <div  className="text-left">
        <div >{formatRelative(new Date(row.original.checkedInAt), new Date(), {locale: ptBR})}</div>
        </div>
      </div>
    ),
    
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const AttendeeList = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 outline-none">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-muted text-primary p-2 rounded border" >
            <DropdownMenuLabel>ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(AttendeeList.name)}
            >
              Copiar nome
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>opcao1</DropdownMenuItem>
            <DropdownMenuItem>opcao2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]