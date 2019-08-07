# WebStorm

Some useful settings are stored in `workspace.xml` so they aren't carried into version control. Make these changes manually.

## Use Yarn

- Open [Preferences | Languages & Frameworks | Node.js and NPM](jetbrains://WebStorm/settings?name=Languages+%26+Frameworks--Node.js+and+NPM)
- Change Package Manager to `yarn`

## Pretty logging

I'm using `pino` for logging and `pino-pretty` to prettify the structured logging output for console usage. But I can't figure out a way to use the WebStorm debugger AND `pino-pretty` at the same time, so I end up with two different run configurations. Use the Node.js-style run config for debugging, or the npm-style run config for pretty output.
