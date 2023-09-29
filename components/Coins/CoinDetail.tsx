"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from "@nextui-org/react";

import { CoinData } from "./CoinList";

interface Props {
  coin: any;
  data: CoinData[] | undefined;
}

import { useFavouriteCoin } from "@/context/FavouriteCoinContext";

const CoinDetail: React.FC<Props> = ({ coin, data }) => {
  const { addCoin, removeCoin, isFavourite } = useFavouriteCoin();

  const onSelectItem = () => {
    if (isFavourite(coin.id)) {
      removeCoin(coin.id);
    } else {
      addCoin(coin);
    }
  };

  return (
    <>
      <p className="text-sm text-gray-500">{coin.symbol}</p>
      <p className="text-lg">${coin.priceUsd}</p>
      <Checkbox isSelected={isFavourite(coin.id)} onChange={onSelectItem}>
        {" "}
        Moneda favorita{" "}
      </Checkbox>
      <span className="checkmark"></span>
      <Table fullWidth>
        <TableHeader>
          <TableColumn>Hora de actualización</TableColumn>
          <TableColumn>Precio</TableColumn>
        </TableHeader>
        <TableBody
          items={data ? data : []}
          emptyContent={"No rows to display."}
        >
          {(item: CoinData) => (
            <TableRow key={item.time}>
              <TableCell>{new Date(item.time).toLocaleDateString()}</TableCell>
              <TableCell>${item.priceUsd} USD</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default CoinDetail;
