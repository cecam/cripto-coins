"use client";
import { FC, useState, useEffect } from "react";
import Coin from "@/components/Coins/CoinDetail";

import { Accordion, AccordionItem } from "@nextui-org/react";

export interface Coin {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

export interface CoinData {
  priceUsd: string;
  time: number;
}

interface Props {
  data: Coin[];
}

const CoinList: FC<Props> = ({ data }) => {
  const [currentCoin, setCurrentCoin] = useState<Coin | null>(null);
  const [coinData, setCoinData] = useState<CoinData[] | undefined>(undefined);

  const onClickElement = (coin: Coin) => {
    setCurrentCoin(coin);
  };

  useEffect(() => {
    const fetchCoin = async () => {
      if (!currentCoin) return;

      try {
        const now = Date.now();
        const last24Hours = now - 24 * 60 * 60 * 1000;

        const res = await fetch(
          `https://api.coincap.io/v2/assets/${currentCoin.id}/history?interval=h1&start=${last24Hours}&end=${now}`
        );

        const { data } = await res.json();

        setCoinData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoin();
  }, [currentCoin]);

  return (
    <Accordion className="min-w-[380px]" variant="splitted">
      {data.map((coin) => (
        <AccordionItem
          key={coin.id}
          aria-label={coin.name}
          title={coin.name}
          onClick={() => onClickElement(coin)}
        >
          <Coin key={coin.id} coin={coin} data={coinData} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CoinList;
