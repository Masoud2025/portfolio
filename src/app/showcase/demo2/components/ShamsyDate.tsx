import { JSX, useState, useEffect } from "react";

export default function PersianDate(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // فرمت عددی
  const numericDate = currentTime.toLocaleDateString("fa-IR");

  // فرمت کامل بدون سال
  const fullDate = currentTime.toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // ساعت دیجیتال
  const time = currentTime.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // محاسبه زاویه عقربه‌ها
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="flex flex-col items-center justify-center   p-8">
      <div className="flex flex-wrap justify-center gap-8 mb-8 w-full max-w-6xl">
        {/* ساعت عقربه‌ای */}
        {/* <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full shadow-2xl p-8 border-8 border-amber-800"> */}
        {/* <div className="relative w-72 h-72 bg-white rounded-full shadow-inner border-4 border-amber-900"> */}
        {/* مرکز ساعت */}
        {/* <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30"></div> */}

        {/* اعداد ساعت */}
        {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">12</div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl font-bold text-gray-800">3</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">6</div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl font-bold text-gray-800">9</div> */}

        {/* عقربه ساعت */}
        {/* <div 
              className="absolute top-1/2 left-1/2 w-2 bg-gray-800 rounded-full origin-bottom z-20"
              style={{
                height: '70px',
                transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
              }}
            ></div> */}

        {/* عقربه دقیقه */}
        {/* <div 
              className="absolute top-1/2 left-1/2 w-1.5 bg-gray-700 rounded-full origin-bottom z-20"
              style={{
                height: '100px',
                transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
              }}
            ></div> */}

        {/* عقربه ثانیه */}
        {/* <div
              className="absolute top-1/2 left-1/2 w-0.5 bg-red-600 rounded-full origin-bottom z-20"
              style={{
                height: "110px",
                transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
              }}
            ></div> */}
        {/* </div> */}
        {/* </div> */}

        {/* ساعت دیجیتال روی میزی */}
        {/* <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 border-4 border-gray-700">
          <div className="bg-black rounded-2xl p-12 shadow-inner">
            <div className="font-mono text-8xl font-bold text-center tracking-widest">
              <span className="text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]">
                {time.split(':')[0]}
              </span>
              <span className="text-red-500 animate-pulse">:</span>
              <span className="text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]">
                {time.split(':')[1]}
              </span>
              <span className="text-red-500 animate-pulse">:</span>
              <span className="text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]">
                {time.split(':')[2]}
              </span>
            </div>
          </div>
        </div> */}
      </div>

      {/* تاریخ */}
      <div className="  text-white  p-12 space-y-8 max-w-2xl w-full">
        {/* تاریخ عددی */}
        {/* <div className="text-center border-b-2 border-gray-200 pb-6">
          <p className="text-gray-600 text-lg mb-3">تاریخ عددی</p>
          <p className="text-6xl font-bold text-indigo-600 tracking-wider">
            {numericDate}
          </p>
        </div> */}

        {/* تاریخ کامل */}
        <div className=" ">
          {/* <p className="text-white-600 text-lg mb-3">تاریخ کامل</p> */}
          <p className=" font-bold text-white leading-relaxed">
            {fullDate}
          </p>
        </div>
      </div>
    </div>
  );
}
