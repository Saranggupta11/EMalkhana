import React from 'react'

const ManageEntDetails = () => {
  return (
    <div className='mt-10'>
        <section class="text-gray-600 body-font">
        <div class="container px-5 pt-8 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="crimeNumber" class="leading-7 text-sm text-gray-600">Crime Number</label>
                <input type="text" id="crimeNumber" name="crimeNumber" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="date-of-seziure" class="leading-7 text-sm text-gray-600">Date of Seziure</label>
                <input type="date" id="date-of-seziure" name="date-of-seziure" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full mx-5">
                <label for="police-station" class="leading-7 text-sm text-gray-600">Police Station</label>
                <input type="text" id="police-station" name="police-station" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="act" class="leading-7 text-sm text-gray-600">Section of Act</label>
                <input type="text" id="act" name="act" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>
        <div class="container px-5 pt-4 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="sectionOfLaw" class="leading-7 text-sm text-gray-600">Section of law</label>
                <input type="text" id="sectionOfLaw" name="sectionOfLaw" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="categoryOfProperty" class="leading-7 text-sm text-gray-600">Category of Property</label>
                <input type="text" id="categoryOfProperty" name="categoryOfProperty" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full mx-5">
                <label for="status" class="leading-7 text-sm text-gray-600">Status</label>
                <input type="text" id="status" name="status" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
                <label for="casesBetweenDateRange" class="leading-7 text-sm text-gray-600">Cases Between Date Range</label>
                <input type="text" id="casesBetweenDateRange" name="casesBetweenDateRange" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
        </div>
        <div class="container px-5 pt-4 mx-auto">
            <div class="flex lg:w-full w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full mx-5">
                <label for="range" class="leading-7 text-sm text-gray-600">Range</label>
                <input type="text" id="range" name="range" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative flex-grow w-full">
            <button type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
            </div>

           </div>
           </div>
        </section>
    </div>
  )
}

export default ManageEntDetails