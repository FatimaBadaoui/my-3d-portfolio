// using the () in the folder name will allow you to create a sub page
//and group all the components that are related to that page in one folder.
//This will make it easier to find and manage the components that are related to that page.
// the layout will be the main component that will be used in the sub pages.
"use client"
import { useEffect } from "react";
import Homebtn from "../components/Homebtn.jsx";

export default function SubPagesLayout({ children }) {
  // scroll to top of the page when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:p-16 lg:px-32 py-20 ">
      <Homebtn />
      {children}
    </main>
  );
}
