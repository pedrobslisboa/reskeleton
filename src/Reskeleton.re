type variant = [ | `text | `block | `circle];

[@react.component]
let make =
    (
      ~className="",
      ~children=?,
      ~variant=`block,
      ~count=1,
      ~radius=Css.(px(4)),
      ~width="100%",
      ~height="100%",
    ) => {
  switch (variant) {
  | `text =>
    ReasonReact.array(
      Array.make(
        count,
        <span
          className={Cn.fromList([Styles.root, Styles.text, className])}
          style={ReactDOM.Style.make(~width, ())}>
          <span> {children |> Utils.optionalChildren} </span>
        </span>,
      ),
    )
  | `block
  | `circle =>
    <div
      className={Cn.fromList([
        Styles.root,
        switch (variant) {
        | `circle => Styles.circle
        | `block => Styles.block(~radius)
        | `text => ""
        },
        className,
      ])}
      style={ReactDOM.Style.make(~width, ~height, ())}>
      <div> {children |> Utils.optionalChildren} </div>
    </div>
  };
};
