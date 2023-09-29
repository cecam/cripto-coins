"use client";

import { useFavouriteCoin } from "@/context/FavouriteCoinContext";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Coin } from "./CoinList";

const FavouriteCoins = () => {
  const { coins } = useFavouriteCoin();
  return (
    <div>
      <Table fullWidth>
        <TableHeader>
          <TableColumn>Simbolo</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Precio</TableColumn>
        </TableHeader>
        <TableBody
          items={coins}
          emptyContent={"No hay monedas favoritas de momento."}
        >
          {(item: Coin) => (
            <TableRow key={item.id}>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.priceUsd}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default FavouriteCoins;
