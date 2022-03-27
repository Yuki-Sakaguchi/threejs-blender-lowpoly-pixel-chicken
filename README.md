# threejs-blender-lowpoly-pixel-chicken
YouTubeを参考にBlenderで作ったglbファイルをthree.jsで表示する
テクスチャはドットの画像

## demo
https://yuki-sakaguchi.github.io/threejs-blender-lowpoly-pixel-chicken/dist/

## メモ
- 影をつけないようにフラットに表示したいので以下の設定にしてみた
  - `const light = new AmbientLight(0xFFFFFF, 1.0);`
  - DirectionalLight ではなく AmbientLight にしてます
- 色も辺だったので renderer の設定も削除した
  - `renderer.setClearColor(0x000000, 0);`
  - `renderer.physicallyCorrectLights = true;`


## 参考
https://www.youtube.com/watch?v=L4djRcxqmZQ