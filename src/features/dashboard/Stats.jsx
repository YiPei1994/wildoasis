import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  // 1. number of bookings
  const numBookings = bookings.length;

  // 2.

  const totalSales = bookings.reduce(
    (total, booking) => total + booking.totalPrice,
    0
  );

  // 3. check ins

  const checkins = confirmedStays.length;

  // 4. occupency rate, number of checkin nights / all available nights

  const occupation = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const allNights = numDays * numCabins;

  const occupationRate = occupation / allNights;
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupency rates"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupationRate * 100) + " %"}
      />
    </>
  );
}

export default Stats;
