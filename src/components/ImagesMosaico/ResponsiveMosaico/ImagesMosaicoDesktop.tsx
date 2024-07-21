import Image from "next/image";
import Link from "next/link";

import { PropsArrayImgMosaico } from "..";

export function ImagesMosaicoDesktop({ dataImg }: PropsArrayImgMosaico) {
  return (
    <div className="flex flex-col justify-center items-center gap-7 px-4 mb-9 md:justify-between md:flex-row">
      {dataImg.map((item, index) => (
        <Link href={item.link} key={index}>
          <Image
            src={item.srcDesktop}
            width={item.widthDesktop}
            height={item.heightdesktop}
            alt={item.alt}
          />
        </Link>
      ))}
    </div>
  );
}
