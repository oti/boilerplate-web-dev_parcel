# Parcel Web Dev Boilerplate

[Parcel](https://parceljs.org/) を使ったウェブサイト開発環境のボイラープレートです。

dependencies の過不足は適宜処理してください。

- HTML: Pug
- CSS: node-sass, Autoprefixer
- JS: TypeScript + Babel

Parcel がポリフィル指定をよしなにしてくれているので .babelrc ファイルは不要です。

を追加してください。

## development

Node.js v18.15.0 が必要です。

```bash
npm ci
npm start
```

`localhost:1234` が起動します。

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

が実行されます。

## format

変更して git に stage されたファイルは pre-commit 時に整形されます。
