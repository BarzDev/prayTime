import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const TableComponent = ({ timePrayer }) => {
  return (
    <div className="overflow-auto" style={{ height: "33rem" }}>
      <Table>
        <TableHead>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>Fajr</TableHeadCell>
          <TableHeadCell>Dhuhr</TableHeadCell>
          <TableHeadCell>Asr</TableHeadCell>
          <TableHeadCell>Maghrib</TableHeadCell>
          <TableHeadCell>Isha</TableHeadCell>
        </TableHead>

        <TableBody className="divide-y">
          {timePrayer.map((time) => (
            <TableRow key={time.index} className=" border-gray-700 bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-white">
                {time.date_for}
              </TableCell>
              <TableCell className=""> {time.fajr}</TableCell>
              <TableCell> {time.dhuhr}</TableCell>
              <TableCell> {time.asr}</TableCell>
              <TableCell> {time.maghrib}</TableCell>
              <TableCell> {time.isha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
