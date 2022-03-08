import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button />", () => {
  it("should be able to render correctly", () => {
    render(<Button label="Test1" />);

    expect(screen.getByText("Test1")).toBeTruthy();
  });
});
