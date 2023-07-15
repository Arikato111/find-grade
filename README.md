# <p align="center">find-grade</p>

<p align="center">
<img alt="Github License" src="https://img.shields.io/github/license/Arikato111/find-grade" />
<img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/Arikato111/find-grade" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/Arikato111/find-grade" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/Arikato111/find-grade" />
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/Arikato111/find-grade" />
<img alt="repo size" src="https://img.shields.io/github/repo-size/Arikato111/find-grade" />
</p>

random one or many text


## Installing

Install with NPM
```
npm install find-grade
```
or install with Yarn
```
yarn add find-grade
```

## Example

### with `import`

```js
import findGrade from "find-grade";

let score = 60;
let result = findgrade(score);
console.log(result);
// output = 2
```

### with `require`

```js
const findGrade = require("find-grade").default;

let score = 60;
let result = findgrade(score);
console.log(result);
// output = 2
```