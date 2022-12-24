import { render } from "@testing-library/react";
import { BlastCarousel } from ".";

test("Should cake slice image be in the BlastCarousel component", () => {
  render(<BlastCarousel />);

  const cakeSliceImg = document.querySelector(
    ".cake-slice"
  ) as HTMLImageElement;
  expect(cakeSliceImg.src).toContain("cake_slice");
});

test("Should cake slice box image be in the BlastCarousel component", () => {
  render(<BlastCarousel />);

  const cakeSliceBoxImg = document.querySelector(
    ".cake-slice-box"
  ) as HTMLImageElement;
  expect(cakeSliceBoxImg.src).toContain("cake_slice_box");
});

test("Should custom cupcake image be in the BlastCarousel component", () => {
  render(<BlastCarousel />);

  const customCupcakeImg = document.querySelector(
    ".custom-cupcakes"
  ) as HTMLImageElement;
  expect(customCupcakeImg.src).toContain("custom_cupcakes");
});

test("Should passion fruit candy image be in the BlastCarousel component", () => {
  render(<BlastCarousel />);

  const passionFruitCandyImg = document.querySelector(
    ".passion-fruit-candy"
  ) as HTMLImageElement;
  expect(passionFruitCandyImg.src).toContain("passion_fruit_candy");
});

test("Should brigadier boxes image be in the BlastCarousel component", () => {
  render(<BlastCarousel />);

  const brigadierBoxesImg = document.querySelector(
    ".brigadier-boxes"
  ) as HTMLImageElement;
  expect(brigadierBoxesImg.src).toContain("brigadier_boxes");
});
