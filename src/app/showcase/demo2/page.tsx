"use client";

import { JSX } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Menu from "./components/Menu";

export default function Project2Demo(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Table />
      <Menu />
    </div>
  );
}
