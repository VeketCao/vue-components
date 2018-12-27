
主要实现功能：项目+独立组件（从项目中分离出来，单独编译）

编译所有组件：
npm run pkg

编译项目
npm run start



#目录结构
```
├── dist                                  # 项目打包压缩编译目录
├── node_modules                          # node.js模块包文件夹
├── src                                   # 项目源码，开发目录。
  └──css                                  # 样式文件
  └──fonts                                # 字体文件
  └──html                                 # 入口html文件
  └──img                                  # 图片
  └──js                                   # 项目js模块，
    └──entry                              # JS入口文件，文件名对应../html目录下的html文件的文件名
    └──lang                               # 多语言
    └──lib                                # 第三方库文件
    └──pages                              # 页面
  └──pkg                                  # 独立组件，和项目分离的组件，单独编译
├── static                                # 静态资源文件。
├── zip                                   # 压缩备份项目。
├── .babelrc                              # babel编译规则
├── .gitignore                            # GIT忽略的目录或文件
├── gulpfile                              # 备份压缩项目配置文件
├── package.json                          # NPM包管理配置文件，描述了一个NPM包的所有相关信息，包括作者、简介、包依赖、构建等信息。
├── README.md                             # 显目说明文件，现在你看到的这份文档，就是这个文件下写出来的。
├── webpack-dev-server.config.babel.js    # 开发构建配置文件
└── webpack-production.config.babel.js    # 生产构建配置文件
```