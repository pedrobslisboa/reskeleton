'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var React = require("react");
var Reskeleton = require("../src/Reskeleton.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");

Jest.describe("getByText", (function (param) {
        Jest.test("should render with className", (function (param) {
                return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(Reskeleton.make, {
                                        className: "test-class-name"
                                      })).container));
              }));
        Jest.test("should render", (function (param) {
                return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(Reskeleton.make, {
                                        variant: /* block */888960333
                                      })).container));
              }));
        Jest.test("should render as text", (function (param) {
                return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(Reskeleton.make, {
                                        variant: /* text */-856044371
                                      })).container));
              }));
        return Jest.test("should render as text", (function (param) {
                      return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(Reskeleton.make, {
                                              variant: /* text */-856044371,
                                              count: 4
                                            })).container));
                    }));
      }));

/*  Not a pure module */
