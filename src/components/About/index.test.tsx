import { render } from "@testing-library/react";
import { About } from ".";

test("Should  About image be on the page", () => {
  render(<About />);

  const aboutImg = document.querySelector(".aboutImg") as HTMLImageElement;

  expect(aboutImg.src).toContain("about_image");
});
