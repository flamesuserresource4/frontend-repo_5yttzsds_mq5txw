import React from 'react';
import { Battery, Camera, Cpu, Shield } from 'lucide-react';

const items = [
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Pro camera system',
    desc: '50MP primary, cinematic HDR, and nightography that captures more light than ever.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Nova A1 chip',
    desc: 'Next‑gen neural engine. 3nm efficiency. Desktop‑class graphics for mobile gaming.'
  },
  {
    icon: <Battery className="h-6 w-6" />,
    title: 'All‑day battery',
    desc: 'Smarter power management with up to 28 hours of video playback.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Titanium frame',
    desc: 'Aerospace‑grade durability with a ceramic shield front.'
  }
];

export default function Highlights() {
  return (
    <section id="features" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Beautiful. Powerful. Effortless.</h2>
          <p className="mt-4 text-white/70">
            Every detail is engineered to feel invisible — so all you notice is how much you can do.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-2.5 text-white/80">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
