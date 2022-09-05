## 可视化页面搭建

安装：
```
npm i
```

启动项目：
```
npm run start
```

想要运行本项目，你还需要同时开启：
- [server（可视化页面搭建服务端）](https://github.com/lqt0327/server)
- [h5-view（可视化页面搭建h5发布页面）](https://github.com/lqt0327/h5-view)

## 介绍
基于React技术栈构建一个可视化页面搭建平台，帮助用户在没有任何编程基础的情况下，搭建一个线上可见的页面。

docker run -it -d --name graduationProject --privileged -p 3000:3000 -v  /Users/luoqintai/Desktop/visual-editor/graduationProject:/app/visual-editor node:14.17.0 /bin/bash -c "cd /app/visual-editor && node -v && npm install && npm run start"

docker run -it --name graduationProject 3b7ecd51 /bin/bash

docker run -it -d --name server --privileged -p 3030:3030 -v  /Users/luoqintai/Desktop/visual-editor/server:/app/visual-editor node:14.17.0 /bin/bash -c "cd /app/visual-editor && npm run start:dev"

## changelog
* `2022.8.25`
 + Features
 + 1. 元素拖动功能完善