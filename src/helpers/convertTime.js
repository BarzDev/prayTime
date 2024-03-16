export default function ConvertTo24Hour(time12h) {
  // Pisahkan jam dan menit
  var [time, period] = time12h.split(" ");

  // Pisahkan jam dan menit
  var [hour, minute] = time.split(":");

  // Ubah jam dan menit ke dalam angka
  hour = parseInt(hour, 10);
  minute = parseInt(minute, 10);

  // Periksa apakah waktu adalah PM dan bukan 12 malam
  if (period.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  }

  // Periksa apakah waktu adalah AM dan 12 malam
  if (period.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  // Format jam dan menit ke dalam format 24 jam
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  // Gabungkan kembali jam dan menit
  return `${hour}:${minute}`;
}
