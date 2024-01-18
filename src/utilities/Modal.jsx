// import IMG from "./../asset/controls.png";
import SEARCHICON from "./../asset/icons8-search-60.png";

function Modal({ content }) {
  return (
    <div className=" w-[30rem] mobile:w-[35rem] lmobile:w-[40rem] rounded-r-xl px-[2rem] py-[2rem] text-[var(--black)] h-[95vh] bg-black bg-opacity-10 justify-center items-center gap-3 flex flex-col fixed top-5 ">
      <h1 className=" Text24px font-semibold">{content.header}</h1>
      <p className=" Text16px">{content.description}</p>
      {content.header === "Search" && (
        <form className=" h-fit px-2 overflow-hidden rounded-2xl flex bg-[var(--white)] w-fit gap-4 justify-center items-center">
          <label htmlFor="searchBar" className=" h-full order-2">
            <img
              className=" h-[2rem] scale-90 object-contain"
              src={SEARCHICON}
              alt="search"
            />
          </label>
          <input
            className="px-3 h-[2rem] text-[var(--black)] focus:h-[2.5rem] outline-none duration-300 transition-all  "
            type="search"
            name="searchBar"
            placeholder="search"
          />
        </form>
      )}
      <figure className=" h-[25rem] w-fit rounded-2xl overflow-hidden">
        <img
          className=" w-full h-full object-cover"
          src={content.image}
          alt="img"
        />
      </figure>
      <ul className=" text-[var(--black)] flex flex-col gap-[.5rem] mt-[2rem]">
        {content.subLinks.map((obj, idx) => {
          return (
            <li key={idx} className=" hover:text-blue-800 Text14px">
              <a href={obj.link}>{obj.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Modal;
