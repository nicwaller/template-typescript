# WebStorm

Some useful settings are stored in `workspace.xml` so they aren't carried into version control. Make these changes manually.

## Use Yarn

- Open [Preferences | Languages & Frameworks | Node.js and NPM](jetbrains://WebStorm/settings?name=Languages+%26+Frameworks--Node.js+and+NPM)
- Change Package Manager to `yarn`

## TypeScript

WebStorm has the capability to compile .ts files as changes are made, and honestly it works pretty well for a solo developer. However, things start to get messy if you use both `tsc` AND WebStorm's built-in compilation. It's best to choose one or the other.

For a solo developer it's probably nice to use WebStorm's built-in TypeScript support, but for teams it's usually better to disable it because it can pollute the file structure with unexpected .js files that create very difficult-to-debug problems.

- Open [Preferences | Languages & Frameworks | TypeScript](jetbrains://WebStorm/settings?name=Languages+%26+Frameworks--TypeScript)
- Turn off "Recompile on changes"

## Pretty logging

I'm using `pino` for logging and `pino-pretty` to prettify the structured logging output for console usage. But I can't figure out a way to use the WebStorm debugger AND `pino-pretty` at the same time, so I end up with two different run configurations. Use the Node.js-style run config for debugging, or the npm-style run config for pretty output.
