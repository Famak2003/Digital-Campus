function Button({ icon, text, sideways, disableEffect }) {
  return (
    <div className="">
      <button
        className={` ${
          sideways ? "flex flex-row-reverse" : "flex flex-col-reverse "
        } items-center justify-center hover:bg-green-600 transition-all
       duration-200 ease-linear ${
         disableEffect ? "" : "hover:w-24 hover:h-24"
       } hover:rounded-xl h-[5rem] w-[5rem]`}
      >
        <p className=" text-gray-200">{text}</p>
        <span className=" w-full h-4/6">
          <img
            className=" object-contain h-full w-full"
            src={icon}
            alt={text}
          />
        </span>
      </button>
    </div>
  );
}

export default Button;
