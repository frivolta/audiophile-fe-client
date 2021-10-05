import React from "react";

interface Props {
  initialQuantity?: number;
}

export const useQuantity = ({ initialQuantity }: Props) => {
  const [qty, setQty] = React.useState<number>(initialQuantity || 1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => (qty > 1 ? setQty(qty - 1) : setQty(1));

  return { qty, increaseQty, decreaseQty };
};
