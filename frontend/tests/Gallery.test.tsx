import { shallow } from "enzyme";
import * as React from "react";
import Gallery from "../src/components/Gallery";

describe("Gallery", (): void => {
  it("should render with main-content CSS class and contain gallery title text", (): void => {
    expect(shallow(<Gallery />).exists(".main-content")).toBe(true);
    expect(shallow(<Gallery />).text()).toContain("A selection of photographic articles");
  });
});
