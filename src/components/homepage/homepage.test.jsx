import React from "react";
import { mount } from "enzyme";
import HomePage from "./HomePage";

describe("HomePage", () => {
  let mountedHomePage;
  const homePage = () => {
    if (!mountedHomePage) {
      mountedHomePage = mount(
        <HomePage />
      );
    }
    return mountedHomePage;
  };
  it("render CONTENT", () => {
    const h1 = homePage().find("h1");
    expect(h1.length).toBeGreaterThan(0);
  });
});
