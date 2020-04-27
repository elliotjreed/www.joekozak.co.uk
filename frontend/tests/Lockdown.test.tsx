import { shallow } from "enzyme";
import * as React from "react";
import Lockdown from "../src/components/Lockdown";

describe("Lockdown", (): void => {
  it("should render with main-content CSS class and contain lockdown section text", (): void => {
    expect(shallow(<Lockdown />).exists(".main-content")).toBe(true);
    expect(shallow(<Lockdown />).text()).toContain("Lockdown");
  });
});
