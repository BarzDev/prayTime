import ConvertTo24Hour from "@/helpers/convertTime";
import { Card } from "flowbite-react";
import moment from "moment";
import Image from "next/image";

const CardComponent = ({ prayer, time }) => {
  if (!prayer || Object.keys(prayer).length === 0) {
    return null;
  }

  const itemsArray = Object.values(prayer.items);

  const fajrTime = ConvertTo24Hour(itemsArray[0].fajr);
  const dhuhrTime = ConvertTo24Hour(itemsArray[0].dhuhr);
  const asrTime = ConvertTo24Hour(itemsArray[0].asr);
  const maghribTime = ConvertTo24Hour(itemsArray[0].maghrib);
  const ishaTime = ConvertTo24Hour(itemsArray[0].isha);

  const dateNow = moment().format("LL");

  return (
    <Card
      className="max-w-sm relative overflow-hidden"
      renderImage={() => (
        <div className="relative flex justify-center items-center ">
          <Image
            width={400}
            height={400}
            src="/bg.jpg"
            alt="image 1"
            style={{
              objectFit: "contain",
              transform: "none",
            }}
          />
          <div className="absolute top-0 right-0 p-5">
            <h3 className="text-4xl font-bold text-white">
              {prayer.city}, {prayer.state}
            </h3>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white ">{time}</h2>
          </div>
        </div>
      )}
    >
      <div className="flex">
        <h5 className="text-xl font-bold tracking-tight text-blue-700 dark:text-white">
          {dateNow}
        </h5>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col" style={{ marginRight: "1rem" }}>
          <p className="font-semibold text-gray-700 dark:text-gray-400 ">
            Fajr
          </p>
          <p className="font-semibold text-gray-700 dark:text-gray-400 ">
            Dhuhr
          </p>
          <p className="font-semibold text-gray-700 dark:text-gray-400 ">Asr</p>
          <p className="font-semibold text-gray-700 dark:text-gray-400 ">
            Maghrib
          </p>
          <p className="font-semibold text-gray-700 dark:text-gray-400 ">
            Isha
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            {fajrTime}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            {dhuhrTime}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            {asrTime}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            {maghribTime}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            {ishaTime}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
