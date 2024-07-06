"use client";
import { LayoutDashboard, StickyNote, Folder } from "lucide-react";
import DialogKartuGolongan from "./DialogKartuGolongan";
import DialogLabelDarah from "./DialogLabelDarah";
import DialogPemusnahan from "./DialogPemusnahan";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SideBarMenu = () => {
  const pathName = usePathname();
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    const ListMenu = [
      {
        name: "Dashboard",
        icon: <LayoutDashboard />,
        path: "/",
        isActive: pathName ? true : false,
      },
      {
        action: <DialogKartuGolongan />,
        path: "",
      },
      {
        name: "Blanko CrossMatch",
        icon: <StickyNote />,
        path: "/blanko-darah",
        isActive: pathName ? true : false,
      },
      {
        action: <DialogLabelDarah />,
        path: "",
      },
      {
        name: "Data Pendonor",
        icon: <Folder />,
        path: "/data-pendonor",
        isActive: pathName == pathName ? true : false,
      },
      {
        action: <DialogPemusnahan />,
        path: "",
      },
    ];

    setListMenu(ListMenu);
  }, [pathName]);

  return (
    <>
      <div className="mt-5">
        {listMenu.map((list, idx) => {
          return (
            <Link
              href={list.path}
              className={`mt-5 hover:text-black ${list.action ? "" : "p-4"} block rounded-lg transition-colors duration-300 ${list.isActive ? "text-black " : "text-white"}`}
              key={idx}
            >
              {list.action ? (
                list.action
              ) : (
                <div
                  className={`flex gap-2 font-bold text-md hover:text-black`}
                >
                  <span>{list.icon}</span>
                  <span>{list.name}</span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SideBarMenu;
