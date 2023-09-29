"use client";

import { Coin } from "@/components/Coins/CoinList";
import { createContext, useContext, useState } from "react";

export interface CoinData {
  time: string;
  priceUsd: string;
}

interface FavouriteCoinContextValue {
  coins: Coin[];
  addCoin: (coin: any) => void;
  removeCoin: (coinName: string) => void;
  isFavourite: (coinName: string) => boolean;
}

const FavouriteCoinContext = createContext<FavouriteCoinContextValue>({
  coins: [],
  addCoin: () => {},
  removeCoin: () => {},
  isFavourite: () => false,
});

export const useFavouriteCoin = () => useContext(FavouriteCoinContext);

const FavouriteCoinProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [coins, setCoins] = useState<any[]>([]);

  const addCoin = (coin: any) => {
    if (coins.find((item) => item.id === coin.id)) return;
    setCoins([...coins, coin]);
  };

  const removeCoin = (coinName: string) => {
    setCoins(coins.filter((coin) => coin.id !== coinName));
  };

  const isFavourite = (coinName: string) => {
    return coins.some((coin) => coin.id === coinName);
  };

  return (
    <FavouriteCoinContext.Provider
      value={{ coins, addCoin, removeCoin, isFavourite }}
    >
      {children}
    </FavouriteCoinContext.Provider>
  );
};

export default FavouriteCoinProvider;
