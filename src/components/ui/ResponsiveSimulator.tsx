"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, MonitorSmartphone } from "lucide-react";

export default function ResponsiveSimulator() {
  const [mode, setMode] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [isInIframe, setIsInIframe] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsInIframe(window.self !== window.top);
      setCurrentUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  const sizeClasses = {
    mobile: "w-[375px] h-[667px]", // Mobile
    tablet: "w-[820px] h-[1180px]", // Tablet
    desktop: "w-[1200px] h-[800px]", // Desktop
  };

  if (isInIframe) return null;

  return (
    <>
      {/* Button for open simulator*/}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg z-50"
        >
          <MonitorSmartphone size={20} />
          <span className="hidden sm:inline">نمایش ریسپانسیو</span>
        </button>
      )}

      {/* When simulator open   */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm ">
          {/* Close button  */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
          >
            <X size={26} />
          </button>

          {/*  Top section Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setMode("mobile")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                mode === "mobile"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border"
              }`}
            >
              📱 Mobile
            </button>

            <button
              onClick={() => setMode("tablet")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                mode === "tablet"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border"
              }`}
            >
              💻 Tablet
            </button>

            <button
              onClick={() => setMode("desktop")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                mode === "desktop"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border"
              }`}
            >
              🖥 Desktop
            </button>
          </div>

          {/*  iframe  Area*/}
          <div
            className={`transition-all duration-500 border-4 border-white/20 shadow-2xl rounded-xl overflow-hidden bg-white flex items-center justify-center ${sizeClasses[mode]}`}
          >
            {currentUrl && (
              <iframe
                src={currentUrl}
                className="w-full h-full"
                title="Preview"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
