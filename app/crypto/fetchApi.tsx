"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const TARGET_COINS = ["btc", "eth"];

export default function GetCoin() {
  const [coins, setCoins] = useState<Coin[]>([]);

  const fetchData = () => {
    axios
      .get("https://crypto-api-gecko.vercel.app/api/coins")
      .then((response) => {
        // console.log("list coin", response);
        // Filter koin berdasarkan nama yang diinginkan
        const filteredCoins = response.data.filter((coin: Coin) =>
          TARGET_COINS.includes(coin.symbol)
        );
        setCoins(filteredCoins);
        // console.log("Data fetched successfully");
      })
      .catch((error) => {
        console.error("Failed to fetch data", error);
      });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="hidden lg:flex space-x-3 ">
        {coins.length === 0 ? (
          <p></p>
        ) : (
          coins.map((item) => (
            <div key={item.id} className="coin flex items-center space-x-1">
              <Image
                className="w-8 h-8 rounded-full object-cover"
                src={item.image}
                alt={item.name}
                draggable={false}
                width={32}
                height={32}
                priority
              />
              <div className="">
                <Link
                  href={`https://coinmarketcap.com/currencies/${item.name}`}
                >
                  <h2 className="text-[15pt] font-bold">{item.name}</h2>
                  <p className="text-[12pt] ">
                    ${item.current_price}
                    {item.price_change_percentage_24h > 0 ? (
                      <span className="text-[10pt] text-green-400 px-[6px]">
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="text-[10pt] text-red-500 px-[6px]">
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    )}
                  </p>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
