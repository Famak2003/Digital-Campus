function ControlBarButton({ icon, title, sideways, disableEffect }) {
  return (
    <div className=" border-[var(--gray)] lmobile:border-b-2 ">
      <button
        className={` ${
          sideways ? "flex flex-row-reverse" : "flex flex-col-reverse "
        } items-center rounded-md justify-center bg-[var(--white)] active:bg-green-600 sm:hover:bg-green-600 transition-all
       duration-150 ease-linear ${
         disableEffect ? "" : "hover:w-[5rem] hover:h-[5rem]"
       } hover:rounded-xl h-[5rem] w-[5rem]`}
      >
        <p className=" whitespace-nowrap ">{title}</p>
        <span className=" w-full h-4/6">
          <img
            className=" object-contain scale-75 h-full w-full"
            src={icon}
            alt={title}
          />
        </span>
      </button>
    </div>
  );
}

export default ControlBarButton;
