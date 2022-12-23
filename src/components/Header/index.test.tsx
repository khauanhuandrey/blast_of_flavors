import { render, screen } from "@testing-library/react";
import { MemoryRouter as Navigation } from "react-router-dom";
import { Header } from ".";

test("Should logo image be on the page", () => {
  render(
    <Navigation>
      <Header />
    </Navigation>
  );

  const logoImg = document.querySelector(".logo") as HTMLImageElement;
  expect(logoImg.src).toContain("blast_logo");
});

test("Should Shopping Cart Icon be on the page", () => {
  render(
    <Navigation>
      <Header />
    </Navigation>
  );

  const cartIcon = document.querySelector(
    ".material-symbols-outlined"
  ) as HTMLSpanElement;
  expect(cartIcon).toBeInTheDocument();
});
