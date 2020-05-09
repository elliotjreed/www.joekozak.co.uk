import { shallow } from "enzyme";
import * as React from "react";
import { Link } from "react-router-dom";
import Sitemap from "../src/components/Sitemap";

describe("Sitemap", (): void => {
  it("should render with main-content CSS class and contain sitemap text and links", (): void => {
    expect(shallow(<Sitemap />).exists(".main-content")).toBe(true);
    expect(shallow(<Sitemap />).text()).toContain("Sitemap");
    expect(shallow(<Sitemap />).text()).toContain("If the website menu wasn't enough for you, here's a sitemap");
    expect(shallow(<Sitemap />).find(Link)).toHaveLength(7);
  });
});
