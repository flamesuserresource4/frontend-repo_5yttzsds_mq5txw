import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-white/20 to-blue-300/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-12 translate-y-12 rounded-full bg-gradient-to-tr from-fuchsia-300/10 to-cyan-300/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 sm:pt-24">
        <nav className="flex w-full items-center justify-between text-sm text-white/70">
          <div className="font-semibold tracking-tight text-white">nova</div>
          <div className="hidden gap-8 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#tech" className="hover:text-white">Tech</a>
            <a href="#buy" className="hover:text-white">Buy</a>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-1.5 text-white/90 backdrop-blur hover:border-white/40 hover:text-white">Pre-order</button>
        </nav>

        <div className="pointer-events-none mt-24 flex flex-col items-center text-center sm:mt-28">
          <h1 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
            The new Nova Phone
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Precision-milled. Featherlight. A camera system that sees in the dark.
            Powered by a chip that redefines fast.
          </p>
          <div className="pointer-events-auto mt-8 flex items-center gap-3">
            <a href="#buy" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">Pre-order</a>
            <a href="#features" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/40 hover:text-white">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
