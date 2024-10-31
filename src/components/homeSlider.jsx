import React from "react"

import { AiFillFire } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import Marquee from "react-fast-marquee"

const data = [
  {
    hashnumber: "#4",
    icon: "/images/icon-1.png",
    name: "SPX",
    value: "+3.96%",
    className: "text-[#17C671]",
  },
  {
    hashnumber: "#5",
    icon: "/images/icon-2.png",
    name: "KLAUS",
    value: "+44.12%",
    className: "text-[#17C671]",
  },
  {
    hashnumber: "#6",
    icon: "/images/icon-3.png",
    name: "PORK",
    value: "+21.82%",
    className: "text-[#17C671]",
  },
  {
    hashnumber: "#7",
    icon: "/images/icon-4.png",
    name: "PORK",
    value: "-9.37%",
    className: "text-[#E93943]",
  },
  {
    hashnumber: "#8",
    icon: "/images/icon-5.png",
    name: "BAN",
    value: "+5.83%",
    className: "text-[#17C671]",
  },
  {
    hashnumber: "#9",
    icon: "/images/icon-1.png",
    name: "SPX 2.0",
    value: "+52.61%",
    className: "text-[#17C671]",
  },
  {
    hashnumber: "#10",
    icon: "/images/icon-6.png",
    name: "MAGA",
    value: "-20.11%",
    className: "text-[#E93943]",
  },
  {
    hashnumber: "#11",
    icon: "/images/icon-7.png",
    name: "",
    value: "???",
    className: "text-[#17C671]",
  },
]

export default function HomeSlider() {
  return (
    <div className="grid grid-cols-12 items-center gap-2 px-[1vw]">
      <div className="col-span-2 flex items-center justify-center gap-1">
        <AiFillFire className="text-primary" />
        <h2 className="text-[1.2vw] font-medium">OMNI TRENDING</h2>
        <IoIosArrowDown />
      </div>
      <div className="col-span-8">
        <Marquee text="swetha">
          <div className="flex gap-5">
            {data.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 font-medium">
                <span>{item.hashnumber}</span>
                <img src={item.icon} alt={item.hashnumber} />
                <span> {item.name}</span>
                <span className={`${item.className} font-semibold`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="col-span-2 flex items-center gap-2 justify-center">
        <span className="block top-0 -right-1 w-2 h-2 rounded-full bg-primary"></span>
        <p className="text-[#5ACC25] font-semibold text-[1.3vw]">Trading</p>
      </div>
    </div>
  )
}
