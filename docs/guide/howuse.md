---
title: '如何使用'
---

## 安装

> npm i gnt-ui or yarn add gnt-ui

## 使用

`import {Button} from 'gnt-ui';`

`export default () => {`
    &emsp;`return <>`
    &emsp;`<Button type='primary'>demo</Button>`
    &emsp;`</>`
`}`

## 源项目本地使用

### 下载

> git clone https://github.com/GDYG/GUI.git

### 开发调试

`yarn dev` - 启动项目, 开发调试

`yarn build:site` - 构建dumi说明文档, 构建文件夹名称(`docs-site`)

`yarn preview:site` - 本地预览打包后的文档

`yarn deploy:site` - 打包dumi说明文档和上传gh-pages

`yarn clean` - 清除组件打包文件lib esm dist

`yarn build` - 组件打包

`yarn test` - 组件测试
`yarn release` - 打包、发布、提交git、发布说明文档、打tag一体