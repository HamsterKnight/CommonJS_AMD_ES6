/* 
define(function(require, exports, module) {
  // 同步引入，只有一个模块引入完成，才会执行引入下一个模块
  const b = require('./b')
  const c = require('./c')
  
  console.log('c', c)
}); */
define(function(require, exports, module) {
  // 异步引入，只有一个模块引入完成，才会执行引入下一个模块
  require.async('./b', function(b) {
    console.log('b', b)
  })
  require.async('./c', function (c) {
    console.log('c', c)
  })
});