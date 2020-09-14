
/* AMD第一种导入，导出方式 */

// 导入模块不需要写明文件类型，也就是.js,不然会用另一种加载方式
/* define(['a','b'], function(a, b, a) {
  console.log('导入a模块内容', a)
  console.log('导入b模块内容', b)
}); */

/* AMD第二种导入，导出方式 */
define(function(require, exports, module) {
  const c = require('./c')
  console.log('c', c)
});