import React, { useState } from "react";
import axios from "axios";

const PropertyDetails = () => {
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
      alert("Entry Saved Successfully");

      console.log(res);
    } catch (error) {
        console.log(error);
        alert("Error Occured");
    }
  };
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-8 mx-auto">
          <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="mr_no" class="leading-7 text-sm text-gray-600">
                MR No
              </label>
              <input
                type="text"
                id="mr_no"
                value={mrNo}
                onChange={(e) => setMrNo(e.target.value)}
                name="mr_no"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="fir_no" class="leading-7 text-sm text-gray-600">
                FIR No
              </label>
              <input
                type="text"
                id="fir_no"
                value={firNo}
                onChange={(e) => setFirNo(e.target.value)}
                name="fir_no"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="date_of_fir" class="leading-7 text-sm text-gray-600">
                Date of FIR
              </label>
              <input
                type="date"
                id="date_of_fir"
                value={dateOfFir}
                onChange={(e) => setDateOfFir(e.target.value)}

                name="date_of_fir"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Case No."
              />
            </div>
            <div class="relative flex-grow w-full">
              <label
                for="date_of_seizure"
                class="leading-7 text-sm text-gray-600"
              >
                Date of Seizure
              </label>
              <input
                type="date"
                id="date_of_seizure"
                value={dateOfSeizure}
                onChange={(e) => setDateOfSeizure(e.target.value)}
                name="date_of_seizure"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Case No."
              />
            </div>
          </div>
        </div>

        <div class="container px-5 pt-4 mx-auto">
          <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="ps_name" class="leading-7 text-sm text-gray-600">
                PS Name
              </label>
              <input
                type="text"
                id="ps_name"
                value={psName}
                onChange={(e) => setPsName(e.target.value)}
                name="ps_name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="date" class="leading-7 text-sm text-gray-600">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="state" class="leading-7 text-sm text-gray-600">
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                name="state"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="district" class="leading-7 text-sm text-gray-600">
                District
              </label>
              <input
                type="text"
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                name="district"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center my-5 py-3 text-3xl font-black">
          <div>Basic Details</div>
        </div>

        <div class="container px-5 pt-4 mx-auto">
          <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label
                for="seized_by_officer"
                class="leading-7 text-sm text-gray-600"
              >
                Seized By Officer
              </label>
              <input
                type="text"
                id="seized_by_officer"
                value={seizedByOfficer}
                onChange={(e) => setSeizedByOfficer(e.target.value)}
                name="seized_by_officer"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label
                for="seized_location"
                class="leading-7 text-sm text-gray-600"
              >
                Seized Location
              </label>
              <input
                type="text"
                id="seized_location"
                value={seizedLocation}
                onChange={(e) => setSeizedLocation(e.target.value)}
                name="seized_location"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label
                for="ps_receipt_date_time"
                class="leading-7 text-sm text-gray-600"
              >
                PS Receipt - Date & Time
              </label>
              <input
                type="date"
                id="ps_receipt_date_time"
                value={psReceiptDateTime}
                onChange={(e) => setPsReceiptDateTime(e.target.value)}
                name="ps_receipt_date_time"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="owner_name" class="leading-7 text-sm text-gray-600">
                Owner Name
              </label>
              <input
                type="text"
                id="owner_name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                name="owner_name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <div>
            <label
              for="address_of_owner"
              class="leading-7 text-sm text-gray-600"
            >
              Address of Owner
            </label>
            <input
              type="text"
              id="address_of_owner"
                value={addressOfOwner}
              onChange={(e) => setAddressOfOwner(e.target.value)}
              name="address_of_owner"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div class="container px-5 pt-10 mx-auto flex gap-x-3 justify-center">
          <div className="">
            <button
              onClick={handleClick}
              type="button"
              class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save & Proceed
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
