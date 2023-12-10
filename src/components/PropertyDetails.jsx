import React from 'react'


const PropertyDetails = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
        <div class="container px-5 pt-8 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
                <label for="ps-name" class="leading-7 text-sm text-gray-600">PS Name</label>
                <input type="text" id="ps-name" name="ps-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="investigating-officer" class="leading-7 text-sm text-gray-600">Investigating Officer</label>
                <input type="text" id="investigating-officer" name="investigating-officer" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="crime-number" class="leading-7 text-sm text-gray-600">Crime Number</label>
                <div className='flex gap-2'>
                    <input type="number" id="crime-number" name="crime-number" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Case No.'/>
                    <input type="text" id="crime-number" name="crime-number" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Year'/>
                </div>
            </div>
            {/* <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button> */}
            </div>
            
  </div>
  <div class="container px-5 pt-4 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
                <div className='flex gap-x-2'>
                    <div>
                <label for="act" class="leading-7 text-sm text-gray-600">Act</label>
                <input type="text" id="act" name="act" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div>
                <label for="act" class="leading-7 text-sm text-gray-600">Section of Law</label>
                <input type="text" id="law" name="law" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
            </div>
            <div class="relative flex-grow w-full">
                <label for="date-fir" class="leading-7 text-sm text-gray-600">Date of FIR</label>
                <input type="date" id="date-fir" name="date-fir" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="date-of-seziure" class="leading-7 text-sm text-gray-600">Date of Seziure</label>
                    <input type="date" id="date-of-seziure" name="date-of-seziure" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            {/* <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button> */}
            </div>
            
  </div>

  <div class="container px-5 pt-10 mx-auto flex gap-x-1">
  <div className="ml-5">
      <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Property</button>
      </div>
      <div className="">
      <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print QR Code</button>
      </div>
      <div className="">
      <button type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save & Proceed</button>
      </div>
            
  </div>


</section>
    </div>
  )
}

export default PropertyDetails