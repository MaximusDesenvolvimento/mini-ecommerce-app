import Image from "next/image";

import IconSroes from "@/assets/home/benefitBar/icon-stores.svg";
import IconQualidade from "@/assets/home/benefitBar/icon-qualidade.svg";
import IconFrete from "@/assets/home/benefitBar/icon-frete.svg";
import IconPix from "@/assets/home/benefitBar/icon-pix.svg";

export function BennefitbarDesktop() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5 my-9 pb-10 border-b border-gray-200">
      <div className="flex justify-start items-center gap-5 w-full max-w-[221px] mx-auto">
        <Image src={IconSroes} alt="icon de loja" width={30} height={30} />
        <div>
          <p className="mb-1 font-bold tracking-[-0.32px]">Compre no site</p>
          <p className="text-sm font-medium">
            e retire na loja ou receba em casa.
          </p>
        </div>
      </div>

      <div className="flex justify-start items-center gap-5 w-full max-w-[221px] mx-auto">
        <Image
          src={IconQualidade}
          alt="icon de qualidade"
          width={30}
          height={30}
        />
        <div>
          <p className="mb-1 font-bold tracking-[-0.32px]">
            A qualidade de sempre
          </p>
          <p className="text-sm font-medium">
            Compre sem sair de casa ou da obra.
          </p>
        </div>
      </div>

      <div className="flex justify-start items-center gap-5 w-full max-w-[221px] mx-auto">
        <Image
          src={IconFrete}
          alt="icon frete grátis"
          width={40}
          height={40}
          className="-ml-[11px]"
        />
        <div>
          <p className="mb-1 font-bold tracking-[-0.32px]">Frete grátis</p>
          <p className="text-sm font-medium">Para os compras acima de R$400</p>
        </div>
      </div>

      <div className="flex justify-start items-center gap-5 w-full max-w-[221px] mx-auto">
        <Image src={IconPix} alt="icon de pix" width={30} height={30} />
        <div>
          <p className="mb-1 font-bold tracking-[-0.32px]">Pagamento</p>
          <p className="text-sm font-medium">
            Pague com o pix, sem complicações.
          </p>
        </div>
      </div>
    </div>
  );
}
