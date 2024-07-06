import SideBarMenu from "./SideBarMenu";
import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <div className="w-[380px] p-4">
        <div className="mx-auto">
          <Image
            src="/Logo-rstd.jpeg"
            alt="logo"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
        </div>
        <SideBarMenu />
      </div>
    </>
  );
};

export default SideBar;
