interface props {
  heading: string;
  subHeading: string;
  subHeading2: string;
}
function SessionHeading({ heading, subHeading, subHeading2 }: props) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center text-center ">

      <div className=" bg-gradient-to-l from-color15 h-[1px] "></div>
      <div className="p-4">
        <div className="flex justify-center">
          <div className="bg-gradient-to-l from-color11 to-color12 backdrop backdrop-blur-md ring-1 ring-gray-800  rounded-2xl  my-4 mx-auto justify-between py-1 px-4 uppercase">
            {heading}
          </div>
        </div>
        <h2 className="sm:text-4xl text-2xl text-white ">{subHeading} </h2>
        <h2 className="sm:text-4xl text-2xl mb-8">
          <span className="bg-gradient-to-r from-color14 via-color15 to-color16 bg-clip-text inline-block text-transparent">
            {subHeading2}
          </span>
        </h2>
      </div>
      <div className=" bg-gradient-to-r from-color15 h-[1px] "></div>
    </div>
  );
}

export default SessionHeading;
