import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"



export function App() {
 return (
   <div className="bg-background mx-auto py-5 flex flex-col gap-5 w-screen h-screen">
   <Header />
   <AttendeeList />
   
  </div>
   )
}


