open Css;

let wrapperDefault = style([height(px(300)), width(px(300))]);
let wrapperUsage = style([display(flexBox)]);
let avatar = style([marginRight(px(20))]);
let thumb = style([marginTop(px(70)), marginBottom(px(20))]);
let wrapperTextVariant = style([display(flexBox), width(pct(100.))]);
let wrapperTextSkeleton =
  style([
    flexGrow(1.),
    flexShrink(1.),
    flexBasis(pct(0.)),
    marginLeft(px(30)),
  ]);
let wrapperText = wrapperTextSkeleton;
