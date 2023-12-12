import React,{useState} from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    // height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };


const ManageEntDetailsData = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openDetails, setOpenDetails] = useState(false);
    const handleOpenDetails = () => setOpenDetails(true);
    const handleCloseDetails = () => setOpenDetails(false);
  return (
    <>
        
        <div className='flex justify-end lg:mr-20 mt-10'>
            <div>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Export</button>
            </div>
            <div>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Print</button>
            </div>
        </div>

        <div className='text-lg ml-5'>
            Showing 1-5 (out of 10) 
        </div>
        <div className='mt-5'>
            

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    MR No
                </th>
                <th scope="col" class="px-6 py-3">
                    FIR No
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of FIR
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of Seziure
                </th>
                <th scope="col" class="px-6 py-3">
                    PS Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    State
                </th>
                <th scope="col" class="px-6 py-3">
                    District
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #1
                </th>
                <td class="px-6 py-4">
                    12/1980
                </td>
                <td class="px-6 py-4">
                    85
                </td>
                <td class="px-6 py-4">
                    04-05-2021
                </td>
                <td class="px-6 py-4">
                    10-05-2021
                </td>
                <td class="px-6 py-4">
                    Mesra
                </td>
                <td class="px-6 py-4">
                    15-06-2021
                </td>
                <td class="px-6 py-4">
                    Jharkhand
                </td>
                <td class="px-6 py-4">
                    Ranchi
                </td>
                <td class="px-6 py-4">
                    <div className='flex gap-x-2'>
                        <div>
                        <button type="submit" onClick={handleOpenDetails} class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
                        <Modal
        open={openDetails}
        onClose={handleCloseDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='bg-yellow-500 text-white pl-3 flex justify-end gap-x-96'>
                <div className='py-5'>
                Property Details
            </div>
            <div>
               <button onClick={handleCloseDetails}> <CloseIcon/></button>
            </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          <div className='mt-5 py-5 text-md'>
            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>MR No.</span>: 12/1980
                </div>
                <div>
                    <span className='font-bold'>FIR No.</span>: 85
                </div>
            </div>

            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>Date of FIR</span>: 04-05-2021
                </div>
                <div>
                    <span className='font-bold'>FIR No.</span>: 10-05-2021
                </div>
            </div>

            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>PS Name</span>: Mesra
                </div>
                <div>
                    <span className='font-bold'>Date</span>: 15-06-2021
                </div>
            </div>

            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>State</span>: Jharkhand
                </div>
                <div>
                    <span className='font-bold'>District</span>: Ranchi
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <div className='text-lg font-bold'>Basic Details</div>
            </div>
            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>Seized by Officer</span>: Sri Ajay Kumar Singh
                </div>
                <div>
                    <span className='font-bold'>Seized Location</span>: Mesra
                </div>
            </div>
            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>
PS Receipt - Date & Time</span>: 20-05-2021 (13:47 PM)
                </div>
                <div>
                    <span className='font-bold'>Owner Name</span>: Aryan Kumar
                </div>
            </div>

            <div className='mx-5 pt-2 flex justify-around gap-x-48
            '>
                <div className=''>
                    <span className='font-bold'>Owner Address</span>: Room No.: 206, Hostel-13 BIT Mesra Pin-835215
                </div>
                <div>
                <button type="submit" onClick={handleCloseDetails} class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 font-lg rounded-lg text-sm px-3 py-2 me-2 ">Close</button>
                </div>
            </div>
          </div>
          </Typography>
        </Box>
      </Modal>
                        </div>
                        <div>
                        <button type="submit" onClick={handleOpen} class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Property</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='bg-yellow-500 text-white pl-3 flex justify-end gap-x-96'>
                <div className='py-5'>
                Add Property Information
            </div>
            <div>
               <button onClick={handleClose}> <CloseIcon/></button>
            </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <section class="text-gray-600 body-font">
        <div class="container px-5 pt-8 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="categoryOfProperty" class="leading-7 text-sm text-gray-600">Category of Property</label>
                <input type="text" id="categoryOfProperty" name="categoryOfProperty" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="quantity" class="leading-7 text-sm text-gray-600">Enter Quantity</label>
                <input type="text" id="quantity" name="quantity" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>

        <div class="container px-5 pt-3 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="owner" class="leading-7 text-sm text-gray-600">Belonging To Whom</label>
                <input type="text" id="owner" name="owner" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="nature" class="leading-7 text-sm text-gray-600">Nature of Property</label>
                <input type="text" id="nature" name="nature" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>

        <div class="container px-5 pt-3 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="photoOfProperty" class="leading-7 text-sm text-gray-600">Photo of Property ( maximum file size 2MB)</label>
                <input type="file" id="photoOfProperty" name="photoOfProperty" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="location" class="leading-7 text-sm text-gray-600">Location of Property</label>
                <input type="text" id="location" name="location" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>

        <div class="container px-5 pt-3 mx-auto pb-5">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="photoOfProperty" class="leading-7 text-sm text-gray-600">Property Description</label>
                <textarea id="photoOfProperty" rows="5" cols="10" name="photoOfProperty" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
            <button type="button" onClick={handleClose} class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">Add Property</button>
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
            
        </tbody>
    </table>
</div>


        </div>

    </>
  )
}

export default ManageEntDetailsData