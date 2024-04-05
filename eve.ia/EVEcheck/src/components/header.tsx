import Logo from "../assets/logo.svg"

export function Header() { 
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={Logo} alt="Logo" />
      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-muted-foreground">Eventos</a>
        <a href="" className="font-medium text-sm">Participantes</a>
      </nav>
      
    </div>
  )
}