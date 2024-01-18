import ControlBarButton from "../utilities/ControlBarButton";
import ControlBarContent from "../Data/ControlBarData";

function ControlBar() {
  return (
    <div className=" w-full mobile:w-[7rem] px-[1rem] py-[3rem] items-center justify-between mobile:py-14 m-0 flex flex-row mobile:gap-[8%] h-[5rem] mobile:h-full mobile:flex-col overflow-hidden text-[var(--black)] shadow-lg bg-[var(--white)] ring-1 ring-[var(--gray)] z-[999] fixed bottom-0 mobile:static rounded-t-2xl mobile:rounded-l-3xl mobile:rounded-r-none ">
      {ControlBarContent.map((obj, idx) => (
        <ControlBarButton icon={obj.icon} key={idx} title={obj.title} />
      ))}
    </div>
  );
}

export default ControlBar;
