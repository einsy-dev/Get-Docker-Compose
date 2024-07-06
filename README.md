# get-docker-compose

## Process of creating npx package

- mkdir folder_name
- cd folder_name
- npm init -y
- create bin/index.js with content

```
#! /usr/bin/env node
console.log("Hello, World!");
```

- add to package.json

```
"bin": {
	"your_package_name": "bin/index.js"
},
```

## To test it locally

```
npm i -g
npx <your_package_name>
```

## To publish

```
npm login - login to your npm accaunt
npm publish - publish your package
```

## To update

```
npm version <type>
```

### where type

```
patch <1.0.1>
minor <1.1.0>
major <2.0.0>
```

### and run

```
npm publish
```
