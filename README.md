# threejs-blender-lowpoly-pixel-chicken
YouTubeを参考にBlenderで作ったglbファイルをthree.jsで表示する
テクスチャはドットの画像

https://user-images.githubusercontent.com/16290220/160287434-d744b4df-846e-4900-a9ee-c1cba93aeb13.mov


## demo
https://yuki-sakaguchi.github.io/threejs-blender-lowpoly-pixel-chicken/dist/

## メモ
- 影をつけないようにフラットに表示したいので以下の設定にしてみた
  - `const light = new AmbientLight(0xFFFFFF, 1.0);`
  - DirectionalLight ではなく AmbientLight にしてます
- 色も辺だったので renderer の設定も削除した
  - `renderer.setClearColor(0x000000, 0);`
  - `renderer.physicallyCorrectLights = true;`
- 白く塗ったところを透明にする Shader を Blender で設定していたが、それが反映されない
  - glTF, glb には Shader は反映されないということなのでちゃんと透明にするか、テクスチャ自体を透明にするかする必要があるみたい


## 参考
https://www.youtube.com/watch?v=L4djRcxqmZQ
