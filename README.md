![Reduxの概念](public/riadAin.gif)
![UI](public/UI.jpg)

# Redux を使ってショッピングカートアプリを作成

Redux はアプリケーション全体の状態を管理するためのシステム
Redux Toolkit は、Redux を使った開発を簡単にするためのツール
Hooks は、Redux の状態にアクセスしたり、Redux を通じてアクションをディスパッチしたりするためのインターフェースを関数コンポーネントに提供する

## Redux を使用した状態管理

Redux 状態管理ライブラリ。。Redux を使うことで、コンポーネント間で状態を共有しやすくなるが、設定やボイラープレート（繰り返し書くコード）が多いというデメリットもある。

## Redux Toolkit の基礎

Redux の設定、アクションの定義、リデューサーの作成などに関するボイラープレートを減らし、効率的な開発ができる。
Redux Toolkit を使うことで、Redux の強力な状態管理機能をよりシンプルにできる。

## Hooks

関数コンポーネント内で状態やライフサイクルなどの React の機能を使うための API。
useState や useEffect などの Hooks を使うことで、クラスコンポーネントを使わずに状態管理や副作用の処理が可能になる。
Redux と組み合わせることで、useSelector や useDispatch といった Hooks を通じて Redux の状態を操作したり、アクションをディスパッチできる。
