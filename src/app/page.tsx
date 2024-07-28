import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <TopCards/>
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart/>
        <RecentOrders/>
      </div>
    </>
  );
}
