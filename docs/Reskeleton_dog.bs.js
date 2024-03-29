// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Reskeleton = require("../src/Reskeleton.bs.js");
var Styles_doc = require("./Styles_doc.bs.js");
var Dog$Dogumentation = require("dogumentation/src/Dog.bs.js");

Dog$Dogumentation.addToCategory("Reskeleton", (function (param) {
        var addDog = param.addDog;
        Curry._2(addDog, "Default", (function (param) {
                return React.createElement("div", {
                            className: Styles_doc.wrapperDefault
                          }, React.createElement(Reskeleton.make, {
                                width: "300px"
                              }));
              }));
        Curry._2(addDog, "Text", (function (param) {
                var $$int = param.int;
                var size = Curry._2($$int, "font size", {
                      min: 0,
                      max: 100,
                      initial: 30,
                      step: 1
                    });
                return React.createElement("div", {
                            className: Styles_doc.wrapperTextVariant
                          }, React.createElement("div", {
                                className: Styles_doc.wrapperTextSkeleton
                              }, React.createElement("h1", undefined, React.createElement(Reskeleton.make, {
                                        variant: "text",
                                        width: "300px"
                                      })), React.createElement("div", {
                                    style: {
                                      fontSize: "" + String(Curry._2($$int, "font size", {
                                                min: 0,
                                                max: 100,
                                                initial: 30,
                                                step: 1
                                              })) + "px"
                                    }
                                  }, React.createElement(Reskeleton.make, {
                                        variant: "text",
                                        count: 6
                                      }), React.createElement(Reskeleton.make, {
                                        variant: "text",
                                        count: 1,
                                        width: "100px"
                                      }))), React.createElement("div", {
                                className: Styles_doc.wrapperText
                              }, React.createElement("h1", undefined, "REskeleton"), React.createElement("span", {
                                    style: {
                                      fontSize: "" + String(size) + "px"
                                    }
                                  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis nisl faucibus ipsum pulvinar, porta volutpat augue euismod. Quisque nec turpis mattis, imperdiet sapien quis, vulputate lorem. In id dui odio. Vivamus pharetra hendrerit aliquam. Sed et fringilla magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis nisl faucibus ipsum pulvinar, porta volutpat augue euismod. Quisque nec turpis mattis, imperdiet sapien quis, vulputate lorem. In id dui odio. Vivamus pharetra hendrerit aliquam. Sed et fringilla magna.")));
              }));
        Curry._2(addDog, "Usage Samples", (function (param) {
                return React.createElement("div", {
                            className: Styles_doc.wrapperDefault
                          }, React.createElement("div", undefined, React.createElement("div", {
                                    className: Styles_doc.profileWrapper
                                  }, React.createElement(Reskeleton.make, {
                                        className: Styles_doc.avatar,
                                        borderRadius: "50%",
                                        width: "50px",
                                        height: "50px"
                                      }), React.createElement("div", undefined, React.createElement(Reskeleton.make, {
                                            variant: "text",
                                            width: "100px"
                                          }), React.createElement(Reskeleton.make, {
                                            variant: "text",
                                            width: "60px"
                                          }))), React.createElement(Reskeleton.make, {
                                    variant: "text",
                                    count: 3,
                                    width: "200px"
                                  }), React.createElement(Reskeleton.make, {
                                    variant: "text",
                                    width: "200px"
                                  })), React.createElement("div", undefined, React.createElement(Reskeleton.make, {
                                    className: Styles_doc.thumb,
                                    width: "300px",
                                    height: "300px"
                                  }), React.createElement(Reskeleton.make, {
                                    variant: "text",
                                    count: 2
                                  }), React.createElement(Reskeleton.make, {
                                    variant: "text",
                                    width: "70%"
                                  })));
              }));
      }));

/*  Not a pure module */
