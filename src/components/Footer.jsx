import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm">© {new Date().getFullYear()} Nova. All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
