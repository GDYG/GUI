---
title: Button 按钮
nav: 
    path: '/component' 
---

# Button 按钮

用户点击事件

# 何时使用

* 需要用户点击交互事件时使用。

## 代码演示

### 基本用法

<code src="./demo/basic.tsx" title='4种按钮类型' desc="支持4中按钮样式, primary、dashed、link、text"></code>

### 加载中状态

<code src="./demo/loading.tsx" title='加载中状态' desc="添加 loading 属性即可让按钮处于加载状态"></code>

### 按钮前缀图标

<code src="./demo/previcon.tsx" title='前缀图标' desc="添加 icon 即可自定义按钮图标"></code>

## API

|   名称    |     描述     |      类型     |    默认值     |
|  -------   |    ------  | ------------ | ------------ | 
|   type |   button样式   |  'primary' \| 'dashed' \| 'link' \| 'text'  | 'primary' |
|   loading | 是否是加载态  |   boolean   |   false   |
|   onClick | 点击事件  |   MouseEventHandler  |   --   |
|   icon  |   前缀图标   |  React.ReactNode | --   |



