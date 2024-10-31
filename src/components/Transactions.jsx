import React from "react"

import { LuChevronsUpDown } from "react-icons/lu"
import { PiArrowUpRightFill } from "react-icons/pi"
import { Link } from "react-router-dom"

export default function TRANSACTIONS() {
  return (
    <div className="bg-[#FFFFFF0A] p-[1.5vw] pt-[2vw] rounded-3xl shadow-2xl">
      <div className="">
        <div className="flex justify-between">
          <h3 className="text-[#FFFFFF] font-bold text-[0.9vw]">
            TRANSACTIONS{" "}
          </h3>
          <Link href="" className="text-[#555555]">
            See All
          </Link>
        </div>
      </div>
      <div className="overflow-x-scroll mt-3 md:block hidden" id="scroll_none">
        <div className="grid grid-cols-12 ">
          <div className="md:col-span-1"></div>
          <Link
            href=""
            className="flex items-center text-[#A8A8A8] text-[6px] md:text-[11px]  col-span-3 "
          >
            DATE & TIME <LuChevronsUpDown />
          </Link>
          <Link
            href=""
            className="flex items-center text-[#A8A8A8] text-[6px] md:text-[11px]  col-span-3 "
          >
            PRICE USD & BNB
            <LuChevronsUpDown />
          </Link>
          <Link
            href=""
            className="flex items-center text-[#A8A8A8] text-[6px] md:text-[11px]  col-span-2 "
          >
            AMOUNT TBULL
            <LuChevronsUpDown />
          </Link>
          <Link
            href=""
            className="flex items-center text-[#A8A8A8] text-[6px] md:text-[11px]  col-span-2"
          >
            TOTAL BNB
            <LuChevronsUpDown />
          </Link>
          <Link
            href=""
            className="flex items-center text-[#A8A8A8] text-[6px] md:text-[11px]  col-span-1 "
          >
            TX
            <LuChevronsUpDown />
          </Link>
        </div>
        <div className="grid grid-cols-12 mt-3 py-5 px-4 rounded-[10px] overflow-hidden">
          <div className="md:col-span-1 text-[#9EFF70] flex items-center gap-1">
            <PiArrowUpRightFill className="text-[9px]" />
            Buy
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[0.7vw] md:text-[15px] col-span-3 ">
            22-05-23 17:34:22
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[0.7vw] md:text-[15px] col-span-3 ">
            $0.0004266 <span className="text-[0.7vw] ml-2">0.0₅1286</span>
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[0.7vw] md:text-[15px] col-span-2 ">
            777,127
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[0.7vw] md:text-[15px] col-span-1 ">
            1.00
          </div>
          <div className="text-end text-[#5A5A5A] text-[0.7vw] md:text-[15px] col-span-2 ">
            0x68...57c6
          </div>
        </div>
        <div className="bg-[#FFFFFF0F] grid grid-cols-12 py-5 px-4 rounded-[10px] overflow-hidden ">
          <div className="md:col-span-1 text-[#FF1C30] flex items-center gap-1">
            <PiArrowUpRightFill className="text-[9px]" />
            Sell
          </div>
          <div className="flex items-center text-white text-[15px] md:col-span-3 ">
            22-05-23 17:34:22
          </div>
          <div className="flex items-center text-white text-[15px] md:col-span-3 ">
            $0.0004266 <span className="text-[8px] ml-2">0.0₅1286</span>
          </div>
          <div className="flex items-center text-white text-[15px] md:col-span-2">
            777,127
          </div>
          <div className="flex items-center text-white text-[15px] md:col-span-1 ">
            1.00
          </div>
          <div className="text-end text-white text-[15px] md:col-span-2 ">
            0x68...57c6
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3 py-5 px-4 rounded-[10px] overflow-hidden">
          <div className="md:col-span-1 text-[#9EFF70] flex items-center gap-1">
            <PiArrowUpRightFill className="text-[9px]" />
            Buy
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-3 ">
            22-05-23 17:34:22
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-3 ">
            $0.0004266 <span className="text-[8px] ml-2">0.0₅1286</span>
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-2 ">
            777,127
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-1 ">
            1.00
          </div>
          <div className="text-end text-[#5A5A5A] text-[6px] md:text-[15px] col-span-2 ">
            0x68...57c6
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 py-5 px-4 rounded-[10px] overflow-hidden">
          <div className="md:col-span-1 text-[#9EFF70] flex items-center gap-1">
            <PiArrowUpRightFill className="text-[9px]" />
            Buy
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-3 ">
            22-05-23 17:34:22
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-3 ">
            $0.0004266 <span className="text-[8px] ml-2">0.0₅1286</span>
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-2 ">
            777,127
          </div>
          <div className="flex items-center text-[#5A5A5A] text-[6px] md:text-[15px] col-span-1 ">
            1.00
          </div>
          <div className="text-end text-[#5A5A5A] text-[6px] md:text-[15px] col-span-2 ">
            0x68...57c6
          </div>
        </div>
      </div>
    </div>
  )
}
