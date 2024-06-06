"use client";
import Image from "next/image";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useRef } from "react";

export default function Home() {
  const toggleSidebar = useRef(null);
  return (
    <main className="bg-base-200 w-full h-full drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={toggleSidebar} />
      <div className="drawer-content">
        <Header toggleSidebar={toggleSidebar}/>
      </div>
      <SideBar />
    </main>
  );
}
