import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const AddHome = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleAdd = (e) =>{
        e.preventDefault()
        const name = e.target.aName.value;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const bedrooms = e.target.bedrooms.value;
        const bathrooms = e.target.bathrooms.value;
        const roomSize = e.target.size.value;
        const image = e.target.image.value;
        const date = e.target.date.value;
        const rent = e.target.rent.value;
        const number = e.target.phoneNumber.value;
        const desc = e.target.desc.value;
        const status = "available";
        const email = user?.email;
        const OwnerName = user?.name



        const info = {
          name,
          address,
          city,
          bedrooms,
          bathrooms,
          roomSize,
          image,
          date,
          rent,
          number,
          desc,
          status,
          email,
          OwnerName,
        };
        console.log(info)

        axiosPublic
          .post("/newHomes", info)
          .then(() => toast.success("added home Successfully"))
          .catch(() => toast.error("Something went wrong"));



    }
    return (
      <div>
        <form
          onSubmit={handleAdd}
          className="flex flex-col md:grid md:grid-cols-2 gap-4 justify-center items-center"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Apartment Name
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="aName"
              placeholder="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Address
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="address"
              placeholder="address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              City
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="city"
              placeholder="city"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Bedrooms
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="bedrooms"
              placeholder="bedrooms"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Bathrooms
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="bathrooms"
              placeholder="bathrooms"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Size
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="size"
              placeholder="size"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Image
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              name="image"
              placeholder="image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Date
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="date"
              name="date"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Rent
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="number"
              name="rent"
              placeholder="rent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="px-2">
              Number
            </label>
            <input
              className="border border-[#8EA7E9]/50  py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="number"
              name="phoneNumber"
              placeholder="phone number"
            />
          </div>
          <div className="col-span-2 ">
            <label htmlFor="" className="px-2">
              Description
            </label>
            <textarea
              required
              id="des"
              rows={3}
              placeholder="All data to know renter....."
              className="p-2 w-full outline-none border rounded-md"
              name="desc"
            />
          </div>

          <input
            className="px-4 py-2 col-span-2 bg-[#8EA7E9] rounded-lg text-white font-medium"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    );
};

export default AddHome;