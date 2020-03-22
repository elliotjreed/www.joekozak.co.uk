import { shallow } from "enzyme";
import * as React from "react";
import Bookings from "../src/components/Bookings";

describe("Bookings", (): void => {
  it("should render with main-content CSS class and contain text", (): void => {
    expect(shallow(<Bookings />).exists(".main-content")).toBe(true);
    expect(shallow(<Bookings />).text()).toContain("Bookings");
    expect(shallow(<Bookings />).text()).toContain("I am available for a number of roles and shows, including");
  });
});
