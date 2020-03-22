import { shallow } from "enzyme";
import * as React from "react";
import { Button } from "../src/components/Button";

describe("Button", (): void => {
  it("should render button with text", (): void => {
    expect(shallow(<Button text="I am text" disabled={false} />).exists(".button")).toBe(true);
    expect(shallow(<Button text="I am text" disabled={false} />).exists(".submit-button")).toBe(true);
    expect(shallow(<Button text="I am text" disabled={false} />).text()).toContain("I am text");
  });
});
