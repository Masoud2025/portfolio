"use client";

import React, { JSX, useEffect, useState } from "react";

interface PersianDateProps {
  showWeekday?: boolean;
  className?: string;
}

export default function PersianDate({
  showWeekday = true,
  className = "text-lg font-medium",
}: PersianDateProps): JSX.Element {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const now = new Date();

    function formatWithIntl(date: Date): string | null {
      try {
        const opts: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        if (showWeekday) opts.weekday = "long";
        const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", opts);
        return formatter.format(date);
      } catch (e) {
        return null;
      }
    }

    const formatted = formatWithIntl(now);

    const fallback = now.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: showWeekday ? "long" : undefined,
    });

    setToday(formatted || fallback);
  }, [showWeekday]);

  return (
    <div className={className} aria-live="polite">
      {today || "..."}
    </div>
  );
}
