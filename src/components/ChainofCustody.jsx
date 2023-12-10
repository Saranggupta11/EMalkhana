import React from 'react'


const ChainofCustody = () => {
  return (
    <div className='mt-10 w-full'>
    <div class="shadow-md sm:rounded-lg">
    <table class="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Purpose
                </th>
                <th scope="col" class="px-6 py-3">
                    Investigating Officer
                </th>
                <th scope="col" class="px-6 py-3">
                   View
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2023-05-117
                </th>
                <td class="px-6 py-4">
                COURT
                </td>
                <td class="px-6 py-4">
                    2023-05-04
                </td>
                <td class="px-6 py-4">
                Sri Ajay Kumar Singh
                </td>
                <td class="px-6 py-4">
                    <div className='flex gap-x-2'>
                        <button type="submit" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm px-3 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
                    </div>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
</div>
  )
}

export default ChainofCustody