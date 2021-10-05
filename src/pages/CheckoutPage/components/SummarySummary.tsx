import { Button } from "../../../components/Button";
import { TextBody, TextH6 } from "../../../components/Elements/typography";
import { formatPrice } from "../../../utils";

interface SummarySummaryProps {
  total: number;
  shipping: number;
  vat: number;
}
export const SummarySummary = ({
  total,
  shipping,
  vat,
}: SummarySummaryProps) => {
  return (
    <>
      <div className="total flex w-full justify-between">
        <TextBody>TOTAL</TextBody>
        <TextH6>$ {formatPrice(total)}</TextH6>
      </div>
      <div className="shipping flex w-full justify-between mt-2">
        <TextBody>SHIPPING</TextBody>
        <TextH6>$ {formatPrice(shipping)}</TextH6>
      </div>
      <div className="shipping flex w-full justify-between mt-2">
        <TextBody>VAT (INCLUDED)</TextBody>
        <TextH6>$ {formatPrice(vat)}</TextH6>
      </div>
      <div className="shipping flex w-full justify-between mt-6">
        <TextBody>GRAND TOTAL</TextBody>
        <TextH6 className="text-primary">
          $ {formatPrice(total + shipping)}
        </TextH6>
      </div>
      <Button
        className="mt-8"
        text="CONTINUE & PAY"
        onClick={() => console.log("pay")}
      />
    </>
  );
};
