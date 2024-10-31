import React from "react"
import { IoChevronDown } from "react-icons/io5"
import { Link } from "react-router-dom"

export default function ScanResults() {
  return (
    <div className="space-y-[3vw]">
      <div className="px-[1vw] py-[1.5vw] bg-[#FFFFFF0F] rounded-2xl space-y-[1.5vw]  ">
        <h2 className="text-center font-semibold">Scan Results</h2>

        <div className="flex items-center gap-[2vw] px-2">
          <div>
            <p className="text-[#666666] font-semibold">Market Cap</p>
            <p className="font-semibold">$318,180,846,869</p>
            <div className="text-[#11E326] flex items-center ">
              <span>icon</span>
              <p>12,5%</p>
            </div>
          </div>
          <div>
            <p className="text-[#666666] font-semibold">Token Price:</p>
            <p className="font-semibold">$0.000001</p>
          </div>
        </div>
        <div className="flex items-center gap-[1vw] px-2">
          <div className="flex items-center gap-2">
            <div>
              <img src="/images/buy-sell.png" alt="" className="w-[4vw]" />
            </div>
            <div>
              <p className="text-[#666666] text-[0.9vw] text-nowrap font-bold">
                Buy / Sell Tax
              </p>
              <p className="font-bold text-[1.3vw]">0%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src="/images/transfer.png" alt="" className="w-[4vw]" />
            </div>
            <div>
              <p className="text-[#666666] text-[0.9vw] text-nowrap font-bold">
                Transfer Tax
              </p>
              <p className="font-bold text-[1.3vw]">0%</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[4vw] px-2">
          <div>
            <p className="text-[#666666] font-semibold">Owner:</p>
            <p>0x...000</p>
          </div>
          <div>
            <p className="text-[#666666] font-semibold">Explorer:</p>
            <p>0x...5295</p>
          </div>
        </div>
        <div className="flex items-center gap-[4vw] px-2">
          <div>
            <p className="text-[#666666] font-semibold">Supply</p>
            <p>69 T</p>
          </div>
          <div>
            <p className="text-[#666666] font-semibold">Liquidity</p>
            <p className="">598 WETH / $2,952,982</p>
          </div>
        </div>
        <div className="flex items-center gap-[4vw] px-2">
          <div>
            <p className="text-[#666666] font-semibold">Project Links</p>
            <div className="flex items-center gap-2 mt-2">
              <Link to={""}>
                <img src="/images/t.png" alt="" />
              </Link>
              <Link to={""}>
                <img src="/images/x.png" alt="" />
              </Link>
              <Link to={""}>
                <img src="/images/web.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <button className="bg-primary_main text-center py-[1vw] w-full border-4 border-black rounded-2xl">
          View All
        </button>
      </div>
      {/* section 2  */}
      <div className="px-[1vw] py-[1.5vw] bg-[#FFFFFF0F] rounded-2xl space-y-[1.3vw]  ">
        <h2 className="text-center font-semibold">Scan Results</h2>

        <div className="">
          <p className="mb-1">From</p>
          <div className="bg-[#FFFFFF0D] px-[2vw] py-[0.5vw] rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/btc.png" alt="" />

              <p className="flex items-center gap-1 font-bold">
                BTC
                <IoChevronDown className="text-sm cursor-pointer" />
              </p>
            </div>
            <p className="font-bold">0.48366</p>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <p className="">To Estimate</p>
            <button>
              <img src="/images/converter.png" alt="" />
            </button>
          </div>
          <div className="bg-[#FFFFFF0D] px-[2vw] py-[0.5vw] rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/usd.png" alt="" />

              <p className="flex items-center gap-1 font-bold">
                USD
                <IoChevronDown className="text-sm cursor-pointer" />
              </p>
            </div>
            <p className="font-bold">0.48366</p>
          </div>
        </div>
        <p className="">1 ETH = 2500 USD</p>
        <button className="bg-primary_main text-center py-[1vw] w-full border-4 border-black rounded-2xl">
          Swap
        </button>
      </div>
    </div>
  )
}
