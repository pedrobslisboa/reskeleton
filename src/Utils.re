let optionalChildren = children =>
  switch (children) {
  | Some(children) => children
  | None => React.string("")
  };
