import CoinList from "@/components/Coins/CoinList";
import FavouriteModal from "@/components/Coins/FavouriteModal";

const fetcher = async () => {
  const res = await fetch("https://api.coincap.io/v2/assets");

  return res.json();
};
const DashboardPage = async () => {
  const { data } = await fetcher();

  return (
    <div className="p-4">
      <div className="w-full flex justify-between flex-wrap mb-5">
        <h1 className="text-3xl">Las mejores criptomonedas</h1>
        <FavouriteModal />
      </div>
      <CoinList data={data} />
    </div>
  );
};

export default DashboardPage;
