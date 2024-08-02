"use client";

import Home from "@/pages/Home";
import WelcomePage from "@/pages/WelcomePage";
import { useState } from "react";

export default function ProtectedHome() {
  const [user, setUser] = useState<boolean>(false);

  //   useEffect(() => {
  //     const checkUser = async () => {
  //       try {
  //         const res = axios.get("");
  //           if (res.ok) {
  //             setIsAuth(true)
  //         }
  //       } catch (error) {}
  //     };
  //   }, []);

  return (
    <section className=" flex-1 flex">
      <div className="my-container">{user ? <Home /> : <WelcomePage />}</div>
    </section>
  );
}
