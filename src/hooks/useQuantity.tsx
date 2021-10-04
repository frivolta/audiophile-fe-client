import React from "react";
import { useState } from "react";

export const useQuantity = () => {
  const [qty, setQty] = React.useState<number>(1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => (qty > 0 ? setQty(qty - 1) : setQty(0));

  return { qty, increaseQty, decreaseQty };
};
