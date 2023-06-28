open Reshowcase.Entry

demo(({addCategory}) => {
  addCategory("Reskeleton", ({addDemo}) => {
    addDemo(
      "Default",
      _ =>
        <div className=Styles_doc.wrapperDefault>
          <Reskeleton width="300px" />
        </div>,
    )

    addDemo(
      "Text",
      ({int}) =>
        <div className=Styles_doc.wrapperTextVariant>
          <div className=Styles_doc.wrapperTextSkeleton>
            <h1>
              <Reskeleton variant=#text width="300px" />
            </h1>
            <div
              style={ReactDOM.Style.make(
                ~fontSize={
                  `${int(
                      "font size",
                      {min: 0, max: 100, initial: 30, step: 1},
                    )->Belt.Int.toString}px`
                },
                (),
              )}>
              <Reskeleton variant=#text count=6 />
              <Reskeleton variant=#text count=1 width="100px" />
            </div>
          </div>
          <div className=Styles_doc.wrapperText>
            <h1> {React.string("REskeleton")} </h1>
            <span
              style={ReactDOM.Style.make(
                ~fontSize=// Handles can be strings, ints, floats and booleans

                {
                  let size = int("font size", {min: 0, max: 100, initial: 30, step: 1})
                  `${size->Belt.Int.toString}px`
                },
                (),
              )}>
              {React.string(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis nisl faucibus ipsum pulvinar, porta volutpat augue euismod. Quisque nec turpis mattis, imperdiet sapien quis, vulputate lorem. In id dui odio. Vivamus pharetra hendrerit aliquam. Sed et fringilla magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis nisl faucibus ipsum pulvinar, porta volutpat augue euismod. Quisque nec turpis mattis, imperdiet sapien quis, vulputate lorem. In id dui odio. Vivamus pharetra hendrerit aliquam. Sed et fringilla magna.",
              )}
            </span>
          </div>
        </div>,
    )

    addDemo(
      "Usage Samples",
      _ =>
        <div className=Styles_doc.wrapperDefault>
          <div>
            <div className=Styles_doc.profileWrapper>
              <Reskeleton
                className=Styles_doc.avatar width="50px" height="50px" borderRadius="50%"
              />
              <div>
                <Reskeleton variant=#text width="100px" />
                <Reskeleton variant=#text width="60px" />
              </div>
            </div>
            <Reskeleton variant=#text count=3 width="200px" />
            <Reskeleton variant=#text width="200px" />
          </div>
          <div>
            <Reskeleton className=Styles_doc.thumb width="300px" height="300px" />
            <Reskeleton variant=#text count=2 />
            <Reskeleton variant=#text width="70%" />
          </div>
        </div>,
    )
  })
})

start()
