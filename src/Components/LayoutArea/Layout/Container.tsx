import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1600px] mx-auto bg-pink min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
}
