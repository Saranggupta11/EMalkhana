// import { Modal } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
// import Box from "@mui/material/Box";
// import ChainofCustody from "./ChainofCustody";
// import { set } from "mongoose";
// export default function ViewModal({
//   open,
//   setOpen,
//   openDetails,
//   setOpenDetails,
//   index,
//   setIndex,
//   ChainofCustodyOpen,
//   setChainofCustodyOpen,
//   date,
//   setDate,
//   time,
//   setTime,
//   purpose,
//   setPurpose,
//   io,
//   setIo,
//   rank,
//   setRank,
//   from,
//   setFrom,
//   to,
//   setTo,
//   byWhom,
//   setByWhom,
//   toWhom,
//   setToWhom,
//   documents,
//   setDocument,
//   categoryOfProperty,
//   setCategoryOfProperty,
//   quantity,
//   setQuantity,
//   belongingToWhom,
//   setBelongingToWhom,
//   natureOfProperty,
//   setNatureOfProperty,
//   photoOfProperty,
//   setPhotoOfProperty,
//   locationOfProperty,
//   setLocationOfProperty,
//   propertyDescription,
//   setPropertyDescription,
//   entDetails,
//   setEntDetails,
//   mrEntry,
//   setMrEntry,
//   handleAddProperty,
//   handleChainOfCustodyClose,
//   handleDispose,
//   handleViewDetails,
//   handleOpenDetails,
//   handleChainOfCustodyOpen,
//   handleChainOfCustodyEntry,
//   handleClose,
//   handleCloseDetails,
//   handleOpen,
// }) {
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1000,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//   };
//   return (
//     <>
//       <Modal
//         open={openDetails}
//         onClose={handleCloseDetails}
//         style={{ overflow: "scroll" }}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div className="flex justify-end">
//             <button onClick={handleCloseDetails} className="p-3">
//               <CloseIcon />
//             </button>
//           </div>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             <div className="bg-yellow-500 text-white pl-3">
//               <div className="py-5">Property Details</div>
//             </div>
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <div className="mt-5 py-5 text-md">
//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">MR No.</span>:{mrEntry.mrNo}
//                 </div>
//                 <div>
//                   <span className="font-bold">FIR No.</span>:{mrEntry.firNo}
//                 </div>
//               </div>

//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">Date of FIR</span>:{" "}
//                   {mrEntry.dateOfFir}
//                 </div>
//                 <div>
//                   <span className="font-bold">Date of FIR</span>: :{" "}
//                   {mrEntry.dateOfSeizure}
//                 </div>
//               </div>

//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">PS Name</span>:{mrEntry.psName}
//                 </div>
//                 <div>
//                   <span className="font-bold">Date</span>:{mrEntry.date}
//                 </div>
//               </div>

//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">State</span>:{mrEntry.state}
//                 </div>
//                 <div>
//                   <span className="font-bold">District</span>:{mrEntry.district}
//                 </div>
//               </div>
//               <div className="flex justify-center my-5">
//                 <div className="text-lg font-bold">Basic Details</div>
//               </div>
//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">Seized by Officer</span>:{" "}
//                   {mrEntry.basic_details.seizedByOfficer}
//                 </div>
//                 <div>
//                   <span className="font-bold">Seized Location</span>:{" "}
//                   {mrEntry.basic_details.seizedLocation}
//                 </div>
//               </div>
//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">PS Receipt - Date & Time</span>:{" "}
//                   {mrEntry.basic_details.psReceiptDateTime}
//                 </div>
//                 <div>
//                   <span className="font-bold">Owner Name</span>:{" "}
//                   {mrEntry.basic_details.ownerName}
//                 </div>
//               </div>

//               <div
//                 className="mx-5 pt-2 flex justify-around gap-x-48
//             "
//               >
//                 <div className="">
//                   <span className="font-bold">Owner Address</span>:{" "}
//                   {mrEntry.basic_details.addressOfOwner}
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     onClick={handleCloseDetails}
//                     class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 font-lg rounded-lg text-sm px-3 py-2 me-2 "
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Typography>
//           <div className="mb-2 font-semibold text-lg text-center">
//             Property Details
//           </div>
//           {mrEntry.properties.map((property, index) => (
//             <div key={index} className="">
//               <div className="flex justify-center">
//                 <div>
//                   <span className="font-bold">Property </span>: {index + 1}
//                 </div>
//               </div>
//               <div className="flex justify-center gap-x-5 mt-2">
//                 {property.is_disposed ? (
//                   <div className="flex justify-center">
//                     <div className="text-red-600 font-semibold">Disposed</div>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleDispose(index)}
//                     class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-md text-md px-2 py-2 my-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
//                   >
//                     Dispose
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={handleChainOfCustodyOpen(index)}
//                   class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-md text-md px-2 py-2 mb- dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
//                 >
//                   Add
//                 </button>
//               </div>
//               <div className="flex justify-around">
//                 <div>
//                   <span className="font-bold">Category of Property </span> :
//                   {property.property_details.categoryOfProperty}
//                 </div>
//                 <div>
//                   <span className="font-bold">Belonging to Whom </span>:
//                   {property.property_details.belongingToWhom}
//                 </div>
//               </div>
//               <div className="flex justify-around mt-2">
//                 <div>
//                   <span className="font-bold">Nature of Property</span>:
//                   {property.property_details.natureOfProperty}
//                 </div>
//                 <div>
//                   <span className="font-bold">Location of Property </span>:{" "}
//                   {property.property_details.locationOfProperty}
//                 </div>
//               </div>
//               <div className="text-lg text-center font-bold">
//                 Chain of Custody
//               </div>
//               {property.chain_of_custody.map((coc, index) => (
//                 <div className="mt-2" key={index}>
//                   <div className="flex justify-around">
//                     <div>
//                       <span className="font-bold">Chain of Custody </span>:{" "}
//                       {index + 1}
//                     </div>
//                     <div>
//                       <span className="font-bold">Date </span>: {coc.date}
//                     </div>
//                   </div>
//                   <div className="flex justify-around mt-1">
//                     <div>
//                       <span className="font-bold">Time </span>: {coc.time}
//                     </div>
//                     <div>
//                       <span className="font-bold">Purpose </span>: {coc.purpose}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <Modal
//                 open={ChainofCustodyOpen}
//                 onClose={handleChainOfCustodyClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//               >
//                 <Box sx={style}>
//                   <Typography
//                     id="modal-modal-title"
//                     variant="h6"
//                     component="h2"
//                   >
//                     <div className="bg-yellow-500 text-white pl-3 flex justify-end gap-x-96">
//                       <div className="py-5">Chain of Custody #1</div>
//                       <div className="p-3">
//                         <button onClick={handleChainOfCustodyClose}>
//                           {" "}
//                           <CloseIcon />
//                         </button>
//                       </div>
//                     </div>
//                   </Typography>
//                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     <section class="text-gray-600 body-font">
//                       <div class="container px-5 pt-8 mx-auto">
//                         <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
//                           <div class="relative flex-grow w-full mx-5">
//                             <label
//                               for="date"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               Date
//                             </label>
//                             <input
//                               type="date"
//                               id="date"
//                               value={date}
//                               onChange={(e) => setDate(e.target.value)}
//                               name="date"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="time"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               Time
//                             </label>
//                             <input
//                               type="time"
//                               id="time"
//                               value={time}
//                               onChange={(e) => setTime(e.target.value)}
//                               name="time"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="purpose"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               Purpose
//                             </label>
//                             <input
//                               type="text"
//                               id="purpose"
//                               value={purpose}
//                               onChange={(e) => setPurpose(e.target.value)}
//                               name="purpose"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="officer"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               Investigating Officer
//                             </label>
//                             <input
//                               type="text"
//                               id="officer"
//                               value={io}
//                               onChange={(e) => setIo(e.target.value)}
//                               name="officer"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div class="container px-5 pt-4 mx-auto">
//                         <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
//                           <div class="relative flex-grow w-full mx-5">
//                             <label
//                               for="rank"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               Rank
//                             </label>
//                             <input
//                               type="text"
//                               id="rank"
//                               value={rank}
//                               onChange={(e) => setRank(e.target.value)}
//                               name="rank"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="from"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               From
//                             </label>
//                             <input
//                               type="text"
//                               id="from"
//                               value={from}
//                               onChange={(e) => setFrom(e.target.value)}
//                               name="from"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="to"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               To
//                             </label>
//                             <input
//                               type="text"
//                               id="to"
//                               value={to}
//                               onChange={(e) => setTo(e.target.value)}
//                               name="to"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="whom"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               By Whom
//                             </label>
//                             <input
//                               type="text"
//                               id="whom"
//                               value={byWhom}
//                               onChange={(e) => setByWhom(e.target.value)}
//                               name="whom"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div class="container px-5 pt-4 pb-10 mx-auto">
//                         <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
//                           <div class="relative flex-grow w-full mx-5">
//                             <label
//                               for="toWhom"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               To Whom
//                             </label>
//                             <input
//                               type="text"
//                               id="toWhom"
//                               value={toWhom}
//                               onChange={(e) => setToWhom(e.target.value)}
//                               name="toWhom"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <label
//                               for="from"
//                               class="leading-7 text-sm text-gray-600"
//                             >
//                               Document (maximum file size 2MB)
//                             </label>
//                             <input
//                               type="file"
//                               id="from"
//                               value={documents}
//                               onChange={(e) => setDocument(e.target.value)}
//                               name="from"
//                               class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div class="relative flex-grow w-full">
//                             <button
//                               type="button"
//                               onClick={handleChainOfCustodyEntry}
//                               class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
//                             >
//                               Add
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </section>
//                   </Typography>
//                 </Box>
//               </Modal>
//             </div>
//           ))}
//         </Box>
//       </Modal>
//     </>
//   );
// }
// import { Modal } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import CloseIcon from "@mui/icons-material/Close";
// import Box from "@mui/material/Box";
// import ChainofCustody from "./ChainofCustody";
// import { set } from "mongoose";

// export default function ViewModal({
//   open,
//   setOpen,
//   openDetails,
//   setOpenDetails,
//   index,
//   setIndex,
//   ChainofCustodyOpen,
//   setChainofCustodyOpen,
//   date,
//   setDate,
//   time,
//   setTime,
//   purpose,
//   setPurpose,
//   io,
//   setIo,
//   rank,
//   setRank,
//   from,
//   setFrom,
//   to,
//   setTo,
//   byWhom,
//   setByWhom,
//   toWhom,
//   setToWhom,
//   documents,
//   setDocument,
//   categoryOfProperty,
//   setCategoryOfProperty,
//   quantity,
//   setQuantity,
//   belongingToWhom,
//   setBelongingToWhom,
//   natureOfProperty,
//   setNatureOfProperty,
//   photoOfProperty,
//   setPhotoOfProperty,
//   locationOfProperty,
//   setLocationOfProperty,
//   propertyDescription,
//   setPropertyDescription,
//   entDetails,
//   setEntDetails,
//   mrEntry,
//   setMrEntry,
//   handleAddProperty,
//   handleChainOfCustodyClose,
//   handleDispose,
//   handleViewDetails,
//   handleOpenDetails,
//   handleChainOfCustodyOpen,
//   handleChainOfCustodyEntry,
//   handleClose,
//   handleCloseDetails,
//   handleOpen,
// }) {
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1000,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//   };

//   return (
//     <>
//       <Modal
//         open={openDetails}
//         onClose={handleCloseDetails}
//         style={{ overflow: "scroll" }}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <div className="flex justify-end">
//             <button
//               onClick={handleCloseDetails}
//               className="p-3 absolute top-0 right-0"
//             >
//               <CloseIcon />
//             </button>
//           </div>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             <div className="bg-yellow-500 text-white pl-3">
//               <div className="py-5">Property Details</div>
//             </div>
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <div className="mt-5 py-5 text-md">
//               {/* Insert property details here */}
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">MR No.</span>: {mrEntry.mrNo}
//                 </div>
//                 <div>
//                   <span className="font-bold">FIR No.</span>: {mrEntry.firNo}
//                 </div>
//               </div>
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">Date of FIR</span>:{" "}
//                   {mrEntry.dateOfFir}
//                 </div>
//                 <div>
//                   <span className="font-bold">Date of Seizure</span>:{" "}
//                   {mrEntry.dateOfSeizure}
//                 </div>
//               </div>
//               {/* Add more property details */}
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">PS Name</span>: {mrEntry.psName}
//                 </div>
//                 <div>
//                   <span className="font-bold">Date</span>: {mrEntry.date}
//                 </div>
//               </div>
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">State</span>: {mrEntry.state}
//                 </div>
//                 <div>
//                   <span className="font-bold">District</span>:{" "}
//                   {mrEntry.district}
//                 </div>
//               </div>
//               <div className="flex justify-center my-5">
//                 <div className="text-lg font-bold">Basic Details</div>
//               </div>
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">Seized by Officer</span>:{" "}
//                   {mrEntry.basic_details.seizedByOfficer}
//                 </div>
//                 <div>
//                   <span className="font-bold">Seized Location</span>:{" "}
//                   {mrEntry.basic_details.seizedLocation}
//                 </div>
//               </div>
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">PS Receipt - Date & Time</span>:{" "}
//                   {mrEntry.basic_details.psReceiptDateTime}
//                 </div>
//                 <div>
//                   <span className="font-bold">Owner Name</span>:{" "}
//                   {mrEntry.basic_details.ownerName}
//                 </div>
//               </div>
//               <div className="mx-5 pt-2 flex justify-around gap-x-48">
//                 <div>
//                   <span className="font-bold">Owner Address</span>:{" "}
//                   {mrEntry.basic_details.addressOfOwner}
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//           </Typography>
//           <div className="mb-2 font-semibold text-lg text-center">
//             Property Details
//           </div>
//           {mrEntry.properties.map((property, index) => (
//             <div key={index} className="">
//               <div className="flex justify-center">
//                 <div>
//                   <span className="font-bold">Property </span>: {index + 1}
//                 </div>
//               </div>
//               <div className="flex justify-center gap-x-5 mt-2">
//                 {property.is_disposed ? (
//                   <div className="flex justify-center">
//                     <div className="text-red-600 font-semibold">Disposed</div>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleDispose(index)}
//                     className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-md text-md px-2 py-2 my-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
//                   >
//                     Dispose
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={handleChainOfCustodyOpen(index)}
//                   className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-md text-md px-2 py-2 mb- dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
//                 >
//                   Add
//                 </button>
//               </div>
//               <div className="flex justify-around">
//                 <div>
//                   <span className="font-bold">Category of Property </span> :
//                   {property.property_details.categoryOfProperty}
//                 </div>
//                 <div>
//                   <span className="font-bold">Belonging to Whom </span>:
//                   {property.property_details.belongingToWhom}
//                 </div>
//               </div>
//               <div className="flex justify-around mt-2">
//                 <div>
//                   <span className="font-bold">Nature of Property</span>:
//                   {property.property_details.natureOfProperty}
//                 </div>
//                 <div>
//                   <span className="font-bold">Location of Property </span>:{" "}
//                   {property.property_details.locationOfProperty}
//                 </div>
//               </div>
//               <div className="text-lg text-center font-bold">
//                 Chain of Custody
//               </div>
//               {property.chain_of_custody.map((coc, index) => (
//                 <div className="mt-2" key={index}>
//                   <div className="flex justify-around">
//                     <div>
//                       <span className="font-bold">Chain of Custody </span>:{" "}
//                       {index + 1}
//                     </div>
//                     <div>
//                       <span className="font-bold">Date </span>: {coc.date}
//                     </div>
//                   </div>
//                   <div className="flex justify-around mt-1">
//                     <div>
//                       <span className="font-bold">Time </span>: {coc.time}
//                     </div>
//                     <div>
//                       <span className="font-bold">Purpose </span>: {coc.purpose}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <Modal
//                 open={ChainofCustodyOpen}
//                 onClose={handleChainOfCustodyClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//               >
//                 <Box sx={style}>
//                   <Typography
//                     id="modal-modal-title"
//                     variant="h6"
//                     component="h2"
//                   >
//                     <div className="bg-yellow-500 text-white pl-3 flex justify-end gap-x-96">
//                       <div className="py-5">Chain of Custody #1</div>
//                       <div className="p-3">
//                         <button onClick={handleChainOfCustodyClose}>
//                           <CloseIcon />
//                         </button>
//                       </div>
//                     </div>
//                   </Typography>
//                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     <section className="text-gray-600 body-font">
//                       <div className="container px-5 pt-8 mx-auto">
//                         <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
//                           <div className="relative flex-grow w-full mx-5">
//                             <label
//                               htmlFor="date"
//                               className="leading-7 text-sm text-gray-600"
//                             >
//                               Date
//                             </label>
//                             <input
//                               type="date"
//                               id="date"
//                               value={date}
//                               onChange={(e) => setDate(e.target.value)}
//                               name="date"
//                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div className="relative flex-grow w-full">
//                             <label
//                               htmlFor="time"
//                               className="leading-7 text-sm text-gray-600"
//                             >
//                               Time
//                             </label>
//                             <input
//                               type="time"
//                               id="time"
//                               value={time}
//                               onChange={(e) => setTime(e.target.value)}
//                               name="time"
//                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div className="relative flex-grow w-full">
//                             <label
//                               htmlFor="purpose"
//                               className="leading-7 text-sm text-gray-600"
//                             >
//                               Purpose
//                             </label>
//                             <input
//                               type="text"
//                               id="purpose"
//                               value={purpose}
//                               onChange={(e) => setPurpose(e.target.value)}
//                               name="purpose"
//                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                           <div className="relative flex-grow w-full">
//                             <label
//                               htmlFor="officer"
//                               className="leading-7 text-sm text-gray-600"
//                             >
//                               Investigating Officer
//                             </label>
//                             <input
//                               type="text"
//                               id="officer"
//                               value={io}
//                               onChange={(e) => setIo(e.target.value)}
//                               name="officer"
//                               className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       {/* Additional fields */}
//                       {/* Add more fields */}
//                     </section>
//                   </Typography>
//                 </Box>
//               </Modal>
//             </div>
//           ))}
//         </Box>
//       </Modal>
//     </>
//   );
// }
import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import ChainofCustody from "./ChainofCustody";
import { useState } from "react";

export default function ViewModal({
  open,
  setOpen,
  openDetails,
  setOpenDetails,
  index,
  setIndex,
  ChainofCustodyOpen,
  setChainofCustodyOpen,
  mrEntry,
  handleDispose,
  handleChainOfCustodyOpen,
  handleCloseDetails,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [io, setIo] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChainOfCustodyClose = () => {
    setChainofCustodyOpen(false);
  };

  const handleDisposeClick = (index) => () => {
    handleDispose(index);
  };

  const handleChainOfCustodyClick = (index) => () => {
    handleChainOfCustodyOpen(index);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={openDetails}
        onClose={handleCloseDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div className="flex justify-end">
            <button onClick={handleCloseDetails}>
              <CloseIcon />
            </button>
          </div>
          <Typography variant="h6" component="h2">
            <div className="bg-yellow-500 text-white p-3">
              Property Details
            </div>
          </Typography>
          <Typography>
            <div className="p-5">
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">MR No.:</span> {mrEntry.mrNo}
                </div>
                <div>
                  <span className="font-bold">FIR No.:</span> {mrEntry.firNo}
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <span className="font-bold">Date of FIR:</span>{" "}
                  {mrEntry.dateOfFir}
                </div>
                <div>
                  <span className="font-bold">Date of Seizure:</span>{" "}
                  {mrEntry.dateOfSeizure}
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <span className="font-bold">Date:</span> {mrEntry.date}
                </div>
                <div>
                  <span className="font-bold">District:</span>{" "}
                  {mrEntry.district}
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div>
                  <span className="font-bold">PS Name:</span> {mrEntry.psName}
                </div>
                <div>
                  <span className="font-bold">State:</span> {mrEntry.state}
                </div>
              </div>
            </div>
          </Typography>
          <div className="mb-2 font-semibold text-lg text-center">
            Property Details
          </div>
          {mrEntry.properties.map((property, index) => (
            <div key={index} className="p-5 border-t mt-3">
              <div className="flex justify-center">
                <div>
                  <span className="font-bold">Property:</span> {index + 1}
                </div>
              </div>
              <div className="flex justify-center mt-2">
                {property.is_disposed ? (
                  <div className="text-red-600 font-semibold pr-3">Disposed</div>
                ) : (
                  <button
                    type="button"
                    onClick={handleDisposeClick(index)}
                    className="btn mr-auto"
                  >
                    Dispose
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleChainOfCustodyClick(index)}
                  className="btn"
                  style={{ backgroundColor: "#fca311" }}
                >
                  Add
                </button>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="font-bold">Category of Property:</span>{" "}
                  {property.property_details.categoryOfProperty}
                </div>
                <div>
                  <span className="font-bold">Belonging to Whom:</span>{" "}
                  {property.property_details.belongingToWhom}
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <span className="font-bold">Nature of Property:</span>{" "}
                  {property.property_details.natureOfProperty}
                </div>
                <div>
                  <span className="font-bold">Location of Property:</span>{" "}
                  {property.property_details.locationOfProperty}
                </div>
              </div>
              <div className="text-lg text-center font-bold mt-3">
                Chain of Custody
              </div>
              {property.chain_of_custody.map((coc, index) => (
                <div className="mt-2" key={index}>
                  <div className="flex justify-between">
                    <div>
                      <span className="font-bold">Chain of Custody:</span>{" "}
                      {index + 1}
                    </div>
                    <div>
                      <span className="font-bold">Date:</span> {coc.date}
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <div>
                      <span className="font-bold">Time:</span> {coc.time}
                    </div>
                    <div>
                      <span className="font-bold">Purpose:</span> {coc.purpose}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Box>
      </Modal>
    </>
  );
}
