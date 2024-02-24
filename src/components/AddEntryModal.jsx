import React, { useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const AddEntryModal = ({ openEntryModal, setOpenEntryModal }) => {
  const [mrNo, setMrNo] = useState("");
  const [firNo, setFirNo] = useState("");
  const [dateOfFir, setDateOfFir] = useState("");
  const [dateOfSeizure, setDateOfSeizure] = useState("");
  const [psName, setPsName] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [seizedByOfficer, setSeizedByOfficer] = useState("");
  const [seizedLocation, setSeizedLocation] = useState("");
  const [psReceiptDateTime, setPsReceiptDateTime] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [addressOfOwner, setAddressOfOwner] = useState("");

  const handleCloseModal = () => {
    setOpenEntryModal(false);
  };

  const handleClick = async () => {
    try {
      const res = await axios.post("/api/malkhanaEntry", {
        mrNo,
        firNo,
        dateOfFir,
        dateOfSeizure,
        psName,
        date,
        state,
        district,
        basic_details: {
          seizedByOfficer,
          seizedLocation,
          psReceiptDateTime,
          ownerName,
          addressOfOwner,
        },
      });

      setMrNo("");
      setFirNo("");
      setDateOfFir("");
      setDateOfSeizure("");
      setPsName("");
      setDate("");
      setState("");
      setDistrict("");
      setSeizedByOfficer("");
      setSeizedLocation("");
      setPsReceiptDateTime("");
      setOwnerName("");
      setAddressOfOwner("");
      setOpenEntryModal(false);
      alert("Entry Saved Successfully");

      console.log(res);
    } catch (error) {
      console.log(error);
      alert("Error Occurred");
    }
  };

  return (
    <Modal
      open={openEntryModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-lg p-8 w-4/5 h-4/5 relative">
          <Button onClick={handleCloseModal} className="absolute top-0 right-0 mt-2 mr-2"><CloseIcon /></Button>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="mr_no" className="block text-sm text-gray-600">MR No</label>
              <input
                type="text"
                id="mr_no"
                value={mrNo}
                onChange={(e) => setMrNo(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="fir_no" className="block text-sm text-gray-600">FIR No</label>
              <input
                type="text"
                id="fir_no"
                value={firNo}
                onChange={(e) => setFirNo(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="date_of_fir" className="block text-sm text-gray-600">Date of FIR</label>
              <input
                type="date"
                id="date_of_fir"
                value={dateOfFir}
                onChange={(e) => setDateOfFir(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="date_of_seizure" className="block text-sm text-gray-600">Date of Seizure</label>
              <input
                type="date"
                id="date_of_seizure"
                value={dateOfSeizure}
                onChange={(e) => setDateOfSeizure(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="ps_name" className="block text-sm text-gray-600">PS Name</label>
              <input
                type="text"
                id="ps_name"
                value={psName}
                onChange={(e) => setPsName(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="date" className="block text-sm text-gray-600">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="state" className="block text-sm text-gray-600">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="district" className="block text-sm text-gray-600">District</label>
              <input
                type="text"
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="seized_by_officer" className="block text-sm text-gray-600">Seized By Officer</label>
              <input
                type="text"
                id="seized_by_officer"
                value={seizedByOfficer}
                onChange={(e) => setSeizedByOfficer(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="seized_location" className="block text-sm text-gray-600">Seized Location</label>
              <input
                type="text"
                id="seized_location"
                value={seizedLocation}
                onChange={(e) => setSeizedLocation(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="ps_receipt_date_time" className="block text-sm text-gray-600">PS Receipt - Date & Time</label>
              <input
                type="date"
                id="ps_receipt_date_time"
                value={psReceiptDateTime}
                onChange={(e) => setPsReceiptDateTime(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="owner_name" className="block text-sm text-gray-600">Owner Name</label>
              <input
                type="text"
                id="owner_name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label htmlFor="address_of_owner" className="block text-sm text-gray-600">Address of Owner</label>
              <input
                type="text"
                id="address_of_owner"
                value={addressOfOwner}
                onChange={(e) => setAddressOfOwner(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button
              onClick={handleClick}
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save & Proceed
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddEntryModal;
