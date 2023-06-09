
## 複数名の命名規則

変数名に複数形を使用したい場合には「単数形 + List 」を使用する

```tsx
// NG
cats
children
cities

// OK
catList
childList
cityList
```


## named export

関数や変数を export する際は基本的には default export は使用せず named export を使用する。

```tsx
// NG
// src/components/Component.ts
const Component = () => {
	// 処理
}
export default Component

// 呼び出し側
import Component from "src/components/Component";

// OK
// src/components/Component.ts
export const Component = () => {
	// 処理
}
export default Component

// 呼び出し側
import {Component} from "src/components/Component";

```

## React.xxx

基本的に `React.xxx` の記法は使用せず、`import { xxx } from "react"` を使用する。

```tsx
// NG
import React from "react";

const Component = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 処理
  };
};

// OK
import React, { ChangeEvent } from "react";

const Component = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 処理
  };
};
```

## props の書き方

props を受け取る場合は展開して使用する（destructure するともいう）。

```tsx
// NG
const Component = (props: Props) => {
  return <p>{props.label}</p>;
};

// OK
const Component = ({ label }: Props) => {
  return <p>{label}</p>;
};
```

## JSX.Element の有無

コンポーネントの戻り値は書かないこととする。

```tsx
// NG
const Component = (): JSX.Element => {
  return <p>hello</p>;
};

// OK
const Component = () => {
  return <p>hello</p>;
};
```

## インポートのパス

インポートのパスは絶対パスを使うこととする。

```
ディレクトリ構成の例
src
├── App.tsx
└── components
    ├── mypage
    │   └── Avatar.tsx
    └── top
        ├── TodoList.tsx
        └── TodoLists.tsx
```

```tsx
// TodoLists.tsx 内のコード

// NG
import TodoList from "./TodoList";
import Avatar from "../mypage/Avatar";

// OK
import TodoList from "@/components/top/TodoList";
import Avatar from "@/components/mypage/Avatar";
```

## Spacer の使用

基本的に、要素間のスペースはどちらにも mergin 等を持たせずに、`components/common/Spacer.tsx` を使用する

## Storybook の作成

1コンポーネントに対して、最低1つ Storybook ファイルを作成する
```
{Component}
├ index.tsx
└ index.stories.tsx
```
