"use client";
import React, { useEffect } from "react";
import Navbar from "./(components)/Navbar";
import SideBar from "./(components)/SideBar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      // Thêm class "dark" vào thẻ html của trang web
    } else {
      document.documentElement.classList.remove("dark");
      // ngược lại
    }
  });
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Side Bar */}
      <SideBar />
      <main
        className={`dark:bg-drak-bg flex w-full flex-col bg-gray-50 ${isSideBarCollapsed ? "" : "md:pl-64"}`}
      >
        {/* Navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
