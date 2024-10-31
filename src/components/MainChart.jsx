import React from "react"

import { IoCaretUpSharp } from "react-icons/io5"

export default function MainChart() {
  return (
    <div className="bg-[#1C1C1C] p-[2vw]  rounded-3xl shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#444444]">
        <div>
          <div className="flex items-center gap-1">
            <h2 className="font-semibold text-[3vw]">OMNI</h2>{" "}
            <img src="/images/logo-main.png" alt="" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-[2.5vw]">$ 16,590.40</h2>{" "}
            <span className="flex items-center text-green pt-2 font-semibold text-[1.7vw]">
              <IoCaretUpSharp />
              12,5%
            </span>
          </div>
        </div>
        <div className="border-r border-l px-2 border-[#444444]">
          <p className="text-[#666666] font-bold">Market Cap</p>
          <p className="text-[1.5vw]">$318,180,846,869</p>
          <span className="flex items-center text-green pt-2 font-semibold text-[1.3vw]">
            <IoCaretUpSharp />
            12,5%
          </span>
        </div>
        <div className="">
          <p className="text-[#666666] font-bold">Volume 24h</p>
          <p className="text-[1.5vw]">$19,486,443,287</p>
          <span className="flex items-center text-green pt-2 font-semibold text-[1.3vw]">
            <IoCaretUpSharp />
            6,5%
          </span>
        </div>
      </div>
      <div className="mt-2">
        <img src="/images/chart.png" alt="" />
      </div>
    </div>
  )
}
