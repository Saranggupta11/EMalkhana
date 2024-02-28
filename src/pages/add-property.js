// pages/add-property.js
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import axios from "axios";

const AddPropertyPage = () => {
  const router = useRouter();

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
      router.push("/");
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <Typography variant="h6" component="h2">
        <div className="bg-yellow-500 text-white pl-3 flex justify-between items-center">
          <div className="py-5">Add Property Information</div>
          <div>
            <button onClick={() => router.push("/")}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </Typography>
      <div className="mt-4">
        <label htmlFor="categoryOfProperty" className="block text-sm font-medium text-gray-700">
          Category of Property
        </label>
        <input
          type="text"
          id="categoryOfProperty"
          value={categoryOfProperty}
          onChange={(e) => setCategoryOfProperty(e.target.value)}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Enter Quantity
        </label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="belongingToWhom" className="block text-sm font-medium text-gray-700">
          Belonging To Whom
        </label>
        <input
          type="text"
          id="belongingToWhom"
          value={belongingToWhom}
          onChange={(e) => setBelongingToWhom(e.target.value)}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="natureOfProperty" className="block text-sm font-medium text-gray-700">
          Nature of Property
        </label>
        <input
          type="text"
          id="natureOfProperty"
          value={natureOfProperty}
          onChange={(e) => setNatureOfProperty(e.target.value)}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="photoOfProperty" className="block text-sm font-medium text-gray-700">
          Photo of Property ( maximum file size 2MB)
        </label>
        <input
          type="file"
          id="photoOfProperty"
          accept="image/*"
          onChange={(e) => setPhotoOfProperty(e.target.files[0])}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="locationOfProperty" className="block text-sm font-medium text-gray-700">
          Location of Property
        </label>
        <input
          type="text"
          id="locationOfProperty"
          value={locationOfProperty}
          onChange={(e) => setLocationOfProperty(e.target.value)}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="propertyDescription" className="block text-sm font-medium text-gray-700">
          Property Description
        </label>
        <textarea
          id="propertyDescription"
          rows="5"
          value={propertyDescription}
          onChange={(e) => setPropertyDescription(e.target.value)}
          className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleAddProperty}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Add Property
        </button>
      </div>
    </div>
  );
};

export default AddPropertyPage;
