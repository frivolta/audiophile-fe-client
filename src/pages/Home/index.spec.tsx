import { render, screen } from "@testing-library/react";
import { Home } from ".";

const mainComponentsIds = [
  "hero",
  "subscribe-btn",
  "categories",
  "preview-section",
  "preview-section-small",
  "preview-section-divided",
  "excerpt-best-gear",
  "footer",
];

describe("<Home/>", () => {
  it("correctly loads the home component", async () => {
    render(<Home />);
  });
  it("correctly shows all the core home sections", async () => {
    render(<Home />);
    mainComponentsIds.forEach((componentId) => {
      expect(screen.getByTestId(componentId)).toBeInTheDocument();
    });
  });
});
