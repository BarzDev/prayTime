const api = {
  method: "GET",
  url: "https://muslimsalat.p.rapidapi.com/tangerang.json",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPIKey,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPIHost,
  },
};

export default api;
