
[@react.component]
let make =
    (
      ~className="",
      ~children=?,
      ~variant=`block,
      ~count=1,
      ~borderRadius="4px",
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
  | `block =>
    <div
      className={Cn.fromList([
        Styles.root,
        className,
      ])}
      style={ReactDOM.Style.make(
        ~width,
        ~height,
        ~borderRadius,
        (),
      )}>
      <div> {children |> Utils.optionalChildren} </div>
    </div>
  };
};
