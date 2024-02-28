
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
