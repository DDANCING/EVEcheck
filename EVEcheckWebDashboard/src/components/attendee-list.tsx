import { useEffect, useState } from "react";
import { Event, columns } from "./events/columns";
import { DataTable } from "./events/data-table";

export function AttendeeList() {
  const [attendees, setAttendees] = useState<Event[]>([]);

  


  useEffect(() => {
    fetch("http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then(data => {
        setAttendees(data.attendees);
     
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      
        <DataTable columns={columns} data={attendees} />
        
    </div>
  );
}
 