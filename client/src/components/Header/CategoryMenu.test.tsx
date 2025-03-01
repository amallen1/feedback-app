import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { renderWithProviders } from "../../utils/test-utils";
import CategoryMenu from "./CategoryMenu";

describe("Testing the category menu", () => {
  test("Renders category buttons and verifies initial aria-pressed state", () => {
    renderWithProviders(<CategoryMenu />);

    const buttonNames = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

    buttonNames.forEach((name) => {
      const button = screen.getByText(name);
      expect(button).toBeInTheDocument();
    });

    expect(screen.getByRole('button', {name: "All"})).toHaveAttribute("aria-pressed", "true");
  });

  test("Updates category selection and aria-pressed on button click", () => {
    renderWithProviders(<CategoryMenu />);

    const featureButton = screen.getByRole("button", { name: "Feature" });
    const allButton = screen.getByRole("button", { name: "All" });

    userEvent.click(featureButton);
    expect(featureButton).toHaveAttribute("aria-pressed", "true");
    expect(allButton).toHaveAttribute("aria-pressed", "false");
  });
});
