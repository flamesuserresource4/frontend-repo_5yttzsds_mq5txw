import React from 'react';

export default function TechSpecs() {
  return (
    <section id="tech" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Engineered down to the atom.</h2>
            <p className="mt-4 text-white/70">
              Nova Phone is carved from a single block with aerospace‑grade materials, featuring a
              new thermal architecture for sustained peak performance and whisper‑quiet efficiency.
            </p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> 6.7" ProMotion OLED, 1–120Hz adaptive</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> Nova A1 chip with 16‑core Neural Engine</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> 50MP + 12MP + 12MP camera array with sensor‑shift OIS</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> USB‑C with Thunderbolt speeds</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> IP68 water and dust resistance</li>
            </ul>

            <div id="buy" className="mt-10 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">Pre-order now</button>
              <span className="text-sm text-white/60">From $999 • Ships next month</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,rgba(255,255,255,0.15),transparent)]" />
              <div className="relative z-10 grid grid-cols-2 gap-4 text-sm text-white/80">
                <Spec label="Chip" value="Nova A1" />
                <Spec label="CPU" value="8‑core" />
                <Spec label="GPU" value="10‑core" />
                <Spec label="Neural" value="16‑core" />
                <Spec label="Display" value="6.7" />
                <Spec label="Refresh" value="120Hz" />
                <Spec label="Storage" value="256GB–1TB" />
                <Spec label="Battery" value="28 hrs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
      <div className="mt-1 text-base font-medium text-white">{value}</div>
    </div>
  );
}
