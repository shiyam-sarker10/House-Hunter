import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const OwnerTable = () => {
    const localStore = localStorage.getItem("Current User")
    const currentData = JSON.parse(localStore)
    const [datas,setDatas] = useState([])
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await axiosPublic.get(
             `/newHomes?email=${currentData?.email}`
           );
           setDatas(response.data); // Assuming the data is in the 'data' property of the response
         } catch (error) {
           console.error("Error fetching data:", error);
         }
       };

       if (currentData?.email) {
         fetchData();
       }
     }, [currentData, axiosPublic]);
    
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-[#8EA7E9]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Apartment Name
              </th>
              <th scope="col" className="px-6 py-3">
                Rent
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {datas?.map((data, idx) => (
              <tr
                key={idx}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="px-6 py-4">{data.rent}</td>
                <td className="px-6 py-4">{data.city}</td>
                <td className="px-6 py-4">{data.status}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default OwnerTable;