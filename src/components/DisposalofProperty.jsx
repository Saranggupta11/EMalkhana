import React from 'react'

const DisposalofProperty = () => {
  return (
         <div>
        <section class="text-gray-600 body-font">
        <div class="container px-5 pt-8 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="date-of-order" class="leading-7 text-sm text-gray-600">Date of Order</label>
                <input type="date" id="date-of-order" name="date-of-order" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="type" class="leading-7 text-sm text-gray-600">Type</label>
                <input type="text" id="type" name="type" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>
        <div class="container px-5 pt-8 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="investigating-officer" class="leading-7 text-sm text-gray-600">Investigating Officer</label>
                <input type="text" id="investigating-officer" name="investigating-officer" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="rank" class="leading-7 text-sm text-gray-600">Rank</label>
                <input type="text" id="rank" name="rank" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>

        <div class="container px-5 pt-8 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="file" class="leading-7 text-sm text-gray-600">Upload File</label>
                <input type="file" id="date-of-order" name="file" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="remarks" class="leading-7 text-sm text-gray-600">Remarks</label>
                <textarea id="remark" name="remarks" rows="3" cols="50"class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>
        <div className='mt-8 flex justify-center'>
            <button type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </div>
  </section>
  </div>

  )
}

export default DisposalofProperty