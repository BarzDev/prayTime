"use client";

import api from "@/api";
import CardComponent from "@/component/Card";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import TableComponent from "../Table";

const LayoutPages = () => {
  const [prayer, setPrayer] = useState([]);
  const [timePrayer, setTimePrayer] = useState([]);
  const [time, setTime] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.request(api);
      const resJson = await fetch("/data.json");
      const data = await resJson.json();
      setTimePrayer(data.time);
      setPrayer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      const updatedMoment = moment().format("LTS");
      setTime(updatedMoment);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center p-5">
        <h1 className="text-2xl font-bold text-white underline underline-offset-8 ">
          Jadwal Shalat Ramadhan 2024 / 1445 H
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:items-start items-center justify-center">
        <CardComponent prayer={prayer} time={time} />
        <TableComponent timePrayer={timePrayer} />
      </div>
    </>
  );
};

export default LayoutPages;
