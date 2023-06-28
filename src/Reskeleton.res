type state = {mutable count: int}
type variant = [#text | #block]

@react.component
let make = (
  ~className="",
  ~children=?,
  ~variant=#block,
  ~count=1,
  ~borderRadius="4px",
  ~width="100%",
  ~height="100%",
) =>
  switch variant {
  | #text => Array.make(count, ())->(arr => Array.mapi((index, _) =>
        <span
          key={"reskeleton_" ++ index->Belt.Int.toString}
          className={Cn.make([Styles.root, Styles.text, className])}
          style={ReactDOM.Style.make(~width, ())}>
          <span> {children->Utils.optionalChildren} </span>
        </span>
      , arr))->React.array

  | #block =>
    <div
      className={Cn.make([Styles.root, className])}
      style={ReactDOM.Style.make(~width, ~height, ~borderRadius, ())}>
      <div> {children->Utils.optionalChildren} </div>
    </div>
  }
