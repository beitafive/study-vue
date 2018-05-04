# my-vue

> wuzq's vue-basics-course

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 安装sass并且使用sass
npm install --save-dev sass-loader
# 用cnpm下载node-sass 因为网络原因，npm会失败
cnpm install --save-dev node-sass
# 去webpack.base.conf.js文件 配置rules
{
  test: /\.sass$/,
  loaders: ['style', 'css', 'sass']
}
# 在vue文件中的style标签 增加 lang="scss" 即可
