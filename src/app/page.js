"use client";

import CardComponent from "@/component/Card";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function Home() {
  const [prayer, setPrayer] = useState([]);
  const [time, setTime] = useState("");

  const options = {
    method: "GET",
    url: "https://muslimsalat.p.rapidapi.com/tangerang.json",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPIKey,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPIHost,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
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
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-3 bg-emerald-400">
      <CardComponent prayer={prayer} time={time} />
    </main>
  );
}
