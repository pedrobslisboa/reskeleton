/* Component_test.re */

open Jest;
open Expect;
open ReactTestingLibrary;

[@bs.get] external firstChild: Dom.element => Dom.node = "firstChild";

describe("getByText", () => {
  test("should render with className", () =>
    <Reskeleton className="test-class-name" /> |> render(_) |> container |> expect |> toMatchSnapshot
  );

  test("should render", () =>
    <Reskeleton variant=`block /> |> render(_) |> container |> expect |> toMatchSnapshot
  );

  test("should render as text", () =>
    <Reskeleton variant=`text /> |> render(_) |> container |> expect |> toMatchSnapshot
  );

  test("should render as text", () =>
    <Reskeleton variant=`text count=4 /> |> render(_) |> container |> expect |> toMatchSnapshot
  );
});
