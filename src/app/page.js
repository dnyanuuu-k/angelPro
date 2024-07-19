"use client";
import * as React from "react";
import { ChakraProvider, Divider } from "@chakra-ui/react";

import { useSession } from "next-auth/react";
import { Header } from "@/app/header";
import Footer from "@/app/footer";
import Features from "@/app/features";
import Testimonials from "@/app/testimonials";
import Prices from "@/app/pricing";
import Contact from "@/app/contact";
import Sell from "@/app/sell";
import Home from "@/app/home";
import Admin from "@/app/admin";

function App() {
  const { data: session, status } = useSession();

  return (
    <ChakraProvider>
      <Header />
      {status === "authenticated" ? <Sell /> : <Home />}
      {session?.user?.email === "onlineangelpro@gmail.com" ? <Admin /> : null}
      <Divider />
      <Prices />
      <Divider />
      <Features />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
