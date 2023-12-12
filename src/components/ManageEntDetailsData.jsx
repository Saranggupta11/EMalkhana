import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import ChainofCustody from "./ChainofCustody";
import { set } from "mongoose";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const ManageEntDetailsData = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const [index, setIndex] = useState(0);

  const [ChainofCustodyOpen, setChainofCustodyOpen] = useState(false);
  const handleChainOfCustodyOpen = (index) => () => {
    setChainofCustodyOpen(true);
    setIndex(index);
  };
  const handleChainOfCustodyClose = () => setChainofCustodyOpen(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [io, setIo] = useState("");
  const [rank, setRank] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [byWhom, setByWhom] = useState("");
  const [toWhom, setToWhom] = useState("");
  const [documents, setDocument] = useState([]);

  const [categoryOfProperty, setCategoryOfProperty] = useState("");
  const [quantity, setQuantity] = useState("");
  const [belongingToWhom, setBelongingToWhom] = useState("");
  const [natureOfProperty, setNatureOfProperty] = useState("");
  const [photoOfProperty, setPhotoOfProperty] = useState([]);
  const [locationOfProperty, setLocationOfProperty] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  const handleAddProperty = (index) => async () => {
    const mrNo = entDetails[index].mrNo;
    const res = await axios.post(`/api/property/?mrNo=${mrNo}`, {
      property_details: {
        categoryOfProperty,
        quantity,
        belongingToWhom,
        natureOfProperty,
        photoOfProperty,
        locationOfProperty,
        propertyDescription,
      },
    });
    console.log(res);
    setCategoryOfProperty("");
    setQuantity("");
    setBelongingToWhom("");
    setNatureOfProperty("");
    setPhotoOfProperty([]);
    setLocationOfProperty("");
    setPropertyDescription("");

    alert("Property Added Successfully");
  };

  const [entDetails, setEntDetails] = useState([]);
  const [mrEntry, setMrEntry] = useState({});

  const handleViewDetails = (index) => async () => {
    const mrNo = entDetails[index].mrNo;
    const res = await axios.get(`/api/malkhanaEntry/?mrNo=${mrNo}`);
    const data = await res.data._case;
    setMrEntry(data);
    console.log(mrEntry);
    handleOpenDetails();
  };

  const handleDispose = (index)=> async () => {
    const propertyId = mrEntry.properties[index]._id;
    console.log(propertyId);
    const res = await axios.put(`/api/property/?propertyId=${propertyId}`, {
      is_disposed: true,
    });

    console.log(res);
    alert("Property Disposed Successfully");
  };

  const handleChainOfCustodyEntry = async () => {
    const propertyId = mrEntry.properties[index]._id;
    console.log(propertyId);
    const res = await axios.put(`/api/property/?propertyId=${propertyId}`, {
      chain_of_custody: [
        {
          date,
          time,
          purpose,
          io,
          rank,
          from,
          to,
          byWhom,
          toWhom,
          documents,
        },
      ],
    });
    console.log(res);
    setDate("");
    setTime("");
    setPurpose("");
    setIo("");
    setRank("");
    setFrom("");
    setTo("");
    setByWhom("");
    setToWhom("");
    setDocument([]);
    alert("Chain of Custody Added Successfully");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/malkhanaEntry");
        setEntDetails(response.data._cases);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-end lg:mr-20 mt-10">
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Export
          </button>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Print
          </button>
        </div>
      </div>

      <div className="text-lg ml-5">
        Showing 1-{entDetails.length} (out of {entDetails.length})
      </div>

      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  MR No
                </th>
                <th scope="col" className="px-6 py-3">
                  FIR No
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of FIR
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Seziure
                </th>
                <th scope="col" className="px-6 py-3">
                  PS Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  District
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {entDetails.map((detail, index) => (
                <tr key={index} className="bg-slate-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    #{index + 1}
                  </th>
                  <td className="px-6 py-4">{detail.mrNo}</td>
                  <td className="px-6 py-4">{detail.firNo}</td>
                  <td className="px-6 py-4">{detail.dateOfFir}</td>
                  <td className="px-6 py-4">{detail.dateOfSeizure}</td>
                  <td className="px-6 py-4">{detail.psName}</td>
                  <td className="px-6 py-4">{detail.date}</td>
                  <td className="px-6 py-4">{detail.state}</td>
                  <td className="px-6 py-4">{detail.district}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-x-2">
                      <div>
                        <button
                          type="submit"
                          onClick={handleViewDetails(index)}
                          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          View
                        </button>
                        {mrEntry && mrEntry.basic_details && (
                          <Modal
                            open={openDetails}
                            onClose={handleCloseDetails}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                <div className="bg-yellow-500 text-white pl-3 flex justify-end gap-x-96">
                                  <div className="py-5">Property Details</div>
                                  <div>
                                    <button onClick={handleCloseDetails}>
                                      {" "}
                                      <CloseIcon />
                                    </button>
                                  </div>
                                </div>
                              </Typography>
                              <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                              >
                                <div className="mt-5 py-5 text-md">
                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">MR No.</span>:
                                      {mrEntry.mrNo}
                                    </div>
                                    <div>
                                      <span className="font-bold">FIR No.</span>
                                      :{mrEntry.firNo}
                                    </div>
                                  </div>

                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">
                                        Date of FIR
                                      </span>
                                      : {mrEntry.dateOfFir}
                                    </div>
                                    <div>
                                      <span className="font-bold">
                                        Date of FIR
                                      </span>
                                      : : {mrEntry.dateOfSeizure}
                                    </div>
                                  </div>

                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">PS Name</span>
                                      :{mrEntry.psName}
                                    </div>
                                    <div>
                                      <span className="font-bold">Date</span>:
                                      {mrEntry.date}
                                    </div>
                                  </div>

                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">State</span>:
                                      {mrEntry.state}
                                    </div>
                                    <div>
                                      <span className="font-bold">
                                        District
                                      </span>
                                      :{mrEntry.district}
                                    </div>
                                  </div>
                                  <div className="flex justify-center my-5">
                                    <div className="text-lg font-bold">
                                      Basic Details
                                    </div>
                                  </div>
                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">
                                        Seized by Officer
                                      </span>
                                      : {mrEntry.basic_details.seizedByOfficer}
                                    </div>
                                    <div>
                                      <span className="font-bold">
                                        Seized Location
                                      </span>
                                      : {mrEntry.basic_details.seizedLocation}
                                    </div>
                                  </div>
                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">
                                        PS Receipt - Date & Time
                                      </span>
                                      :{" "}
                                      {mrEntry.basic_details.psReceiptDateTime}
                                    </div>
                                    <div>
                                      <span className="font-bold">
                                        Owner Name
                                      </span>
                                      : {mrEntry.basic_details.ownerName}
                                    </div>
                                  </div>

                                  <div
                                    className="mx-5 pt-2 flex justify-around gap-x-48
            "
                                  >
                                    <div className="">
                                      <span className="font-bold">
                                        Owner Address
                                      </span>
                                      : {mrEntry.basic_details.addressOfOwner}
                                    </div>
                                    <div>
                                      <button
                                        type="submit"
                                        onClick={handleCloseDetails}
                                        class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 font-lg rounded-lg text-sm px-3 py-2 me-2 "
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Typography>
                              <div className="">Property Details</div>
                              {mrEntry.properties.map((property, index) => (
                                <div key={index}>
                                  <div>Property : {index + 1}</div>
                                  {property.is_disposed ? (
                                    <div className="text-red-500">Disposed</div>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={handleDispose(index)}
                                      class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                      dispose
                                    </button>
                                  )}

                                  <button
                                    type="button"
                                    onClick={handleChainOfCustodyOpen(index)}
                                    class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                  >
                                    Add
                                  </button>
                                  <div>
                                    Category of Property :
                                    {
                                      property.property_details
                                        .categoryOfProperty
                                    }
                                  </div>
                                  <div>
                                    Belonging to Whom:
                                    {property.property_details.belongingToWhom}
                                  </div>
                                  <div>
                                    Nature of Property:
                                    {property.property_details.natureOfProperty}
                                  </div>
                                  <div>
                                    location of Property:{" "}
                                    {
                                      property.property_details
                                        .locationOfProperty
                                    }
                                  </div>
                                  <div className="text-lg text-center font-bold">
                                    Chain of Custody
                                  </div>
                                  {property.chain_of_custody.map(
                                    (coc, index) => (
                                      <div key={index}>
                                        <div className="font-bold">Chain of Custody : {index + 1}</div>
                                        <div>Date: {coc.date}</div>
                                        <div>Time: {coc.time}</div>
                                        <div>Purpose: {coc.purpose}</div>
                                      </div>
                                    )
                                  )}
                                  <Modal
                                    open={ChainofCustodyOpen}
                                    onClose={handleChainOfCustodyClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                  >
                                    <Box sx={style}>
                                      <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                      >
                                        <div className="bg-yellow-500 text-white pl-3 flex justify-end gap-x-96">
                                          <div className="py-5">
                                            Chain of Custody #1
                                          </div>
                                          <div className="p-3">
                                            <button
                                              onClick={
                                                handleChainOfCustodyClose
                                              }
                                            >
                                              {" "}
                                              <CloseIcon />
                                            </button>
                                          </div>
                                        </div>
                                      </Typography>
                                      <Typography
                                        id="modal-modal-description"
                                        sx={{ mt: 2 }}
                                      >
                                        <section class="text-gray-600 body-font">
                                          <div class="container px-5 pt-8 mx-auto">
                                            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                              <div class="relative flex-grow w-full mx-5">
                                                <label
                                                  for="date"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  Date
                                                </label>
                                                <input
                                                  type="date"
                                                  id="date"
                                                  value={date}
                                                  onChange={(e) =>
                                                    setDate(e.target.value)
                                                  }
                                                  name="date"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="time"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  Time
                                                </label>
                                                <input
                                                  type="time"
                                                  id="time"
                                                  value={time}
                                                  onChange={(e) =>
                                                    setTime(e.target.value)
                                                  }
                                                  name="time"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="purpose"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  Purpose
                                                </label>
                                                <input
                                                  type="text"
                                                  id="purpose"
                                                  value={purpose}
                                                  onChange={(e) =>
                                                    setPurpose(e.target.value)
                                                  }
                                                  name="purpose"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="officer"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  Investigating Officer
                                                </label>
                                                <input
                                                  type="text"
                                                  id="officer"
                                                  value={io}
                                                  onChange={(e) =>
                                                    setIo(e.target.value)
                                                  }
                                                  name="officer"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                            </div>
                                          </div>

                                          <div class="container px-5 pt-4 mx-auto">
                                            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                              <div class="relative flex-grow w-full mx-5">
                                                <label
                                                  for="rank"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  Rank
                                                </label>
                                                <input
                                                  type="text"
                                                  id="rank"
                                                  value={rank}
                                                  onChange={(e) =>
                                                    setRank(e.target.value)
                                                  }
                                                  name="rank"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="from"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  From
                                                </label>
                                                <input
                                                  type="text"
                                                  id="from"
                                                  value={from}
                                                  onChange={(e) =>
                                                    setFrom(e.target.value)
                                                  }
                                                  name="from"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="to"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  To
                                                </label>
                                                <input
                                                  type="text"
                                                  id="to"
                                                  value={to}
                                                  onChange={(e) =>
                                                    setTo(e.target.value)
                                                  }
                                                  name="to"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="whom"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  By Whom
                                                </label>
                                                <input
                                                  type="text"
                                                  id="whom"
                                                  value={byWhom}
                                                  onChange={(e) =>
                                                    setByWhom(e.target.value)
                                                  }
                                                  name="whom"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                            </div>
                                          </div>

                                          <div class="container px-5 pt-4 pb-10 mx-auto">
                                            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                              <div class="relative flex-grow w-full mx-5">
                                                <label
                                                  for="toWhom"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  To Whom
                                                </label>
                                                <input
                                                  type="text"
                                                  id="toWhom"
                                                  value={toWhom}
                                                  onChange={(e) =>
                                                    setToWhom(e.target.value)
                                                  }
                                                  name="toWhom"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <label
                                                  for="from"
                                                  class="leading-7 text-sm text-gray-600"
                                                >
                                                  Document (maximum file size
                                                  2MB)
                                                </label>
                                                <input
                                                  type="file"
                                                  id="from"
                                                  value={documents}
                                                  onChange={(e) =>
                                                    setDocument(e.target.value)
                                                  }
                                                  name="from"
                                                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                              </div>
                                              <div class="relative flex-grow w-full">
                                                <button
                                                  type="button"
                                                  onClick={
                                                    handleChainOfCustodyEntry
                                                  }
                                                  class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
                                                >
                                                  Add
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </section>
                                      </Typography>
                                    </Box>
                                  </Modal>
                                </div>
                              ))}
                            </Box>
                          </Modal>
                        )}
                      </div>
                      <div>
                        <button
                          type="submit"
                          onClick={handleOpen}
                          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Add Property
                        </button>

                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              <div className="bg-yellow-500 text-white pl-3 flex justify-end gap-x-96">
                                <div className="py-5">
                                  Add Property Information
                                </div>
                                <div>
                                  <button onClick={handleClose}>
                                    {" "}
                                    <CloseIcon />
                                  </button>
                                </div>
                              </div>
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              <section class="text-gray-600 body-font">
                                <div class="container px-5 pt-8 mx-auto">
                                  <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                    <div class="relative flex-grow w-full mx-5">
                                      <label
                                        for="categoryOfProperty"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Category of Property
                                      </label>
                                      <input
                                        type="text"
                                        id="categoryOfProperty"
                                        value={categoryOfProperty}
                                        onChange={(e) =>
                                          setCategoryOfProperty(e.target.value)
                                        }
                                        name="categoryOfProperty"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                    <div class="relative flex-grow w-full">
                                      <label
                                        for="quantity"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Enter Quantity
                                      </label>
                                      <input
                                        type="text"
                                        id="quantity"
                                        value={quantity}
                                        onChange={(e) =>
                                          setQuantity(e.target.value)
                                        }
                                        name="quantity"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div class="container px-5 pt-3 mx-auto">
                                  <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                    <div class="relative flex-grow w-full mx-5">
                                      <label
                                        for="owner"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Belonging To Whom
                                      </label>
                                      <input
                                        type="text"
                                        id="owner"
                                        value={belongingToWhom}
                                        onChange={(e) =>
                                          setBelongingToWhom(e.target.value)
                                        }
                                        name="owner"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                    <div class="relative flex-grow w-full">
                                      <label
                                        for="nature"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Nature of Property
                                      </label>
                                      <input
                                        type="text"
                                        id="nature"
                                        value={natureOfProperty}
                                        onChange={(e) =>
                                          setNatureOfProperty(e.target.value)
                                        }
                                        name="nature"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div class="container px-5 pt-3 mx-auto">
                                  <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                    <div class="relative flex-grow w-full mx-5">
                                      <label
                                        for="photoOfProperty"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Photo of Property ( maximum file size
                                        2MB)
                                      </label>
                                      <input
                                        type="file"
                                        id="photoOfProperty"
                                        value={photoOfProperty}
                                        onChange={(e) =>
                                          setPhotoOfProperty(e.target.value)
                                        }
                                        name="photoOfProperty"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                    <div class="relative flex-grow w-full">
                                      <label
                                        for="location"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Location of Property
                                      </label>
                                      <input
                                        type="text"
                                        id="location"
                                        value={locationOfProperty}
                                        onChange={(e) =>
                                          setLocationOfProperty(e.target.value)
                                        }
                                        name="location"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div class="container px-5 pt-3 mx-auto pb-5">
                                  <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                    <div class="relative flex-grow w-full mx-5">
                                      <label
                                        for="photoOfProperty"
                                        class="leading-7 text-sm text-gray-600"
                                      >
                                        Property Description
                                      </label>
                                      <textarea
                                        id="photoOfProperty"
                                        rows="5"
                                        value={propertyDescription}
                                        onChange={(e) =>
                                          setPropertyDescription(e.target.value)
                                        }
                                        cols="10"
                                        name="photoOfProperty"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                      />
                                    </div>
                                    <div class="relative flex-grow w-full">
                                      <button
                                        type="button"
                                        onClick={handleAddProperty(index)}
                                        class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
                                      >
                                        Add Property
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </Typography>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageEntDetailsData;
