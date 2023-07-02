open Dogumentation.Config

@module("../logo.gif")
external logo: string = "default"

let config: config = {
  logo: logo,
}

start(~config, ())
