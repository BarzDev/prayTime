"use client";

import CardComponent from "@/component/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [prayer, setPrayer] = useState([]);

  const options = {
    method: "GET",
    url: "https://muslimsalat.p.rapidapi.com/london.json",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPIKey,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPIHost,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setPrayer(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardComponent prayer={prayer} />
    </main>
  );
}
