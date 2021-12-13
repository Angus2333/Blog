import { defineConfig } from 'umi';
import routes from './config/router';
import {resolve} from 'path'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history:{type:'hash'},
  hash:true,
  title:'学习吧',
  routes:routes,
  dva:{skipModelValidate:true},
  ddl:false,
  targets:{
    chrome:60
  },
  define:{
    API_PREFIX:''
  },
  //引入文件方便一些
  alias:{
    '@':resolve(__dirname,'./src/')
  },
  lessLoader:{
    javascriptEnabled:true
  },
  cssLoader:{
    localsConvention:'camelCase'
  },
  extraBabelPlugins:[
    [
      'import',
      {
        //lodash的按需加载
        libraryName:'lodash',
        libraryDirectory:'',
        camel2DashComponentName:false
      },
      'lodash'
    ]
  ],
  fastRefresh: {},
});
