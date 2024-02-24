import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import ChainofCustody from "./ChainofCustody";
import { set } from "mongoose";
export default function AddPropertyModal({
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
  handleOpen,}) {
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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="bg-yellow-500 text-white pl-3 flex justify-end gap-x-96">
            <div className="py-5">Add Property Information</div>
            <div>
              <button onClick={handleClose}>
                {" "}
                <CloseIcon />
              </button>
            </div>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                    onChange={(e) => setCategoryOfProperty(e.target.value)}
                    name="categoryOfProperty"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative flex-grow w-full">
                  <label for="quantity" class="leading-7 text-sm text-gray-600">
                    Enter Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    name="quantity"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>

            <div class="container px-5 pt-3 mx-auto">
              <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full mx-5">
                  <label for="owner" class="leading-7 text-sm text-gray-600">
                    Belonging To Whom
                  </label>
                  <input
                    type="text"
                    id="owner"
                    value={belongingToWhom}
                    onChange={(e) => setBelongingToWhom(e.target.value)}
                    name="owner"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative flex-grow w-full">
                  <label for="nature" class="leading-7 text-sm text-gray-600">
                    Nature of Property
                  </label>
                  <input
                    type="text"
                    id="nature"
                    value={natureOfProperty}
                    onChange={(e) => setNatureOfProperty(e.target.value)}
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
                    Photo of Property ( maximum file size 2MB)
                  </label>
                  <input
                    type="file"
                    id="photoOfProperty"
                    value={photoOfProperty}
                    onChange={(e) => setPhotoOfProperty(e.target.value)}
                    name="photoOfProperty"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative flex-grow w-full">
                  <label for="location" class="leading-7 text-sm text-gray-600">
                    Location of Property
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={locationOfProperty}
                    onChange={(e) => setLocationOfProperty(e.target.value)}
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
                    onChange={(e) => setPropertyDescription(e.target.value)}
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
  );
}
