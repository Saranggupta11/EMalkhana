import React from "react";
import Image from "next/image";
// import { PieChart } from '@mui/x-charts/PieChart';
import { signOut } from "next-auth/react";
export default function Homepage() {
  return (
    <div>
      <div onClick={signOut} className="hover:cursor-pointer bg-red-600 w-28 ">SignOut</div>
      <div className=" mt-16 flex justify-center">
        <div className="w-64 h-36 bg-blue-600 mx-10 text-white flex-col text-2xl text-center p-10">
          <div className="mb-2">Total Case</div>
          <div>8</div>
        </div>
        <div className="w-64 h-36 bg-green-600 mx-10 text-white flex-col text-2xl text-center p-10">
          <div className="mb-2">Disposed Case</div>
          <div>2</div>
        </div>
        <div className="w-64 h-36 bg-red-600 mx-10 text-white flex-col text-2xl text-center p-10">
          <div className="mb-2">Pending Case</div>
          <div>6</div>
        </div>
      </div>

      {/* <div className='my-20 text-center'>
            <div className='text-2xl font-semibold mb-7'>Total Case(8)</div>
            <div className='flex justify-center w-full'>
        
            <PieChart
            series={[
                {
                data: [
                    { id: 0, value: 2, color:"green", label: 'Disposed Case' },
                    { id: 1, value: 15, color:"red", label: 'Pending Case' },
                ],
                },
            ]}
            width={400}
            height={200}
        />

        </div> */}

      {/* </div> */}
    </div>
  );
}
