import { screen } from "@testing-library/react";
import { describe, test } from "vitest";
import { renderWithProviders } from "../../utils/test-utils";
import Subheader from "./Subheader";

describe("Subheader", () => {
  test("default sort option is Most Upvotes", () => {
    renderWithProviders(<Subheader />);

    const sortButton = screen.getByRole("button", {
      name: /Sort by : Most Upvotes/,
    });

    expect(sortButton).toBeInTheDocument();
  });

  test("add feedback button renders", () => {
    renderWithProviders(<Subheader />);

    const addFeedbackButton = screen.getByRole("link", {
      name: /Add Feedback/,
    });

    expect(addFeedbackButton).toHaveAttribute("href", "/newfeedback");
    expect(addFeedbackButton).toBeInTheDocument();
  });
});
