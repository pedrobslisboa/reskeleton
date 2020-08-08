open BsStorybook.Story;

let _module = [%bs.raw "module"];

storiesOf("Elements | Button", _module)
->(
    add("Default", () =>
      <div className=Stories_Styles.wrapperDefault> <Reskeleton /> </div>
    ),
    add("Circle", () =>
      <div className=Stories_Styles.wrapperDefault>
        <Reskeleton variant=`circle />
      </div>
    ),
    add("Text", () =>
      <div className=Stories_Styles.wrapperTextVariant>
        <div className=Stories_Styles.wrapperTextSkeleton>
          <h1> <Reskeleton variant=`text /> </h1>
          <Reskeleton variant=`text count=4 />
          <Reskeleton variant=`text count=1 width="100px" />
        </div>
        <div className=Stories_Styles.wrapperText>
          <h1> {ReasonReact.string("REskeleton")} </h1>
          <span>
            {ReasonReact.string(
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis nisl faucibus ipsum pulvinar, porta volutpat augue euismod. Quisque nec turpis mattis, imperdiet sapien quis, vulputate lorem. In id dui odio. Vivamus pharetra hendrerit aliquam. Sed et fringilla magna. ",
             )}
          </span>
        </div>
      </div>
    ),
    add("Usage Example", () =>
      <>
        <div>
          <div className=Stories_Styles.wrapperUsage>
            <Reskeleton
              className=Stories_Styles.avatar
              variant=`circle
              width="50px"
              height="50px"
            />
            <div>
              <Reskeleton variant=`text width="100px" />
              <Reskeleton variant=`text width="60px" />
            </div>
          </div>
          <Reskeleton variant=`text count=3 width="200px" />
          <Reskeleton variant=`text width="200px" />
        </div>
        <div className=Stories_Styles.wrapperDefault>
          <Reskeleton
            className=Stories_Styles.thumb
            width="300px"
            height="300px"
          />
          <Reskeleton variant=`text count=2 />
          <Reskeleton variant=`text width="80%" />
        </div>
      </>
    ),
  );
