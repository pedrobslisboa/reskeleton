open Css

let skeletonLoading = keyframes(list{
  (0, list{backgroundPosition(#hv((pct(100.), pct(50.))))}),
  (100, list{backgroundPosition(#hv((pct(0.), pct(50.))))}),
})

let text = style(list{
  margin2(~v=em(0.1), ~h=zero),
  height(em(1.1)),
  transform(scale(1., 0.8)),
  fontSize(inherit_),
})

let root = style(list{
  background(
    linearGradient(
      deg(90.),
      list{(pct(25.), hex("f2f2f2")), (pct(37.), hex("e6e6e6")), (pct(63.), hex("f2f2f2"))},
    ),
  ),
  display(flexBox),
  alignItems(flexEnd),
  justifyContent(flexEnd),
  backgroundSize(size(pct(400.), pct(100.))),
  animationName(skeletonLoading),
  animationDuration(1500),
  animationTimingFunction(ease),
  animationIterationCount(infinite),
  selector("> *", list{visibility(hidden)}),
})
