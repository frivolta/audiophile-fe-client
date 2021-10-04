import { render, within, screen, waitFor } from "@testing-library/react";
import { CategoryPage } from ".";
import { MemoryRouter } from "react-router-dom";
import { GetProductsApi } from "../../api/products";
import { product } from "./db.product";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "earphones",
  }),
}));

let id = ["/category/earphones"];
const Component: React.FC = () => (
  <MemoryRouter initialEntries={id}>
    <CategoryPage />
  </MemoryRouter>
);

describe("<CategoryPage/>", () => {
  it("correctly loads the category page component", async () => {
    render(<Component />);
  });

  it("correctly loads the category title", async () => {
    const { getByTestId } = render(<Component />);
    const { getByText } = within(getByTestId("header"));
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(getByText("earphones")).toBeInTheDocument();
  });

  it("shows page core elements", async () => {
    render(<Component />);
    expect(screen.getByTestId("categories")).toBeInTheDocument();
    expect(screen.getByTestId("excerpt-best-gear")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
  it("correctly renders products", async () => {
    render(<Component />);
    await waitFor(() => screen.getByText(product.name));
    await waitFor(() => screen.getByTestId(product.slug));
    expect(screen.getByTestId(product.slug)).toBeInTheDocument();
  });
});
