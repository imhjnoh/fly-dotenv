#!/usr/bin/env node
import setDotEnv from "../index.js";
import meow from "meow";

const cli = meow(
  `
	Usage
	  $ fly-dotenv <filename>     : specify the dotenv filename you want to use. (default is .env)
`,
  {
    importMeta: import.meta,
  }
);

setDotEnv(cli.input[0]);
