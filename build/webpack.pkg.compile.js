/**
 * 编译组件
 * @author veket
 */
'use strict'
const path = require('path')
const webpack = require('webpack')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const glob = require('glob');
const buildPath = path.resolve(process.cwd(),'dist');
const pkgDir = path.resolve(process.cwd(),'pkg');
const nodeModulesPath = path.resolve(process.cwd(),'node_modules');
const utils = require('./utils');
const entryFiles = glob.sync(`${pkgDir}/*`);
process.env.NODE_ENV = 'production';

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let getWebpckConfig = (componentName,_entry)=>{

    let webpackConfig = {
        entry:_entry,
        output: {
            path:buildPath,
            filename:'[name]/[name].min.js',
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': `${nodeModulesPath}/vue/dist/vue.js`,
                '@':`${pkgDir}`,
            }
        },
        externals: {
            vue: 'vue',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        esModule: false, // vue-loader v13 更新 默认值为 true v12及之前版本为 false, 此项配置影响 vue 自身异步组件写法以及 webpack 打包结果
                        loaders: utils.cssLoaders({
                            sourceMap: true,
                            extract: false          // css 不做提取
                        }),
                        transformToRequire: {
                            video: 'src',
                            source: 'src',
                            img: 'src',
                            image: 'xlink:href'
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [resolve('pkg')]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'dist/',
                        name: componentName+'/[name].[ext]',
                    }
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'dist/',
                        name: componentName+'/[name].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'dist/',
                        name: componentName+'/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: false,
                sourceMap: true
            }),
            new OptimizeCSSPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            })
        ]
    }

    return webpackConfig;
}


entryFiles.forEach((filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('/')+1,filePath.length);
    let entry = {};
    entry[filename] = `${filePath}/${filename}.vue`;

    var compiler = webpack(getWebpckConfig(filename,entry));
    console.log('start compiler componnet:'+filename);
    compiler.run(function(err, stats){
        console.log('end compiler componnet:'+filename);
    });
});

