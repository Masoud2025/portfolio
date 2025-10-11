"use client";

import { ArrowDown } from "lucide-react";
import { JSX, useState, useCallback, useRef, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  items?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "digital", label: "کالای دیجیتال" },
  { id: "fashion", label: "مد و پوشاک" },
  { id: "auto", label: "خودرو، ابزار" },
  { id: "beauty", label: "زیبایی و سلامت" },
  { id: "home", label: "خانه و آشپزخانه" },
  {
    id: "categories",
    label: "دسته بندی",
    items: [
      { id: "computer", label: "کامپیوتر" },
      { id: "laptop", label: "لپتاپ ها" },
      { id: "mouse", label: "ماوس" },
    ],
  },
];

export default function Links(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback((itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(itemId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubItemClick = useCallback((itemId: string) => {
    console.log(`Clicked: ${itemId}`);
    // Add your navigation logic here
  }, []);

  return (
    <nav aria-label="دسته‌بندی اصلی">
      <ul className="flex gap-5 justify-end relative">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => item.items && handleMouseEnter(item.id)}
            onMouseLeave={item.items ? handleMouseLeave : undefined}
            className="relative"
          >
            <button
              type="button"
              className=" hover:text-shadow-2xs cursor-pointer flex items-center gap-1 transition-colors duration-200"
              aria-expanded={item.items ? openDropdown === item.id : undefined}
              aria-haspopup={item.items ? "true" : undefined}
            >
              {item.label}
              {item.items && (
                <ArrowDown
                  size={20}
                  strokeWidth={1}
                  className="text-gray-800"
                  aria-hidden="true"
                />
              )}
            </button>

            {item.items && openDropdown === item.id && (
              <div
                className="absolute top-full right-0 bg-white shadow-2xl rounded-2xl w-[40rem] min-h-[10rem] z-10 mt-3 p-4"
                role="menu"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <ul className="space-y-1">
                  {item.items.map((subItem) => (
                    <li key={subItem.id} role="none">
                      <button
                        type="button"
                        className="w-full text-right hover:bg-amber-100 cursor-pointer p-2 rounded transition-colors duration-150"
                        onClick={() => handleSubItemClick(subItem.id)}
                        role="menuitem"
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
