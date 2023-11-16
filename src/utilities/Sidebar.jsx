const SideBar = function ({ addStyle, sidebarContent, SidebarBtn }) {
  return (
    <div
      className={` items-center justify-between py-14 m-0 flex gap-[8%] h-full flex-col bg-[var(--deep-gray)] text-white w-full shadow-lg ${addStyle}`}
    >
      {sidebarContent.map((obj, idx) => (
        <SidebarBtn icon={obj.icon} text={obj.text} key={idx} />
      ))}
    </div>
  );
};

export default SideBar;
