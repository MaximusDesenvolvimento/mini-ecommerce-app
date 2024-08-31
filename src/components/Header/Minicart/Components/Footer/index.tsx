import { Button } from "@/components/ui/button";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { UseMinicart } from "@/hooks/MinicartContent";
import { formatPrices } from "@/utils/formatPrice";

export function MinicartFooter() {
  const { products } = UseMinicart();

  function totalPrice() {
    const totalPriceCalc = products?.reduce((accumulator, current) => {
      const quantity = current.quantity !== undefined ? current.quantity : 0;
      return accumulator + quantity * current.price;
    }, 0);

    return formatPrices(totalPriceCalc);
  }

  const handleWhatsAppRedirect = () => {
    const productList = products
      .map((product) => `• ${product.name} (Quantidade: ${product.quantity})`)
      .join("\n");

    const message = `Olá, eu gostaria de comprar os seguintes produtos:\n${productList}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5583999117156";
    const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}`;

    window.location.href = whatsappLink;
  };

  const minicartEmpaty = products?.length < 1;

  return (
    <SheetFooter className="bg-white w-full px-6 py-3 md:flex-col-reverse md:pt-1">
      {!minicartEmpaty && (
        <>
          <SheetClose asChild>
            <Button variant={"ghost"} className="w-full h-10 border text-base">
              Continuar comprando
            </Button>
          </SheetClose>

          <div>
            <div className="flex justify-between items-center py-1">
              <span className="text-lg">SubTotal </span>
              <span>{totalPrice()}</span>
            </div>
            <div className="flex justify-between items-center  py-1">
              <span className="font-semibold text-lg">Total </span>
              <span className="font-bold">{totalPrice()}</span>
            </div>
            <Button
              className="w-full my-4 h-10"
              onClick={handleWhatsAppRedirect}
            >
              Finalizar Compra
            </Button>
          </div>
        </>
      )}
    </SheetFooter>
  );
}
