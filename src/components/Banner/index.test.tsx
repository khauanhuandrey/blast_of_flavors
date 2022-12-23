import { render, Screen } from "@testing-library/react";
import { Banner } from ".";

test("Should banner image be on the page", () => {
  render(<Banner />);

  const bannerImg = document.querySelector(".blast-banner") as HTMLImageElement;
  expect(bannerImg.src).toContain("blast_banner");
});
