import React from "react"
import { Event, columns } from "./events/columns"
import { DataTable } from "./events/data-table"


export async function fetchEventData(): Promise<Event[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "John Doe",
      email:  "john@example.com",
      createdAt: "10/10/2023",
      checkedInAt: "10/10/2023"
    },
    {
      id: 1,
      name: "John Doa",
      email:  "john@example.com",
      createdAt: "10/10/2023",
      checkedInAt: "10/10/2023"
    },
  ];
}

export function AttendeeList() {
  // State to hold the fetched data
  const [data, setData] = React.useState<Event[] | null>(null);

  // Fetch data on component mount
  React.useEffect(() => {
    async function fetchData() {
      const eventData = await fetchEventData();
      setData(eventData);
    }
    fetchData();
  }, []);

  // Render only when data is available
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      
          <DataTable columns={columns} data={data} />
      
    </div>
  );
}