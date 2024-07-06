"use client";
import SideBar from "../SideBar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <main className="rounded-2xl bg-white p-4 m-4 w-full shadow-xl overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
