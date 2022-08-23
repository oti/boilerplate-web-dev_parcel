# Parcel Web Dev Boilerplate

[Parcel](https://parceljs.org/) を使ったウェブサイト開発環境のボイラープレートです。

dependencies の過不足は適宜処理してください。

- HTML: Pug
- CSS: node-sass, Autoprefixer
- JS: TypeScript + Babel

Parcel がポリフィル指定をよしなにしてくれているので .babelrc ファイルは不要です。

を追加してください。

## development

Node.js v16.16.0 が必要です。

```bash
npm ci
npm start
```

`localhost:1234` が起動します。

複数のエントリーポイントを扱う場合は下記のように glob を利用してください。

```
parcel src/*.pug
```

## build

```bash
npm run build
```

`dist/` にビルドされます。

## test

```bash
npm run test
```

- markuplint
- stylelint
- html-validator

が実行されます。

## format

基本的に触ったファイルなら pre-commit 時に整形されます。

**全てのファイルを強制的に整形する場合**は下記のコマンドを実行してください。

```bash
npm run prettier
```

整形ルールの設定ファイルはありません。Prettier のデフォルトに従います。
