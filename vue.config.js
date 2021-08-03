// module.exports = {
//   configureWebpack: {
//     resolve:{
//       extensions:[],//配置后缀名
//       alias:{
//         'assets':'@/assets',
//         'common':'@/common',
//         'components':'@/components',
//         'network':'@/network',
//         'views':'@/views',
//       }
//     }
//   }
// }
const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
 
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('./src/components'))
            .set('assets', resolve('./src/assets'))
            .set('common', resolve('./src/common'))
            .set('network', resolve('./src/network'))
            .set('views', resolve('./src/views'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
    },

}
