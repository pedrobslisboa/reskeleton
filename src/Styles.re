open Css;

let skeletonLoading =
  keyframes([
    (0, [backgroundPosition(`hv((pct(100.), pct(50.))))]),
    (100, [backgroundPosition(`hv((pct(0.), pct(50.))))]),
  ]);

let text = style([height(em(1.2)), transform(scale(1., 0.70))]);

let root =
  style([
    background(
      linearGradient(
        deg(90.),
        [(pct(25.), hex("f2f2f2")), (pct(37.), hex("e6e6e6")), (pct(63.), hex("f2f2f2"))],
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
    selector("> *", [visibility(hidden)]),
  ]);
