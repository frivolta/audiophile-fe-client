import { render, screen, fireEvent } from "@testing-library/react";
import { QuantityForm } from ".";
import { CartContextProvider } from "../../hooks/useCart/useCart";

const handleAddToCart = jest.fn();

const Component: React.FC = () => (
  <CartContextProvider>
    <QuantityForm handleAddToCart={handleAddToCart} />
  </CartContextProvider>
);

describe("<QuantityForm/>", () => {
  it("shows initial quantity", () => {
    render(<Component />);
    expect(screen.getByTestId("quantity")).toBeInTheDocument();
    expect(screen.getByTestId("quantity")).toHaveTextContent("1");
  });
  it("increase quantity when button is clicked", () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId("increase"));
    fireEvent.click(screen.getByTestId("increase"));
    expect(screen.getByTestId("quantity")).toHaveTextContent("3");
  });
  it("decrease quantity when button is clicked", () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId("increase"));
    fireEvent.click(screen.getByTestId("decrease"));
    expect(screen.getByTestId("quantity")).toHaveTextContent("1");
  });
  it("cannot decrease quantity if quantity is 1", () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId("decrease"));
    fireEvent.click(screen.getByTestId("decrease"));
    expect(screen.getByTestId("quantity")).toHaveTextContent("1");
  });
  it("cannot decrease quantity if quantity is 1", () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId("decrease"));
    fireEvent.click(screen.getByTestId("decrease"));
    expect(screen.getByTestId("quantity")).toHaveTextContent("1");
  });
  it("calls add to cart action if add to cart button is clicked", () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId("add-to-cart"));
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(handleAddToCart).toHaveBeenCalledWith(1);
  });
});
