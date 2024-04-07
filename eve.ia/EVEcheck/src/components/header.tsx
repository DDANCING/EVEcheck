import Logo from "../assets/logo.svg"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import { NavLink } from  '@/components/nav-link'

export function Header() { 
  return (
    <div className="border border-muted flex-row flex justify-between mx-4 rounded px-4">
    <div className="flex py-2 ">
      
      <nav className="flex items-center gap-5">
      <img src={Logo} alt="Logo" />
       <NavLink href="/eventos">Eventos</NavLink>
       <NavLink href="/participantes">Participantes</NavLink>
      </nav>
      
    </div>
    <div className="border border-x-muted-foreground rounded text-muted-foreground flex justify-center p-1 my-2">
    <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
    <ModeToggle  />
    </ThemeProvider>
    </div>
    </div>
  )
}