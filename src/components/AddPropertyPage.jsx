// AddPropertyPage.js
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import axios from "axios";

const AddPropertyPage = ({ handleClose }) => {
  const [categoryOfProperty, setCategoryOfProperty] = useState("");
  const [quantity, setQuantity] = useState("");
  const [belongingToWhom, setBelongingToWhom] = useState("");
  const [natureOfProperty, setNatureOfProperty] = useState("");
  const [photoOfProperty, setPhotoOfProperty] = useState("");
  const [locationOfProperty, setLocationOfProperty] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  const handleAddProperty = async () => {
    try {
      const res = await axios.post("/api/property", {
        categoryOfProperty,
        quantity,
        belongingToWhom,
        natureOfProperty,
        photoOfProperty,
        locationOfProperty,
        propertyDescription,
      });
      console.log(res.data);
      alert("Property Added Successfully");
      handleClose(); // Close the modal after adding property
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24 }}>
      <Typography variant="h6" component="h2">
        <div className="bg-yellow-500 text-white pl-3 flex justify-between items-center">
          <div className="py-5">Add Property Information</div>
          <div>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-8 mx-auto">
            <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full mx-5">
                <label htmlFor="categoryOfProperty" className="leading-7 text-sm text-gray-600">Category of Property</label>
                <input type="text" id="categoryOfProperty" value={categoryOfProperty} onChange={(e) => setCategoryOfProperty(e.target.value)} name="categoryOfProperty" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative flex-grow w-full">
                <label htmlFor="quantity" className="leading-7 text-sm text-gray-600">Enter Quantity</label>
                <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} name="quantity" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="container px-5 pt-3 mx-auto">
              <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full mx-5">
                  <label htmlFor="owner" className="leading-7 text-sm text-gray-600">Belonging To Whom</label>
                  <input type="text" id="owner" value={belongingToWhom} onChange={(e) => setBelongingToWhom(e.target.value)} name="owner" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                  <label htmlFor="nature" className="leading-7 text-sm text-gray-600">Nature of Property</label>
                  <input type="text" id="nature" value={natureOfProperty} onChange={(e) => setNatureOfProperty(e.target.value)} name="nature" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="container px-5 pt-3 mx-auto">
              <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full mx-5">
                  <label htmlFor="photoOfProperty" className="leading-7 text-sm text-gray-600">Photo of Property ( maximum file size 2MB)</label>
                  <input type="file" id="photoOfProperty" value={photoOfProperty} onChange={(e) => setPhotoOfProperty(e.target.value)} name="photoOfProperty" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                  <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location of Property</label>
                  <input type="text" id="location" value={locationOfProperty} onChange={(e) => setLocationOfProperty(e.target.value)} name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
            </div>
            <div className="container px-5 pt-3 mx-auto pb-5">
              <div className="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full mx-5">
                  <label htmlFor="photoOfProperty" className="leading-7 text-sm text-gray-600">Property Description</label>
                  <textarea id="photoOfProperty" rows="5" value={propertyDescription} onChange={(e) => setPropertyDescription(e.target.value)} cols="10" name="photoOfProperty" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                  <button type="button" onClick={handleAddProperty} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Property</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Typography>
    </Box>
  );
};

export default AddPropertyPage;
