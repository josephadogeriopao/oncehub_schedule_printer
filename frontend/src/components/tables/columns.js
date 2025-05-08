import { createColumnHelper } from "@tanstack/react-table";
import getCST from "../../utils/getCST";
import getBookingHub from "../../utils/getBookingHub";


const columnHelper = createColumnHelper();

export const columnDef = [
  // columnHelper.accessor("id", {
  //   header: "Calendar",
  //   show:false
  // }),
  {
    accessorFn: (row)=>getBookingHub(row.subject),
    header: "Calendar",
  },
  {
    accessorKey: "host_name",
    header: "Host",
  },
  {
    accessorKey: "customer_name",
    header: "Customer",
  },
   {
    accessorFn: (row)=>row.attendees[1],
    header: "Customer",
  },
  {
    accessorKey: "subject",
    header: "Appointment type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorFn: (row)=>getCST(row.starting_time),
    header: "Start Time",
  },
  {
    accessorKey: "duration_minutes",
    header: "duration_minutes",
  },
];
