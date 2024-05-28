"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import "../globals.css";
import Skeleton from "../components/skeleton";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

// const TARGET_COINS = ["btc", "eth"];

export default function GetCoin() {
  const [coins, setCoins] = useState<Coin[]>([]);

  const fetchData = () => {
    axios
      .get("https://crypto-api-gecko.vercel.app/api/coins")
      .then((response) => {
        const filteredCoins = response.data;
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
    <div className="container flex flex-col lg:grid lg:grid-cols-4 gap-4 px-8 w-full">
      {coins.length === 0 ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        coins.map((item) => (
          <div key={item.id} className="coin">
            {item.price_change_percentage_24h > 0 ? (
              <div className="border-2 h-28 border-green-500 rounded-lg flex items-center p-4" data-aos>
                <Image
                  className="w-8 h-8 rounded-full object-cover hover:scale-105 hover:rotate-6 hover:duration-300"
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  width={32}
                  height={32}
                  priority
                />
                <div className="pl-2">
                  <Link
                    href={`https://id.tradingview.com/symbols/${item.name}USDT`}
                  >
                    <h2 className="text-[15pt] font-bold uppercase">
                      {item.symbol + "/"}
                      <span className="text-[8pt] capitalize text-gray-300">
                        {item.name}
                      </span>
                    </h2>
                    <p className="text-[12pt]">
                      ${item.current_price}
                      <span className="text-[10pt] text-green-400 px-[6px]">
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </p>
                  </Link>
                </div>
                <Image
                  className="ml-auto animate-pulse hover:animate-none"
                  src="/Images/pump.svg"
                  alt="arrow-up"
                  width={70}
                  height={70}
                  draggable={false}
                />
              </div>
            ) : (
              <div className="border-2 h-28 border-red-500 rounded-lg flex items-center p-4">
                <Image
                  className="w-8 h-8 rounded-full object-cover hover:scale-105 hover:rotate-6 hover:duration-300"
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  width={32}
                  height={32}
                  priority
                />
                <div className="pl-2">
                  <Link
                    href={`https://id.tradingview.com/symbols/${item.symbol}USDT`}
                  >
                    <h2 className="text-[15pt] font-bold uppercase">
                      {item.symbol + "/"}
                      <span className="text-[8pt] capitalize text-gray-300">
                        {item.name}
                      </span>
                    </h2>
                    <p className="text-[12pt]">
                      ${item.current_price}
                      <span className="text-[10pt] text-red-500 px-[6px]">
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </p>
                  </Link>
                </div>
                <Image
                  className="ml-auto animate-pulse hover:animate-none"
                  src="/Images/dump.svg"
                  alt="arrow-up"
                  width={70}
                  height={70}
                  draggable={false}
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

// 'use client'
// import React from 'react'
// import axios from 'axios';

// let coinData = [];

// const page = () => {
//     const fetchCoinData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/coins', {
//           params: {
//             vs_currency: 'usd',
//             order: 'market_cap_desc',
//           },
//         });
//         coinData = response.data;
//         console.log('Data fetched successfully'+response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     // setInterval(fetchCoinData, 30000);
// fetchCoinData(); // Initial fetch
//     return (
//       <></>
//   )
// }

// export default page
