import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import ChainofCustody from "./ChainofCustody";
import { set } from "mongoose";
import ViewModal from "./ViewModal";
import AddPropertyModal from "./AddPropertyModal";
import AddEntryModal from "./AddEntryModal";
import { useRouter } from "next/router";
const ManageEntDetailsData = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    router.push("/add-property");
  };
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
  const [entDetails, setEntDetails] = useState([]);
  const [mrEntry, setMrEntry] = useState({});
  const [openEntryModal, setOpenEntryModal] = useState(false);
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

  const handleViewDetails = async (index) => {
    const mrNo = entDetails[index].mrNo;
    const res = await axios.get(`/api/malkhanaEntry/?mrNo=${mrNo}`);
    const data = await res.data._case;
    router.push({
      pathname: "/view",
      query: { mrEntry: JSON.stringify(data) },
    });
  };

  const handleDispose = async (index) => {
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

  const stateProps = {
    open,
    setOpen,
    openDetails,
    setOpenDetails,
    index,
    setIndex,
    ChainofCustodyOpen,
    setChainofCustodyOpen,
    date,
    setDate,
    time,
    setTime,
    purpose,
    setPurpose,
    io,
    setIo,
    rank,
    setRank,
    from,
    setFrom,
    to,
    setTo,
    byWhom,
    setByWhom,
    toWhom,
    setToWhom,
    documents,
    setDocument,
    categoryOfProperty,
    setCategoryOfProperty,
    quantity,
    setQuantity,
    belongingToWhom,
    setBelongingToWhom,
    natureOfProperty,
    setNatureOfProperty,
    photoOfProperty,
    setPhotoOfProperty,
    locationOfProperty,
    setLocationOfProperty,
    propertyDescription,
    setPropertyDescription,
    entDetails,
    setEntDetails,
    mrEntry,
    setMrEntry,
    handleAddProperty,
    handleChainOfCustodyClose,
    handleDispose,
    handleViewDetails,
    handleOpenDetails,
    handleChainOfCustodyOpen,
    handleChainOfCustodyEntry,
    handleClose,
    handleCloseDetails,
    handleOpen,
  };
  return (
    <div className="mt-5">
      <div className="text-xl ml-5 text-black">
        Showing 1-{entDetails.length} (out of {entDetails.length})
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-black text-lg text-left rtl:text-right text-black">
            <thead className="text-sm text-white uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="px-8 py-4 border border-black">
                  ID
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  MR No
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  FIR No
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  Date of FIR
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  Date of Seziure
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  PS Name
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  Date
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  State
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  District
                </th>
                <th scope="col" className="px-8 py-4 border border-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {entDetails.map((detail, index) => (
                <tr
                  key={index}
                  className="bg-white border border-black hover:bg-green-200 transition-colors duration-300 ease-in-out"
                >
                  <td className="px-8 py-2 border border-black">{index + 1}</td>
                  <td className="px-8 py-2 border border-black">
                    {detail.mrNo}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {detail.firNo}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {new Date(detail.dateOfFir).toLocaleString()}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {new Date(detail.dateOfSeizure).toLocaleString()}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {detail.psName}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {new Date(detail.date).toLocaleString()}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {detail.state}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    {detail.district}
                  </td>
                  <td className="px-8 py-2 border border-black">
                    <div className="flex gap-x-4">
                      <div
                        onClick={() => {
                          handleViewDetails(index);
                        }}
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-base px-4 py-2 me-2 hover:cursor-pointer"
                      >
                        View
                      </div>

                      <div
                        onClick={handleOpen}
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-base px-4 py-2 me-2 hover:cursor-pointer"
                      >
                        Add Property
                      </div>
                      {/* {detail.mrNo && detail.basic_details && (
                        
                        <AddPropertyModal {...stateProps} />
                      )} */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEntDetailsData;
