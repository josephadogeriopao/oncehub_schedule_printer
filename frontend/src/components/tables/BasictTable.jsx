import React, { useEffect, useRef } from "react";
import printer from "../assets/printer.png"
import "./table.css";
import SearchBar from "../SearchBar/SearchBar";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import { getSortIconHandler } from "../../utils/getSortIconHandler";
import useResults from "../../hooks/useResults";
import { useReactToPrint, ReactToPrint } from "react-to-print";

const BasicTable = ({dataJSON}) => {
  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);
  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [searchApi, results, errorMessage] = useResults();
  const conponentPDF= useRef();

  const generatePDF= useReactToPrint({
    content: ()=>conponentPDF.current,
    //documentTitle:"OnceHub Appointment Schedule",
    onAfterPrint:()=>alert("Data saved in PDF")
});


console.log(JSON.stringify(generatePDF));


  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,

    },
    onSortingChange: setSorting,
    onGlobalFilterChanged: setFiltering,
    onColumnFiltersChange: setColumnFilters,
  });
  React.useEffect(() => {
    console.log(tableInstance.getState().columnFilters);
  });


  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <>
    
<span>
<div style={{flexDirection : "row",display :"flex"}}>
  <div ref={conponentPDF}>
    one two
  </div>
      <SearchBar
      value={filtering}
      placeholder="Search ..."
      onChange={(e) => setFiltering(e.target.value)}

             />
             <div onClick={generatePDF} >
             <img src={printer} style={{ width:75, height : 50}} alt="printer" />
             </div>
    
    </div>
    </span>
    <div  >
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}

                  <i onClick={columnEl.column.getToggleSortingHandler()} >
                         
                         {
                           5 > 1 ?
                         { asc:getSortIconHandler("asc") , desc: getSortIconHandler("desc") ,
                          false : getSortIconHandler("false")}[
                             columnEl.column.getIsSorted() ?? null
                           ] : null
                         }             
                      
   
                         </i>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <hr />
      <div>
        <button
          onClick={() => tableInstance.setPageIndex(0)}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          Next Page
        </button>
        <button
          onClick={() =>
            tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
          }
          disabled={!tableInstance.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
      <hr />
      {/* THIS CODE SHOWS WHERE ON PAGE THE CURSOR IS ON */}

      <h4>
        Current page size: {tableInstance.options.state.pagination.pageSize}
      </h4>
      <select
        value={tableInstance.options.state.pagination.pageSize}
        onChange={(e) => tableInstance.setPageSize(e.target.value)}
      >
        {[10, 25, 50].map((pageSizeEl) => {
          return (
            <option key={pageSizeEl} value={pageSizeEl}>
              {pageSizeEl}
            </option>
          );
        })}
      </select>
     {/* THIS PART OF THE CODE SHOWS THE PAGE NUMBER  */}

     <div>
      <ul>
          {tableInstance.getSelectedRowModel().flatRows.map((el) => {
            
            return <li key={el.id}>{JSON.stringify(el.original)}</li>;
          })}
        </ul>
      </div>
      {/* {JSON.stringify(tableInstance.getSelectedRowModel().flatRows.length)} */}
     <div>
       {/* THIS PART OF THE CODE SHOWS THE TOTAL NUMBER OF ROWS TO BE EXPORTED  */}
      final data to export =={JSON.stringify(tableInstance.getRowModel().rows.length, null,4)}
     </div>
    </>
  );
};

export default BasicTable;