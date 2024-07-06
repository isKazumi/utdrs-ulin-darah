"use client";
import Header from "../Header";
import BelankoTable from "./blankoTable";
import InputBlanko from "./InputBlanko";

const BlankoDarah = () => {
  return (
    <div>
      <Header />
      <div className="overflow-x-auto text-black text-sm mt-5">
        <InputBlanko />
        <BelankoTable />
      </div>
    </div>
  );
};

export default BlankoDarah;
