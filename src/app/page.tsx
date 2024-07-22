import { Benefitbar } from "@/components/BenerfitBar";
import { ResponsiveMosaico } from "@/components/ImagesMosaico/ResponsiveMosaico";
import ImgMosaico01Desktop from "@/assets/home/mosaico-01/mosaico-01-home-img-01-desktop.png";
import ImgMosaico02Desktop from "@/assets/home/mosaico-01/mosaico-01-home-img-02-desktop.png";
import ImgMosaico03Desktop from "@/assets/home/mosaico-01/mosaico-01-home-img-03-desktop.png";
import { ImagesMosaico } from "@/components/ImagesMosaico";
import ImgMosaico04Desktop from "@/assets/home/mosaico-02/mosaico-02-home-img-01-desktop.png";
import ImgMosaico05Desktop from "@/assets/home/mosaico-02/mosaico-02-home-img-02-desktop.png";
import ImgMosaico06Desktop from "@/assets/home/mosaico-02/mosaico-02-home-img-03-desktop.png";
import ImgMosaico07Desktop from "@/assets/home/mosaico-02/mosaico-02-home-img-04-desktop.png";

import ImgMosaico08Desktop from "@/assets/home/mosaico-03/mosaico-03-home-img-01-desktop.png";
import ImgMosaico09Desktop from "@/assets/home/mosaico-03/mosaico-03-home-img-02-desktop.png";
import { BannerSliderFull } from "@/components/BannerSliderFull";
import { Shelf } from "@/components/Shelf";

export default function Home() {
  const mosaico01 = [
    {
      srcDesktop: ImgMosaico01Desktop,
      srcMobile: ImgMosaico01Desktop,
      link: "/",
      alt: "imagem 01",
      widthDesktop: 400,
      widthmobile: 360,
      heightdesktop: 220,
      heightmobile: 121,
    },
    {
      srcDesktop: ImgMosaico02Desktop,
      srcMobile: ImgMosaico02Desktop,
      link: "/",
      alt: "imagem 02",
      widthDesktop: 400,
      widthmobile: 360,
      heightdesktop: 220,
      heightmobile: 121,
    },
    {
      srcDesktop: ImgMosaico03Desktop,
      srcMobile: ImgMosaico03Desktop,
      link: "/",
      alt: "imagem 03",
      widthDesktop: 400,
      widthmobile: 360,
      heightdesktop: 220,
      heightmobile: 121,
    },
  ];

  const mosaico02 = [
    {
      srcDesktop: ImgMosaico04Desktop,
      srcMobile: ImgMosaico04Desktop,
      link: "/",
      alt: "imagem 04",
      widthDesktop: 317,
      widthmobile: 360,
      heightdesktop: 397,
      heightmobile: 260,
    },
    {
      srcDesktop: ImgMosaico05Desktop,
      srcMobile: ImgMosaico05Desktop,
      link: "/",
      alt: "imagem 05",
      widthDesktop: 317,
      widthmobile: 360,
      heightdesktop: 397,
      heightmobile: 260,
    },
    {
      srcDesktop: ImgMosaico06Desktop,
      srcMobile: ImgMosaico06Desktop,
      link: "/",
      alt: "imagem 06",
      widthDesktop: 317,
      widthmobile: 360,
      heightdesktop: 397,
      heightmobile: 260,
    },
    {
      srcDesktop: ImgMosaico07Desktop,
      srcMobile: ImgMosaico07Desktop,
      link: "/",
      alt: "imagem 07",
      widthDesktop: 317,
      widthmobile: 360,
      heightdesktop: 397,
      heightmobile: 260,
    },
  ];

  const mosaico03 = [
    {
      srcDesktop: ImgMosaico08Desktop,
      srcMobile: ImgMosaico08Desktop,
      link: "/",
      alt: "imagem 08",
      widthDesktop: 665,
      widthmobile: 360,
      heightdesktop: 280,
      heightmobile: 162,
    },
    {
      srcDesktop: ImgMosaico09Desktop,
      srcMobile: ImgMosaico09Desktop,
      link: "/",
      alt: "imagem 09",
      widthDesktop: 665,
      widthmobile: 360,
      heightdesktop: 280,
      heightmobile: 162,
    },
  ];

  return (
    <div>
      <BannerSliderFull />
      <Benefitbar />
      <ImagesMosaico dataImg={mosaico01} />
      <div>
        <p> Patreleira de Promoções da semana </p>
        <Shelf />
      </div>
      <ResponsiveMosaico dataImg={mosaico02} />
      <div>Moisaco de Produtos</div>
      <ImagesMosaico dataImg={mosaico03} />
      <div>Mosaico duplo de shelfs com banner</div>
    </div>
  );
}
