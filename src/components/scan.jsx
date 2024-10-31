import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoTrendingUpSharp } from "react-icons/io5"
import GradientAreaChart from "./chart"

const data = [
  {
    number: "#1",
    avatar: "/images/gain-1.png",
    name: "TORO",
    currncy: "/SOL",
    value_1: "$0.001043",
    value_2: "41,227.66%",
  },
  {
    number: "#2",
    avatar: "/images/gain-2.png",
    name: "MSFT",
    currncy: "/WETH",
    value_1: "$0.001043",
    value_2: "5,158.04%",
  },
  {
    number: "#3",
    avatar: "/images/gain-3.png",
    name: "BRICS",
    currncy: "/SOL",
    value_1: "$0.001043",
    value_2: "3,580.08%",
  },
  {
    number: "#4",
    avatar: "/images/gain-4.png",
    name: "RUNNER",
    currncy: "/WETH",
    value_1: "$0.001043",
    value_2: "3,254.86%",
  },
]

const portfolio_data = [
  {
    avatar: "/images/bit-icon.png",
    name: "Bitcoin",
    currncy: "BTC",
    value: "1.25%",
    icon: <IoTrendingUpSharp />,
    price_text: "Price",
    price: "$7,230.80",
    holding_text: "Holding",
    holding: "$7,230.80",
  },

  {
    avatar: "/images/eth-icon.png",
    name: "Ethereum",
    currncy: "ETH",
    value: "3.05%",
    icon: <IoTrendingUpSharp />,
    price_text: "Price",
    price: "$7,230.80",
    holding_text: "Holding",
    holding: "$7,230.80",
  },
  {
    avatar: "/images/ava-icon.png",
    name: "Avalanche",
    currncy: "AVAX",
    value: "1.70%",
    icon: <IoTrendingUpSharp />,
    price_text: "Price",
    price: "$7,230.80",
    holding_text: "Holding",
    holding: "$7,230.80",
  },
]

export default function Scan() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeButton, setActiveButton] = useState("scan")
  const [NewsCalls, setNewsCalls] = useState("news")
  const [gainLoser, setGainLoser] = useState("gainers")
  const [portfolioWishlist, setPortfolioWishlist] = useState("portfolio")

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // bg-primary_main font-semibold

  return (
    <div className="space-y-3">
      <div className="px-[1vw] py-2 bg-[#FFFFFF0F] rounded-2xl flex items-center gap-3">
        <button
          className={`w-full px-2 py-[1vw] rounded-xl ${
            activeButton === "enter" ? "bg-primary_main font-semibold" : ""
          }`}
          onClick={() => setActiveButton("enter")}
        >
          Enter CA to scan
        </button>
        <button
          className={`w-full py-[1vw] rounded-xl ${
            activeButton === "scan" ? "bg-primary_main font-semibold" : ""
          }`}
          onClick={() => setActiveButton("scan")}
        >
          Scan
        </button>
      </div>
      <div className="px-[1vw] pt-[2vw] pb-[1vw] bg-[#FFFFFF0F]  rounded-2xl">
        <div className=" flex items-center justify-between gap-3  bg-[#FFFFFF0F]  rounded-2xl">
          <div
            className={`rounded-xl shadow-lg w-full ${
              NewsCalls === "call" ? "grid_border" : ""
            } `}
            onClick={() => setNewsCalls("call")}
          >
            <button
              className={`w-full py-[1vw] px-[3vw]  rounded-xl font-semibold ${
                NewsCalls === "call" ? "bg-[#312c2c]" : ""
              }`}
            >
              Calls
            </button>
          </div>
          <div
            className={`rounded-xl shadow-lg w-full ${
              NewsCalls === "news" ? "grid_border" : ""
            } `}
            onClick={() => setNewsCalls("news")}
          >
            <button
              className={`w-full py-[1vw] px-[3vw]  rounded-xl font-semibold ${
                NewsCalls === "news" ? "bg-[#312c2c]" : ""
              }`}
            >
              News
            </button>
          </div>
        </div>
        <div className="mt-[1.5vw]">
          <p className="text-[#EAEAEA] text-[1.3vw]">
            How likely are you to profit from trading memecoins?: TomDunleavy
            via Dune Data 
          </p>
          <button className=" mt-[1vw] flex items-center text-center mx-auto text-[#eaeaea71]">
            see more <IoIosArrowDown />
          </button>
        </div>
      </div>
      {/* gain section  */}
      <div className="px-[1vw] pt-[2vw] pb-[1vw] bg-[#FFFFFF0F] rounded-2xl">
        <div className=" flex items-center justify-between gap-3  bg-[#FFFFFF0F] rounded-2xl">
          <div
            className={`rounded-xl shadow-lg w-full ${
              gainLoser === "gainers" ? "grid_border" : ""
            } `}
            onClick={() => setGainLoser("gainers")}
          >
            <button
              className={`w-full py-[1vw] px-[3vw]  rounded-xl font-semibold ${
                gainLoser === "gainers" ? "bg-[#312c2c]" : ""
              }`}
            >
              Gainers
            </button>
          </div>
          <div
            className={`rounded-xl shadow-lg w-full ${
              gainLoser === "losers" ? "grid_border" : ""
            } `}
            onClick={() => setGainLoser("losers")}
          >
            <button
              className={`w-full py-[1vw] px-[3vw]  rounded-xl font-semibold ${
                gainLoser === "losers" ? "bg-[#312c2c]" : ""
              }`}
            >
              Losers
            </button>
          </div>
        </div>
        {data.map((item, idx) => (
          <div
            className="mt-[1.5vw] flex items-center justify-between text-[0.8vw]"
            key={idx}
          >
            <div className="flex items-center gap-1">
              <span className="block w-5 text-sm  text-center h-5 rounded-md font-bold text-black bg-primary_main">
                {item.number}
              </span>
              <img src={item.avatar} alt={item.name} className="w-6" />
              <h2 className="text-bold">
                {item.name}{" "}
                <span className="text-[0.8vw] font-normal text-primary_2">
                  {item.currncy}
                </span>
              </h2>
            </div>
            <p className="text-green text-[0.9vw]">{item.value_1}</p>
            <p className="text-green text-[0.9vw]">{item.value_2}</p>
          </div>
        ))}
        <button className=" mt-[1vw] flex items-center text-center mx-auto text-[#eaeaea71]">
          see more <IoIosArrowDown />
        </button>
      </div>
      {/* portfolio section  */}
      <div className="px-[1vw] pt-[2vw] pb-[1vw] bg-[#FFFFFF0F]  rounded-2xl">
        <div className=" flex items-center justify-between gap-3  bg-[#FFFFFF0F] rounded-2xl">
          <div
            className={`rounded-xl shadow-lg w-full ${
              portfolioWishlist === "portfolio" ? "grid_border" : ""
            } `}
            onClick={() => setPortfolioWishlist("portfolio")}
          >
            <button
              className={`w-full py-[1vw] px-[1vw]  rounded-xl font-semibold ${
                portfolioWishlist === "portfolio" ? "bg-[#312c2c]" : ""
              }`}
            >
              Portfolio
            </button>
          </div>
          <div
            className={`rounded-xl shadow-lg w-full ${
              portfolioWishlist === "watchlist" ? "grid_border" : ""
            } `}
            onClick={() => setPortfolioWishlist("watchlist")}
          >
            <button
              className={`w-full py-[1vw] px-[1vw]  rounded-xl font-semibold ${
                portfolioWishlist === "watchlist" ? "bg-[#312c2c]" : ""
              }`}
            >
              Watchlist
            </button>
          </div>
        </div>
        {portfolio_data.map((item, idx) => (
          <div
            onClick={() => handleClick(idx)}
            key={idx}
            className={`${
              openIndex === idx
                ? "bg-[#312c2c] p-[1vw] transition-all duration-150"
                : ""
            } rounded-xl cursor-pointer mt-[1.2vw] `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-7 h-7 rounded-full"
                />
                <h2 className="text-bold text-[1.3vw]">
                  {item.name}{" "}
                  <span className="text-[0.9vw] font-normal text-primary_2">
                    {item.currncy}
                  </span>
                </h2>
              </div>
              <p className="text-green text-[1.1vw] flex items-center gap-1">
                {item.value} {item.icon}{" "}
              </p>
            </div>
            {openIndex === idx && (
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-[#777777] text-[0.9vw] font-medium">
                    {item.price_text}
                  </p>
                  <p className="text-[1.1vw] font-semibold">{item.price}</p>
                </div>
                <div>
                  <p className="text-[#777777] text-[0.9vw] font-medium">
                    {item.holding_text}
                  </p>
                  <p className="text-[1.1vw] font-semibold">{item.holding}</p>
                </div>
                <div>
                  <img src="/images/chart-2.png" alt="" className="w-[5vw]" />
                </div>
              </div>
            )}
          </div>
        ))}

        <button className=" mt-[1vw] flex items-center text-center mx-auto text-[#eaeaea71]">
          see more <IoIosArrowDown />
        </button>
      </div>
    </div>
  )
}
