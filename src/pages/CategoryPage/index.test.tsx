import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { CategoryPage } from ".";

describe("<CategoryPage/>", () => {
  it("correctly loads the category page component", async () => {
    render(<CategoryPage />);
  });
});
