type state = {mutable count: int};

[@react.component]
let make = (~className="", ~children=?, ~variant=`block, ~count=1, ~borderRadius="4px", ~width="100%", ~height="100%") =>
  switch (variant) {
  | `text =>
    Array.make(count, ())
    ->(
        arr =>
          Array.mapi(
            (index, _) =>
              <span
                key={j|teste_$index|j}
                className={Cn.fromList([Styles.root, Styles.text, className])}
                style={ReactDOM.Style.make(~width, ())}>
                <span> {children |> Utils.optionalChildren} </span>
              </span>,
            arr,
          )
      )
    ->ReasonReact.array

  | `block =>
    <div
      className={Cn.fromList([Styles.root, className])}
      style={ReactDOM.Style.make(~width, ~height, ~borderRadius, ())}>
      <div> {children |> Utils.optionalChildren} </div>
    </div>
  };
