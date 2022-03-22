## nodemon をインストール

nodemon を使うとファイルが更新されるたびにリロードが走るようになる

## postman でエンドポイントに send したときにエラーになる場合

> app.use(express.json());

これを記述して json 形式を使用する事を明示する必要がある。

## 任意の値を指定する場合

> app.put("/api/customers/:id")

このような感じで:を付ける
