open Css

let wrapperDefault = style(list{height(px(300)), display(flexBox), gridGap(px(20))})
let wrapperUsage = style(list{display(flexBox)})
let profileWrapper = style(list{display(flexBox), alignItems(center)})
let avatar = style(list{marginRight(px(20))})
let thumb = style(list{marginBottom(px(20))})
let wrapperTextVariant = style(list{display(flexBox), width(pct(100.)), fontSize(px(30))})
let wrapperTextSkeleton = style(list{
  flexGrow(1.),
  flexShrink(1.),
  flexBasis(pct(0.)),
  marginLeft(px(30)),
})
let wrapperText = wrapperTextSkeleton
