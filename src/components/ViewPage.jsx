// ViewPage.jsx

import React from "react";
import { useRouter } from "next/router";

const ViewPage = () => {
  const router = useRouter();
  const { mrEntry } = router.query;
  const parsedMrEntry = mrEntry ? JSON.parse(mrEntry) : null;

  if (!parsedMrEntry) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="bg-yellow-500 text-white p-3">Property Details</div>
      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <span className="font-bold">MR No.:</span> {parsedMrEntry.mrNo}
          </div>
          <div>
            <span className="font-bold">FIR No.:</span> {parsedMrEntry.firNo}
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <span className="font-bold">Date of FIR:</span>{" "}
            {parsedMrEntry.dateOfFir}
          </div>
          <div>
            <span className="font-bold">Date of Seizure:</span>{" "}
            {parsedMrEntry.dateOfSeizure}
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <span className="font-bold">Date:</span> {parsedMrEntry.date}
          </div>
          <div>
            <span className="font-bold">District:</span>{" "}
            {parsedMrEntry.district}
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <span className="font-bold">PS Name:</span> {parsedMrEntry.psName}
          </div>
          <div>
            <span className="font-bold">State:</span> {parsedMrEntry.state}
          </div>
        </div>
      </div>
      <div className="mb-2 font-semibold text-lg text-center">
        Property Details
      </div>
      {parsedMrEntry.properties.map((property, index) => (
        <div key={index} className="p-5 border-t mt-3">
          <div className="flex justify-center">
            <div>
              <span className="font-bold">Property:</span> {index + 1}
            </div>
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
    </div>
  );
};

export default ViewPage;
