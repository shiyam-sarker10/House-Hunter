import  { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Card9 from '../Card/Card';


const SearchCard = () => {
    const [datas,setDatas] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{ 
        axiosPublic
          .get("allHomes")
          .then((result) => setDatas(result.data))
          .catch((err) => console.log(err));
    },[])
      const [selectedOption, setSelectedOption] = useState("");
     const handleSelectChange = (e) => {
       setSelectedOption(e.target.value);
     };
      const [rangeValue, setRangeValue] = useState(50);

      const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };
      const handleFilter = (e) => {
        e.preventDefault()

        const search  = e.target.search.value
        const roomSize = e.target.roomSize.value;
        const bedrooms = e.target.bedrooms.value;
        const bathrooms = e.target.bathrooms.value;
        const city = e.target.city.value;
        const status = selectedOption;
        const rentRange = rangeValue;

        const info = {
          search,
          roomSize,
          bedrooms,
          bathrooms,
          city,
          status,
          rentRange,
        
        };

        console.log(info)
        axiosPublic.get(`/newHome`)


      }
    return (
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-[30%] sticky top-0 ">
          <form onSubmit={handleFilter} className="space-y-4">
            <input
              className="shadow-md w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              placeholder="Search"
              name="search"
            />
            <input
              className="shadow-md w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              placeholder="XY Square feet"
              name="roomSize"
            />
            <input
              className="shadow-md w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              placeholder="Total Bedrooms"
              name="bedrooms"
            />
            <input
              className="shadow-md w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              placeholder="Total BathRooms"
              name="bathrooms"
            />
            <input
              className="shadow-md w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              placeholder="City name"
              name="city"
            />
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="shadow-md w-[80%] md:w-[60%] py-2 px-6 rounded-lg appearance-auto bg-white  focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              name="cars"
              id="cars"
              required
            >
              <option className="py-2 rounded text-gray-400" value="">
                Choose a status
              </option>
              <option className="py-2 rounded text-gray-400" value="Available">
                Available
              </option>
              <option className="py-2 rounded text-gray-400" value="Booked">
                Booked
              </option>
            </select>
            <div className="flex flex-col gap-y-4">
              <label htmlFor="rangeSlider">Rent per month:</label>
              <input
                className="w-[80%] md:w-[60%] focus:outline-none "
                type="range"
                id="rangeSlider"
                name="rangeSlider"
                min="0"
                max="100000"
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <p className="py-4 text-center bg-white w-[80%] md:w-[60%] tracking-wider font-medium rounded-lg">
                {rangeValue}
              </p>
            </div>
            <input
              className="py-4 text-center bg-[#8EA7E9] text-white w-[80%] md:w-[60%] tracking-wider font-medium rounded-lg"
              type="submit"
              value="Filter"
            />
          </form>
        </div>
        <div className="w-full md:w-[70%]">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {datas?.map((data, idx) => (
              <Card9 key={idx} data={data}></Card9>
            ))}
          </div>
        </div>
      </div>
    );
};

export default SearchCard;