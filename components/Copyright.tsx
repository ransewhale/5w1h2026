"use client";

import { useEffect, useState } from "react";

export default function Copyright() {

  const MAX_POPUPS = 7;

  type Popup = {
    id: number;
    visible: boolean;
  };

  const [popups, setPopups] = useState<Popup[]>([]);

  const handleClick = () => {
      if(popups.length < MAX_POPUPS){
      const id = Date.now();

      setPopups((prev) => [
        ...prev,
        {
          id,
          visible: true,
        },
      ]);

      setTimeout(() => {
        setPopups((prev) =>
          prev.map((popup) =>
            popup.id === id
              ? { ...popup, visible: false }
              : popup
          )
        );
      }, 4500);

      setTimeout(() => {
        setPopups((prev) =>
          prev.filter((popup) => popup.id !== id)
        );
      }, 5000);
    }
  };

  return (
    <footer className="relative Footer items-center">
      <div className="flex flex-col-reverse items-center gap-3">
        {popups.map((popup) => (
          <div key={popup.id} className={`relative mb-3 whitespace-nowrap rounded-lg border border-black bg-white px-4 py-2 text-sm after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-black transition-opacity duration-500
            ${popup.visible ? "opacity-100" : "opacity-0"}
          `}>
            Copyright is for losers -Banksy-
          </div>
        ))}
      </div>
      <button onClick={handleClick} className="border-0 bg-transparent p-0 text-inherit">
        2026 © ransewhale
      </button>
    </footer>
  );
}


      /*
      {showMessage && (
        <div className={`absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-black bg-white px-4 py-2 text-sm after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-black transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
          }`}>
          Copyright is for losers -Banksy-
        </div>
      )}
      {showMessage && (
        <div className={`absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-black bg-white px-4 py-2 text-sm after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-black transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
          }`}>
          Copyright is for losers -Banksy-
        </div>
      )}
      */