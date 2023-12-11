import React from 'react'

const ManageEntDetailsData = () => {
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
                    Crime Number
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of Seziure
                </th>
                <th scope="col" class="px-6 py-3">
                    Police Station
                </th>
                <th scope="col" class="px-6 py-3">
                    Act of Law
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
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
                    2023-05-04
                </td>
                <td class="px-6 py-4">
                    Simdega PS
                </td>
                <td class="px-6 py-4">
                    Ancient Monuments and Arch Sites and Remains
                </td>
                <td class="px-6 py-4">
                    Draft
                </td>
                <td class="px-6 py-4">
                    <div className='flex gap-x-2'>
                        <div>
                        <button type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
                        </div>
                        <div>
                        <button type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
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