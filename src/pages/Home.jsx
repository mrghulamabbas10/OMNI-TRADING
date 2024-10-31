import React from "react"
import HomeSlider from "../components/homeSlider"
import Scan from "../components/scan"
import ScanResults from "../components/ScanResults"
import TRANSACTIONS from "../components/Transactions"
import MainChart from "../components/MainChart"

export default function Home() {
  return (
    <>
      <HomeSlider />
      <div className="grid grid-cols-12 gap-5 px-[2vw] mt-[2vw]">
        <div className="col-span-3">
          <Scan />
        </div>
        <div className="col-span-6 space-y-5">
          <MainChart />
          <TRANSACTIONS />
        </div>
        <div className="col-span-3">
          <ScanResults />
        </div>
      </div>
    </>
  )
}
