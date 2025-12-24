"use client";

const Scene = dynamic(() => import('@/components/3dScene'), { ssr: false })
import Gui from "@/components/Gui";
import Tui from "@/components/Tui";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Home() {

  const [active, setActive] = useState<number>(0);

  return (
    <>
      <button className=" absolute top-0 right-0 z-50" onClick={() => { setActive(current => (current + 1) % 3) }}>Change Active</button>
      {active === 0 && <Scene active={active === 0} sceneChanger={(active: number) => { setActive(active); }} />}
      {active === 1 && <Tui sceneChanger={(active: number) => setActive(active)} />}
      {active === 2 && <Gui sceneChanger={(active: number) => setActive(active)} />}
    </>
  )
}
