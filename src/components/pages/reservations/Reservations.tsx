import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import UpcomingReservations from "./UpcomingReservations";
import { Typography } from "@mui/material";

interface CustomDateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const Revervations = () => {
  const [state, setState] = useState<CustomDateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    if (selection.startDate && selection.endDate && selection.key) {
      setState([
        {
          startDate: selection.startDate,
          endDate: selection.endDate,
          key: selection.key,
        },
      ]);
    }
  };

  return (
    <>
      <div className="reservations-wrapper">
        <Typography variant="h6">Todays Reservations</Typography>
        <div className="date-range-wrapper">
          <DateRangePicker
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>
        <UpcomingReservations />
      </div>
    </>
  );
};

export default Revervations;
