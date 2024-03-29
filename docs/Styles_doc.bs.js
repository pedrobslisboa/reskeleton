// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css-emotion/src/Css.bs.js");
var Curry = require("rescript/lib/js/curry.js");

var wrapperDefault = Curry._1(Css.style, {
      hd: Css.height(Css.px(300)),
      tl: {
        hd: Css.display(Css.flexBox),
        tl: {
          hd: Css.gridGap(Css.px(20)),
          tl: /* [] */0
        }
      }
    });

var wrapperUsage = Curry._1(Css.style, {
      hd: Css.display(Css.flexBox),
      tl: /* [] */0
    });

var profileWrapper = Curry._1(Css.style, {
      hd: Css.display(Css.flexBox),
      tl: {
        hd: Css.alignItems(Css.center),
        tl: /* [] */0
      }
    });

var avatar = Curry._1(Css.style, {
      hd: Css.marginRight(Css.px(20)),
      tl: /* [] */0
    });

var thumb = Curry._1(Css.style, {
      hd: Css.marginBottom(Css.px(20)),
      tl: /* [] */0
    });

var wrapperTextVariant = Curry._1(Css.style, {
      hd: Css.display(Css.flexBox),
      tl: {
        hd: Css.width(Css.pct(100)),
        tl: {
          hd: Css.fontSize(Css.px(30)),
          tl: /* [] */0
        }
      }
    });

var wrapperTextSkeleton = Curry._1(Css.style, {
      hd: Css.flexGrow(1),
      tl: {
        hd: Css.flexShrink(1),
        tl: {
          hd: Css.flexBasis(Css.pct(0)),
          tl: {
            hd: Css.marginLeft(Css.px(30)),
            tl: /* [] */0
          }
        }
      }
    });

var wrapperText = wrapperTextSkeleton;

exports.wrapperDefault = wrapperDefault;
exports.wrapperUsage = wrapperUsage;
exports.profileWrapper = profileWrapper;
exports.avatar = avatar;
exports.thumb = thumb;
exports.wrapperTextVariant = wrapperTextVariant;
exports.wrapperTextSkeleton = wrapperTextSkeleton;
exports.wrapperText = wrapperText;
/* wrapperDefault Not a pure module */
