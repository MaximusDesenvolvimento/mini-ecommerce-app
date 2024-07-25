import Link from "next/link";
import { ResponsiveImage, PropsImage } from "../ResponsiveImage";

interface PropsImageMosaico extends PropsImage {
  link: string;
}
[];

export type PropsArrayImgMosaico = {
  dataImg: PropsImageMosaico[];
};

export function ImagesMosaico({ dataImg }: PropsArrayImgMosaico) {
  return (
    <div className="flex flex-col justify-center items-center gap-7 px-4 mb-9 md:justify-between md:flex-row lg:max-w-container lg:mx-auto">
      {dataImg.map((item, index) => (
        <Link href={item.link} key={index} className="w-full">
          <ResponsiveImage
            srcDesktop={item.srcDesktop}
            srcMobile={item.srcMobile}
            widthDesktop={item.widthDesktop}
            widthmobile={item.widthmobile}
            heightdesktop={item.heightdesktop}
            heightmobile={item.heightmobile}
            alt={item.alt}
          />
        </Link>
      ))}
    </div>
  );
}
