// import MobileMenu from "./mobileMenu"

import { IoNotificationsOutline } from "react-icons/io5"
import { IoChevronDown } from "react-icons/io5"
import { Link } from "react-router-dom"

const data = [
  {
    icon: "/images/bit-icon.png",
    value: "BTC: $2,488.69",
    className: "bg-[#0B221E]",
  },
  {
    icon: "/images/sol-icon.png",
    value: "SOL: $172.61",
    className: "bg-[#0B221E]",
  },
  {
    icon: "/images/eth-icon.png",
    value: "ETH: $2,488.69",
    className: "bg-[#0B221E]",
  },
  {
    icon: "/images/ful-icon.png",
    value: "ETH GWEI: 17.48",
    className: "",
  },
]

const maiiLinks = [
  {
    href: "#",
    name: "Terminal",
  },
  {
    href: "#",
    name: "Upgrade",
  },
  {
    href: "#",
    name: "Docs",
  },
  {
    href: "#",
    name: "Coming Soon",
  },
]

export default function Navbar() {
  return (
    <div className="relative p-[1vw] ">
      <div className="grid grid-cols-12 gap-[2vw] items-center">
        <div className="col-span-3">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="col-span-6">
          <div className="flex items-center gap-2">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-lg flex items-center gap-1 ${item.className}`}
              >
                <span>
                  <img src={item.icon} alt={item.value} className="w-5" />
                </span>
                <p className="text-[ETH: $2,488.69]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-around">
          <div className="relative cursor-pointer">
            <IoNotificationsOutline className="text-2xl" />
            <span className="block absolute top-0 -right-1 w-2 h-2 rounded-full bg-primary"></span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/images/avatar.png"
              alt=""
              className="rounded-full overflow-hidden"
            />
            <p>Mariana James</p>
          </div>
          <IoChevronDown className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center ml-[25vw] gap-[4vw] mt-[2vw]">
        {maiiLinks.map((item, idx) => (
          <p key={idx} className="text-primary_2">
            <Link to={item.href}>{item.name}</Link>
          </p>
        ))}
      </div>
      {/* <div className="animation">
        {menuShow && <MobileMenu setMenuShow={setMenuShow} />}
      </div> */}
    </div>
  )
}
