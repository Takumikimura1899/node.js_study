## nodemon をインストール

nodemon を使うとファイルが更新されるたびにリロードが走るようになる

## postman でエンドポイントに send したときにエラーになる場合

> app.use(express.json());

これを記述して json 形式を使用する事を明示する必要がある。
