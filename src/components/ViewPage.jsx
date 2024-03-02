import React, { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import ChainofCustody from "./ChainofCustody";

const ViewPage = () => {
  const router = useRouter();
  const { mrEntry } = router.query;
  const parsedMrEntry = mrEntry ? JSON.parse(mrEntry) : null;

  const handleClose = () => {
    router.push("/");
  };

  const formatDate = (datetimeString) => {
    const dateObject = new Date(datetimeString);
    return dateObject.toLocaleDateString();
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);

  const handleAddCOC = (index) => {
    // setSelectedProperty(property); // Set the selected property
    setIsModalOpen(true); // Open the modal
    setSelectedPropertyIndex(index);
  };

  if (!parsedMrEntry) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-end">
        <CloseIcon onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="bg-yellow-500 text-white p-3">Property Details</div>
      <div className="p-5">
        <div className="flex justify-between"></div>
        <div className="flex justify-between mt-3">
          <div className="w-4/5">
            <span className="font-bold">MR No.:</span>{" "}
            <span>{parsedMrEntry.mrNo}</span>
          </div>
          <div className="w-1/5">
            <span className="font-bold">FIR No.:</span>{" "}
            <span>{parsedMrEntry.firNo}</span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="w-4/5">
            <span className="font-bold">Date of FIR:</span>{" "}
            <span>{formatDate(parsedMrEntry.dateOfFir)}</span>
          </div>
          <div className="w-1/5">
            <span className="font-bold">Date of Seizure:</span>{" "}
            <span>{formatDate(parsedMrEntry.dateOfSeizure)}</span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="w-4/5">
            <span className="font-bold">Date:</span>{" "}
            <span>{formatDate(parsedMrEntry.date)}</span>
          </div>
          <div className="w-1/5">
            <span className="font-bold">District:</span>{" "}
            <span>{parsedMrEntry.district}</span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="w-4/5">
            <span className="font-bold">PS Name:</span>{" "}
            <span>{parsedMrEntry.psName}</span>
          </div>
          <div className="w-1/5">
            <span className="font-bold">State:</span>{" "}
            <span>{parsedMrEntry.state}</span>
          </div>
        </div>
      </div>
      <div className="mb-2 font-semibold text-lg text-center">
        Property Details
      </div>
      {parsedMrEntry.properties.map((property, index) => (
        <div key={index} className="p-5 border-t mt-3">
          <div className="flex justify-between">
            <div className="w-1/3">
              <button
                type="button"
                style={{ backgroundColor: "#fca311" }}
              >
                Dispose
              </button>
            </div>
            <div className="w-1/3 text-center">
              <span className="font-bold">Property: </span>
              {index + 1}
            </div>
            <div className="w-1/3 text-right">
              <div className="p-5 border-t mt-3">
                <button
                  type="button"
                  style={{ backgroundColor: "#fca311" }}
                  onClick={() => handleAddCOC(index)} // Pass the property to handleAddCOC
                >
                  Add Chain of Custody
                </button>
                {/* Render the ChainofCustody component only if selectedProperty matches the current property */}
                {/* {isModalOpen && selectedPropertyIndex === index && (
                  <ChainofCustody
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    selectedProperty={selectedProperty}
                  />
                )} */}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="w-4/5">
              <span className="font-bold">Category of Property:</span>{" "}
              <span>{property.property_details.categoryOfProperty}</span>
            </div>
            <div className="w-1/5">
              <span className="font-bold">Belonging to Whom:</span>{" "}
              <span>{property.property_details.belongingToWhom}</span>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="w-4/5">
              <span className="font-bold">Nature of Property:</span>{" "}
              <span>{property.property_details.natureOfProperty}</span>
            </div>
            <div className="w-1/5">
              <span className="font-bold">Location of Property:</span>{" "}
              <span>{property.property_details.locationOfProperty}</span>
            </div>
          </div>
          <div className="text-lg text-center font-bold mt-3">
            Chain of Custody
          </div>
          {property.chain_of_custody.map((coc, index) => (
            <div className="mt-2" key={index}>
              <div className="flex justify-between">
                <div className="w-4/5">
                  <span className="font-bold">Chain of Custody:</span>{" "}
                  <span>{index + 1}</span>
                </div>
                <div className="w-1/5">
                  <span className="font-bold">Date:</span>{" "}
                  <span>{formatDate(coc.date)}</span>
                </div>
              </div>
              <div className="flex justify-between mt-1">
                <div className="w-4/5">
                  <span className="font-bold">Time:</span>{" "}
                  <span>{coc.time}</span>
                </div>
                <div className="w-1/5">
                  <span className="font-bold">Purpose:</span>{" "}
                  <span>{coc.purpose}</span>
                </div>
              </div>
            </div>
          ))}
           {isModalOpen && selectedPropertyIndex === index && (
              <ChainofCustody
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedProperty={parsedMrEntry.properties[selectedPropertyIndex]}
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default ViewPage;
