const Card9 = ({data}) => {
  return (
    <div className="max-[350px] md:w-[350px] bg-[#4F64B3]/10 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
      {/* Card Image */}
      <img
        className="w-[350px] h-[190px] bg-gray-400 rounded-2xl"
        src={data.image}
        alt=""
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="text-[#3b4d91] font-medium md:text-xl sm:text-lg ">
          {data?.name}
        </h2>
        {/* rating  */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#3b4d91"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
      {/* Price and action button */}
      <div className="mt-5 flex justify-between items-center font-medium">
        <h2 className="md:text-xl text-[#3b4d91]">Rent : ${data?.rent}</h2>
        <button className="bg-[#4F64B3] text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
          Book Now
        </button>
      </div>
    </div>
  );
};
export default Card9;
