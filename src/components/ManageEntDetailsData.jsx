import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ManageEntDetailsData = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    mrNo: "",
    firNo: "",
    dateOfFir:"",
    dateOfSeizure:"",
    date:"",
    dateFrom: "",
    dateTo: "",
    dateOfSeizureTo:"",
    dateOfSeizureFrom:"",
    dateOfFirTo:"",
    dateOfFirFrom:"",
    psName: "",
    state: "",
    district: ""
  });
  const [useRangeSearch, setUseRangeSearch] = useState(false);
  const [entDetails, setEntDetails] = useState([]);
  
  const handleSearchParamsChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleRangeSearchParamsChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      let url = "/api/search?";
      const { mrNo, firNo, dateOfFir, dateOfSeizure, psName, date, state, district } = searchParams;
      if (mrNo) url += `mrNo=${mrNo}&`;
      if (firNo) url += `firNo=${firNo}&`;
      if (dateOfFir) url += `dateOfFir=${dateOfFir}&`;
      if (dateOfSeizure) url += `dateOfSeizure=${dateOfSeizure}&`; 
      if (psName) url += `psName=${psName}&`;
      if (date) url += `date=${date}&`;
      if (state) url += `state=${state}&`;
      if (district) url += `district=${district}&`;
      const response = await axios.get(url);
      setEntDetails(response.data.entries);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };
  

  const handleRangeSearch = async () => {
    try {
      let url = "/api/rangeSearch?";
      console.log(searchParams)
      const {
        dateOfFirFrom,
        dateOfFirTo,
        dateOfSeizureFrom, 
        dateOfSeizureTo,
        dateFrom, 
        dateTo,
        psName,
        district
      } = searchParams;

      if (psName) url += `psName=${psName}&`;
      if (district) url += `district=${district}&`;
      if (dateOfFirFrom && dateOfFirTo) url += `dateOfFirFrom=${dateOfFirFrom}&dateOfFirTo=${dateOfFirTo}&`;
      if (dateOfSeizureFrom && dateOfSeizureTo) url += `dateOfSeizureFrom=${dateOfSeizureFrom}&dateOfSeizureTo=${dateOfSeizureTo}&`;
      if (dateFrom && dateTo) url += `dateFrom=${dateFrom}&dateOfFirTo=${dateTo}&`;
      console.log(url)
      const response = await axios.get(url);
      setEntDetails(response.data.entries);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleCheckboxChange = () => {
    setUseRangeSearch((prevValue) => !prevValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/malkhanaEntry");
        console.log("fsfesf",response)
        setEntDetails(response.data._cases);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = async (index) => {
    const mrNo = entDetails[index].mrNo;
    const res = await axios.get(`/api/malkhanaEntry/?mrNo=${mrNo}`);
    const data = await res.data._case;
    router.push({
      pathname: "/view",
      query: { mrEntry: JSON.stringify(data) },
    });
  };

  const handleOpen = () => {
    router.push("/add-property");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const [dateInputType, setDateInputType] = useState({
    dateOfFir: "text",
    dateOfSeizure: "text",
    date: "text",
    dateOfFirFrom: "text",
    dateOfFirTo: "text",
    dateOfSeizureFrom: "text",
    dateOfSeizureTo: "text",
    dateFrom: "text",
    dateTo: "text"
  });

  const handleFocus = (inputName) => {
    setDateInputType((prevType) => ({
      ...prevType,
      [inputName]: "date"
    }));
  };

  const handleBlur = (inputName) => {
    setDateInputType((prevType) => ({
      ...prevType,
      [inputName]: "text"
    }));
  };


  return (
    <div className="mt-5">
      <div>
        <label>
          <input
            type="checkbox"
            checked={useRangeSearch}
            onChange={handleCheckboxChange}
          />
          Use Range Search
        </label>
      </div>

      <div className="flex justify-between space-x-4">
  <div className="flex space-x-4">
  {!useRangeSearch && (
          <>
            <div className="flex space-x-4">
              <input
                type="text"
                name="mrNo"
                value={searchParams.mrNo}
                onChange={handleSearchParamsChange}
                placeholder="Search by MR No"
                className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="firNo"
                value={searchParams.firNo}
                onChange={handleSearchParamsChange}
                placeholder="Search by FIR No"
                className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </>
        )}
        <input
          type="text"
          name="psName"
          value={searchParams.psName}
          onChange={useRangeSearch ? handleRangeSearchParamsChange : handleSearchParamsChange}
          placeholder="Search by PS Name"
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
        />
        {!useRangeSearch && (
          <>
            <input
              type="text"
              name="state"
              value={searchParams.state}
              onChange={handleSearchParamsChange}
              placeholder="Search by State"
              className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
            />
          </>
        )}
        <input
          type="text"
          name="district"
          value={searchParams.district}
          onChange={useRangeSearch ? handleRangeSearchParamsChange : handleSearchParamsChange}
          placeholder="Search by District"
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
        />
        {!useRangeSearch && (
          <>
            <div className="flex space-x-4">
       
        <input
          type={dateInputType.dateOfFir}
          name="dateOfFir"
          value={searchParams.dateOfFir}
          onChange={handleSearchParamsChange}
          onFocus={() => handleFocus("dateOfFir")}
          onBlur={() => handleBlur("dateOfFir")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Select Date of FIR"
        />
      </div>

      <div className="flex space-x-4">
        
        <input
          type={dateInputType.dateOfSeizure}
          name="dateOfSeizure"
          value={searchParams.dateOfSeizure}
          onChange={handleSearchParamsChange}
          onFocus={() => handleFocus("dateOfSeizure")}
          onBlur={() => handleBlur("dateOfSeizure")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Select Date of Seizure"
        />
      </div>

      <div className="flex space-x-4">
        
        <input
          type={dateInputType.date}
          name="date"
          value={searchParams.date}
          onChange={handleSearchParamsChange}
          onFocus={() => handleFocus("date")}
          onBlur={() => handleBlur("date")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Select Date"
        />
      </div>

          </>
        )}
        {useRangeSearch && (
          <>
            <div className="flex space-x-4">
       
        <input
          type={dateInputType.dateOfFirFrom}
          name="dateOfFirFrom"
          value={searchParams.dateOfFirFrom}
          onChange={handleRangeSearchParamsChange}
          onFocus={() => handleFocus("dateOfFirFrom")}
          onBlur={() => handleBlur("dateOfFirFrom")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Fir From Date"
        />
      </div>

      <div className="flex space-x-4">
        
        <input
          type={dateInputType.dateOfFirTo}
          name="dateOfFirTo"
          value={searchParams.dateOfFirTo}
          onChange={handleRangeSearchParamsChange}
          onFocus={() => handleFocus("dateOfFirTo")}
          onBlur={() => handleBlur("dateOfFirTo")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Fir To Date"
        />
      </div>

      <div className="flex space-x-4">
       
        <input
          type={dateInputType.dateOfSeizureFrom}
          name="dateOfSeizureFrom"
          value={searchParams.dateOfSeizureFrom}
          onChange={handleRangeSearchParamsChange}
          onFocus={() => handleFocus("dateOfSeizureFrom")}
          onBlur={() => handleBlur("dateOfSeizureFrom")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Seizure From Date"
        />
      </div>

      <div className="flex space-x-4">
        
        <input
          type={dateInputType.dateOfSeizureTo}
          name="dateOfSeizureTo"
          value={searchParams.dateOfSeizureTo}
          onChange={handleRangeSearchParamsChange}
          onFocus={() => handleFocus("dateOfSeizureTo")}
          onBlur={() => handleBlur("dateOfSeizureTo")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="Seizure To Date"
        />
      </div>

      <div className="flex space-x-4">
       
        <input
          type={dateInputType.dateFrom}
          name="dateFrom"
          value={searchParams.dateFrom}
          onChange={handleRangeSearchParamsChange}
          onFocus={() => handleFocus("dateFrom")}
          onBlur={() => handleBlur("dateFrom")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="From Date"
        />
      </div>

      <div className="flex space-x-4">
       
        <input
          type={dateInputType.dateTo}
          name="dateTo"
          value={searchParams.dateTo}
          onChange={handleRangeSearchParamsChange}
          onFocus={() => handleFocus("dateTo")}
          onBlur={() => handleBlur("dateTo")}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-blue-500"
          placeholder="To Date"
        />
      </div>
          </>
        )}
  </div>
  <button
    onClick={useRangeSearch ? handleRangeSearch : handleSearch}
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Search
  </button>
</div>


      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black text-lg text-left rtl:text-right text-black">
          <thead className="text-sm text-white uppercase bg-gray-700 ">
            <tr>
              <th scope="col" className="px-8 py-4 border border-black">
                ID
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                MR No
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                FIR No
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                Date of FIR
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                Date of Seziure
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                PS Name
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                Date
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                State
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                District
              </th>
              <th scope="col" className="px-8 py-4 border border-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {entDetails && entDetails.map((detail, index) => (
              <tr
                key={index}
                className="bg-white border border-black hover:bg-green-200 transition-colors duration-300 ease-in-out"
              >
                <td className="px-8 py-2 border border-black">{index + 1}</td>
                <td className="px-8 py-2 border border-black">
                  {detail.mrNo}
                </td>
                <td className="px-8 py-2 border border-black">
                  {detail.firNo}
                </td>
                <td className="px-8 py-2 border border-black">
                  {formatDate(detail.dateOfFir)}
                </td>
                <td className="px-8 py-2 border border-black">
                  {formatDate(detail.dateOfSeizure)}
                </td>
                <td className="px-8 py-2 border border-black">
                  {detail.psName}
                </td>
                <td className="px-8 py-2 border border-black">
                  {formatDate(detail.date)} 
                </td>
                <td className="px-8 py-2 border border-black">
                  {detail.state}
                </td>
                <td className="px-8 py-2 border border-black">
                  {detail.district}
                </td>
                <td className="px-8 py-2 border border-black">
                  <div className="flex flex-wrap gap-2">
                    <div
                      onClick={() => {
                        handleViewDetails(index);
                      }}
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-base px-4 py-2 me-2 hover:cursor-pointer"
                    >
                      View
                    </div>

                    <div
                      onClick={handleOpen}
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-base px-4 py-2 me-2 hover:cursor-pointer"
                    >
                      Add Property
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEntDetailsData;
