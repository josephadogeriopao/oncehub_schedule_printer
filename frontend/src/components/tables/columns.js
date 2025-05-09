import { createColumnHelper } from "@tanstack/react-table";
import getCST from "../../utils/getCST";
import getBookingHub from "../../utils/getBookingHub";
import { getLocation } from "../../utils/getLocation";
import { getHostName } from "../../utils/getHostName";
import { getCustomerName } from "../../utils/getCustomerName";

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
    accessorFn: (row)=>getHostName(row.owner),
    header: "Host",
  },
  {
    accessorFn: (row)=>getCustomerName(row.contact),
    header: "Customer",
  },
   {
    accessorFn: (row)=>row.attendees[1],
    header: "Email",
  },
  {
    accessorKey: "subject",
    header: "Appointment type",
  },
  {
    accessorFn: (row)=>getLocation(row.virtual_conferencing,row.location_description),
    header: "Location",
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
