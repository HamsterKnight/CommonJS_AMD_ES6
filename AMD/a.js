/* 第一种导入导出方式 */
// 如果模块不加载其他模块，只需要写一个函数或者对象或者基本值
define(function() {
  console.log('a被引用了')
  return {
    module: 'a',
    action: 'export'
  }
});
/* define('a');
define({name: 'a'}); */
