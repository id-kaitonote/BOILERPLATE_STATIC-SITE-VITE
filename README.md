# Static-Site-Boilerplate-Vite

## Contents

- [Static-Site-Boilerplate-Vite](#Static-Site-Boilerplate-Vite)
  - [Overview](#Overview)
  - [Features](#Features)
  - [Requirement](#Requirement)
  - [QuickStart](#QuickStart)
  - [Build](#Build)
  - [OtherScripts](#OtherScripts)
  - [Directory](#Directory)
  - [Licence](#Licence)

## Overview

Boilerplate for building static websites with Vite in the 
module bundler.


![html5](https://img.shields.io/badge/-HTML5-222.svg?logo=html5&style=flat-square)
![Dart Sass](https://img.shields.io/badge/-Dart%20Sass-222.svg?logo=sass&style=flat-square)
![TypeScript](https://img.shields.io/badge/-TypeScript-222.svg?logo=typescript&style=flat-square)
![ESLint](https://img.shields.io/badge/-ESLint-222.svg?logo=eslint&style=flat-square)
![Prettier](https://img.shields.io/badge/-Prettier-222.svg?logo=prettier&style=flat-square)
![Yarn](https://img.shields.io/badge/-Yarn-222.svg?logo=yarn&style=flat-square)


## Features
Vite + TypeScript + Dart Sass + Post CSS + FLOCSS + ESLint + Stylelint + Prettier + husky + lint-staged

## Requirement
``` bash
# OS
Microsoft Windows

# node
v16.14.0

# yarn
1.22.17
```

## Start

``` bash
# Install
yarn

# Development
yarn dev
```


## Build

``` bash
# Build
yarn build
```


## OtherScripts

``` bash
# Preview
yarn preview

# Typescript Lint
yarn lint:ts

# Typescript Format
yarn format:ts

# Style Lint
yarn lint:scss

# Style Format
yarn format:css
```

## Directory

The source code for development is managed directly under "app", and "dist" is created directly under "app" when build is performed. If you place it in "public", you can output to "dist" while maintaining the directory structure and file names.


```bash
├─┬ .husky
├─┬ app
│ └── public
│ └── src
│   └── index.html
│   └── about
│   └── assets
│     └── images
│     └── scripts
│     └── styles
├── .browserslistrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
└── yarn.lock
```

## Licence

MIT
