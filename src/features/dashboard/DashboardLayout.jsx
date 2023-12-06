import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useSearchParams } from "react-router-dom";
import { useCabins } from "../cabins/useGetCabins";
import SalesChart from "./SalesChart";
import { DurationChart } from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const { isLoading: LoadingStays, confirmedStays } = useRecentStays();
  const [searchParams] = useSearchParams();
  const { cabins, isLoading: LoadingCabin } = useCabins();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  if (isLoading || LoadingStays || LoadingCabin) return <Spinner />;
  const numCabins = cabins.length;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        numCabins={numCabins}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
