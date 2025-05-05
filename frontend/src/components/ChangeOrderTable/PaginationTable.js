import React, {useState} from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,

} from "@tanstack/react-table";
import { columnDefWithCheckBox  } from "./columns";
import FilterFunction from "../BatchTable/FilterFunction"
import { getSortIconHandler } from "utils/getSortIconHandler";
import { useNavigate } from "react-router-dom";
import ProductsRow02input06search from "components/ProductsRow02input06search";
import ChangeOrderDeleteModal from "modals/ChangeOrderDeleteModal/ChangeOrderDeleteModal";
import { openModal } from "utils/htmlUtil/openModal";
import SearchBar from "../../components/SearchBar"
import { Button } from "components/Button";
import { Img } from "components/Img";



// #TODO 
// Will Replace With Data From SpreadSheet
// For now use static JSON file

// const updateIDs = (batchItems) =>{
    
//   batchItems.forEach((item, i) => {
//     item.id = i + 1;
//   });
  
//   console.log(batchItems);
// }

const PaginationTable = ({batchData}) => {


  batchData.forEach((item, i) => {
    item.id = i + 1;
  });
  
  const finalData = React.useMemo(() => batchData, []);

  const finalColumnDef = React.useMemo(() => columnDefWithCheckBox, []);
  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState("");
  const navigate = useNavigate();


  const defaultColumn = React.useMemo(() => {
    return {
      youTubeProp: "hello world",
    };
  }, []);
  const [columnFilters, setColumnFilters] = React.useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: defaultColumn,
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

  //   console.log("test", tableInstance.getHeaderGroups());

  
  React.useEffect(() => {
    console.log(tableInstance.getState().columnFilters);
  });

  return (
    <>
    
    <span>


<div style={{flexDirection : "row",display :"flex"}}>
      <SearchBar className=" 
      
              flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1.5 md:ml-[0] w-[99%] md:w-full" 
              type="text"
      value={filtering}
      placeholder="Search ..."
      onChange={(e) => setFiltering(e.target.value)}
      style={{width:300,height:20,}}
              //items={tableInstance.getSelectedRowModel().flatRows}
             />



                    <Button
                      className="common-pointer border border-gray-300 border-solid flex h-10 items-center justify-center w-10"
                      shape="round"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                      style={{}}
                      onClick={tableInstance.getSelectedRowModel().flatRows.length <= 0 ? ()=>{}: ()=>{openModal("changeorderdeletemany")}}
                    >
                      <Img
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                        //style={{width : 5000, height :10000}}
                        //sizes={20}
                      />
                    </Button>
</div>
      </span>
      <hr />
      <div className="overflow-auto  ml-5 md:ml-[0] mt-5 w-[97%]">
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}
                    
                        // onClick={columnEl.column.getToggleSortingHandler()}
                         >

                     
                        {columnEl.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {columnEl.column.getCanFilter() ? (
                            <div>
                              <FilterFunction
                                column={columnEl.column}
                                table={tableInstance}
                              />
                            </div>
                          ) : null}
                        </>
                      )} 

                             {/* CODE FOR HEADERS */}
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            // columnEl.column.columnDef.header,
                            "",
                            columnEl.getContext()
                          )}
                      {/* CODE FOR UP AND DOWN SORTING */}
                      {/* {
                        { asc: " -UP", desc: " -DOWN" }[
                          columnEl.column.getIsSorted() ?? null
                        ]
                      } */}
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

                    <td key={cellEl.id} //style={{cursor : "pointer"}} 
                    //onClick={()=>{;navigate("/changeorderdetail",{ state : JSON.stringify(cellEl)})}}
                    >
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
      <ul>
        <li>
          You are on page number:{" "}
          {tableInstance.options.state.pagination.pageIndex}
        </li>
        <li>Total pages: {tableInstance.getPageCount() - 1}</li>
      </ul>
      <hr />
      <input
        type="number"
        defaultValue={tableInstance.options.state.pagination.pageIndex}
        onChange={(e) => tableInstance.setPageIndex(e.target.value)}
      />
      <hr />
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
      <div>
      <ul>
          {tableInstance.getSelectedRowModel().flatRows.map((el) => {
            
            return <li key={el.id}>{JSON.stringify(el.original)}</li>;
          })}
        </ul>
      </div>
      {JSON.stringify(tableInstance.getSelectedRowModel().flatRows.length)}
      <p>data to modal  === {JSON.stringify(tableInstance.getSelectedRowModel().flatRows)}</p>
      <ChangeOrderDeleteModal id="changeorderdeletemany"  items={tableInstance.getSelectedRowModel().flatRows}/>
  
    </>
  );
};

export default PaginationTable;



// <Button
//                       className="border border-gray-300 border-solid flex h-10 items-center justify-center w-10"
//                       shape="round"
//                       color="white_A700"
//                       size="md"
//                       variant="fill"
//                     >
//                       <Img
//                         className="h-6"
//                         src="images/img_edit.svg"
//                         alt="edit"
//                       />
//                     </Button>
//                     <Button
//                       className="common-pointer border border-gray-300 border-solid flex h-10 items-center justify-center w-10"
//                       onClick={() => navigate("/frame1116606620")}
//                       shape="round"
//                       color="white_A700"
//                       size="md"
//                       variant="fill"
//                     >
//                       <Img
//                         className="h-6"
//                         src="images/img_thumbsup.svg"
//                         alt="thumbsup"
//                       />
//                     </Button>