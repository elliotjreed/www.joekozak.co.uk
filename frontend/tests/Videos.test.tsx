import { shallow } from "enzyme";
import * as React from "react";
import Videos from "../src/components/Videos";

describe("Videos", (): void => {
  it("should render with main-content CSS class and contain video section text", (): void => {
    expect(shallow(<Videos />).exists(".main-content")).toBe(true);
    expect(shallow(<Videos />).text()).toContain("Some light relief and a sock");
  });
});
