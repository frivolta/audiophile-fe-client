import { useState } from "react";
import { useQuantity } from "../../hooks/useQuantity/useQuantity";
import { Button } from "../Button";
import { TextSubtitle } from "../Elements/typography";

interface QuantityFormProps {
  handleAddToCart: (qty: number) => void;
}

export const QuantityForm = ({ handleAddToCart }: QuantityFormProps) => {
  const { qty, increaseQty, decreaseQty } = useQuantity({ initialQuantity: 1 });
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex">
        <button
          className="bg-secondaryLight px-6 py-4 text-secondary group"
          onClick={decreaseQty}
        >
          <TextSubtitle
            className="group-hover:text-primary"
            data-testid="decrease"
          >
            -
          </TextSubtitle>
        </button>
        <div className="bg-secondaryLight px-6 py-4">
          <TextSubtitle className="opacity-100" data-testid="quantity">
            {qty}
          </TextSubtitle>
        </div>
        <button
          className="group bg-secondaryLight px-6 py-4 text-secondary"
          onClick={increaseQty}
        >
          <TextSubtitle
            className="group-hover:text-primary"
            data-testid="increase"
          >
            +
          </TextSubtitle>
        </button>
      </div>
      <div className="ml-4">
        <Button
          text="ADD TO CART"
          data-testid="add-to-cart"
          onClick={() => handleAddToCart(qty)}
        />
      </div>
    </div>
  );
};
