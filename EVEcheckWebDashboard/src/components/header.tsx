import Logo from "../assets/logo.svg"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";

export function Header() { 
  return (
    <div className=" flex-row flex justify-between mx-4 rounded px-4">
    <div className="flex py-2 ">
      
      <nav className="flex items-center gap-5">
      <img src={Logo} alt="Logo" />
       <a className="text-muted-foreground" href="">Eventos</a>
       <a className="text-primary" href="">Participantes</a>
      </nav>
      
    </div>
    <div className="border border-x-muted-foreground rounded text-muted-foreground flex justify-center p-1 my-2">
    <ThemeProvider  defaultTheme="system" storageKey="vite-ui-theme">
    <ModeToggle  />
    </ThemeProvider>
    </div>
    </div>
  )
}