import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const kpis = [
  { label: "TOTAL EMPLOYEES", value: "1,240", sub: "Active workforce", badge: null },
  { label: "PRESENT TODAY",   value: "1,058", sub: null, badge: { text: "85.3%", up: true  } },
  { label: "LATE ARRIVALS",   value: "47",    sub: null, badge: { text: "3.8%",  up: false } },
  { label: "ABSENT",          value: "89",    sub: null, badge: { text: "7.2%",  up: false } },
  { label: "ON LEAVE",        value: "36",    sub: "Approved leaves", badge: null },
  { label: "AVG. WORK HRS",   value: "7.8h",  sub: null, badge: { text: "OT: 1.2h", up: true } },
];

export default function KPIStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
      {kpis.map((k, i) => (
        <div
          key={i}
          className="rounded-xl p-4 flex flex-col justify-between min-h-[90px]"
          style={{ background: "linear-gradient(135deg,#1a3a8f 0%,#1565c0 100%)" }}
        >
          <p className="text-[9px] font-bold tracking-widest text-blue-200 uppercase">{k.label}</p>
          <p className="text-[26px] font-extrabold text-white leading-none mt-1">{k.value}</p>
          {k.sub && <p className="text-[10px] text-blue-200 mt-1">{k.sub}</p>}
          {k.badge && (
            <div className={`flex items-center gap-1 mt-1 w-fit px-1.5 py-0.5 rounded text-[10px] font-bold ${
              k.badge.up ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
            }`}>
              {k.badge.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {k.badge.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}