"use clint";

import { JSX } from "react";
import banner_1 from "../assets/images/banner_FirstTwinBanners_30d9Tf_ba5f94af-caea-4e10-a422-9cf37e15eef4.webp";
import banner_2 from "../assets/images/banner_FirstTwinBanners_jWmBYe_ad3d972b-41a8-48dd-9c22-30b52ae5e865.webp";
import banner_3 from "../assets/images/banner_SecondTwinBanners_uL6yA2_29c40432-c40f-468e-8821-bebdd3d5b908.webp";
import banner_4 from "../assets/images/banner_SecondTwinBanners_0sv6zR_aaa18779-43a0-462d-b207-6d7d16f46af4.webp";

import Image from "next/image";

export default function Products_Banner(): JSX.Element {
  return (
    <div>
      <div className="flex flex-row mx-auto gap-2  justify-center items-center ">
        <Image alt="" src={banner_1} width={800} className="rounded-2xl" />
        <Image alt="" src={banner_2} width={800} className="rounded-2xl" />
      </div>
      <div className="flex flex-row mx-auto gap-2  justify-center items-center mt-4">
        <Image alt="" src={banner_3} width={800} className="rounded-2xl" />
        <Image alt="" src={banner_4} width={800} className="rounded-2xl" />
      </div>
    </div>
  );
}
