## React 脚手架


### 项目结构

```

├── dist //打包文件
├── src //项目的主要目录
│   ├── action // action
│   ├── components // dumb组件
│   ├── containers // smart组件
│   ├── images // 项目图片
│   ├── reducers // reducers
│   ├── style // 样式文件
│   ├── index.js // 入口文件
│   ├── index.tpl // html模版文件
├── .babelrc // babel配置
├── .eslintrc // eslint配置
├── .gitignore // git忽略
├── package.json //依赖模块&配置信息
├── package-lock.json //锁定依赖树信息
├── postcss.config.js // postcss配置
├── webpack.config.js // webpack 基础配置
├── webpack.develop.js // webpack 开发配置
└── webpack.product.js//webpack打包配置

```

###运行
```
npm i
npm start
```

###打包
```
npm build
```