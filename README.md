验证bug

webpack2 使用新的 watch 文件模式，文件更变，dev-server 将会触发重编译事件
而 vue-markdown-loader 是将生成的 .vue文件生放置 _cache 文件夹处，文件发生变动，触发多次编译！

流程图如下：
![image](https://cloud.githubusercontent.com/assets/3281438/24038554/e007426e-0b3c-11e7-8059-ad58e4bdfd08.png)
