const CardSkeleton = () => {
  return (
    <>
      <div
        className="sm:w-smCard 
          bg-[#1f1f1f] rounded-lg shadow-md overflow-hidden animate-pulse 
            md:w-mdCard
            lg:w-lgCard"
      >
        <div className="h-[200px] bg-gray-700"></div>
        <div className="p-4 space-y-4">
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-600 rounded w-1/2"></div>
          <div className="h-4 bg-gray-600 rounded w-full"></div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
