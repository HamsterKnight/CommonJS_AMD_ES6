CommonJS规范
使用exports导出模块，require导入模块

具体规范
  1. 如果一个js文件中使用了exports或者require, 那么该js文件是一个模块
  2. 模块内容所有变量都不会对全局变量进行污染
  3. 模块如果需要暴露一些api给外界使用, 使用exports，exports是一个空对象，将你需要暴露的内容挂载在exports上
  4. 导入模块，使用require
  5. 只有执行到require，才会加载模块
  6. nodejs中导入模块使用相对路径，并且必须以./或者../开头
  7. 定义的模块的时候，会设置exports = module.exports
  8. 最终导出的是module.exports
  9. 在一个模块中多次导入一个模块，多次导入的模块使用的都是同一个对象，因为模块导入会执行当前当如模块的内容，存入缓存中


  AMD规范

  AMD 异步模块加载机制
  require.js实现了AMD规范
  在AMD中导出和导出模块的代码都必须放置在define函数中,(使用require加载模块的则不用放置在define中)

  ```js
  // 第一种导入导出方式
  define([依赖的模块, function(模块名称列表) {
    //模块内部代码
    return 导出的内容
  })
  ```
  重复导入的模块，会使用缓存中的内容，不会重复导入，因为模块导入前会先去缓存中找。


  ```js
  // 第二种导入导出方式, 跟ComomonJs很像
  define(function(require, exports, module) {
    module.exports = { }
    exports = module.exports
    require(导入的模块)
    // 如果没有直接写明return， 那么module.exports为最终导出对象，否则以return的内容为导出内容
  })
  ```
  ```html
    <!-- 导入require.js -->
    <script data-main="./index.js" src="require.js"></script>
    <!-- require.js会将data-mian属性值引用的文件作为入口 -->
  ```
  ```js  
  AMD也可以采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：

  require([module], callback(md1,md2));
  // 第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数,回调函数中的参数为引用的模块。

  require(['math'], function (math) {
  　　math.add(2, 3);
  })
  ```






  CMD规范 公共模块定义规范
  sea.js实现了CMD规范
  
  ```js
  define(function(require, exports, module) {
    // 模块内部代码
    module.exports = { }
    exports = module.exports

    // 同步导入
    require(导入的模块) 
    // 异步导入
    require.async(导入的模块，function(模块名){
      // 导入模块后执行的函数
    })

    // 如果没有直接写明return， 那么module.exports为最终导出对象，否则以return的内容为导出内容
  })
  ```

  ```html
    <!-- 导入sea.js -->
    <script src="sea.js"></script>  
    <!-- 生命入口文件 -->
    <script>
      seajs.use('index.js')
    </script>  
  ```



AMD规范和CMD规范的渊源，最初AMD规范是只有第一种导出导出方式，第二种导出方式(CMD规范)是后来require引入CMD规范才有的


  ES6模块化标准
  1.使用**依赖预声明**的方式导入模块
    1.依赖延迟声明
      1.优点： 某些时候可以提高效率
      2.缺点： 无法一开始确定依赖的模块
    2.依赖预声明
      1.优点，在一开始可以确定模块的依赖关系
      2.缺点： 某些时候效率低
  2.灵活的多种导入导出方式
  3.规范的路径表示法：所有的路径必须以./或../开头

  <!-- 导出方式 -->
  4.基本的导入导出
  由于使用的是**预加载**，导入任何其他模块，导入代码必须放置到其他代码之前
  ```js
    // 基本的导出
    方式一
    // export 声明表达式
    // export const a = 1
    方式二
    const a = 1
    export { a }// 将a的变量名称作为导出的名称，a变量的值，作为导出的值


    // 基本的导出
    将导出的变量按个导出
    import { a } from './a.js'
    将导出的变量都放在一个对象中
    import * as aModule from './a.js'

    可以通过关键字**as**,对导入的模块进行重命名
    import { a as b} from './a.js

    运行模块，而不使用内部变量
    import './a.js'
  ```

  5.默认的导入导出
  每个模块模块处理有个多个基本导出之外，还允许有一个默认导出,
  类似CommonJs中的module.exports,所以不用具名

  具体语法
  export default 默认导出的内容

  ```js
  a.js
  export default { 
    a: 1,
    b: 2
  }

  b.js
  import data from './a.js' // 使用默认导出
  import * as data from './a.js' //使用*将所有导出聚合到data中，默认导出会放置default属性中
  import data , {a, b} from './a.js' // 默认导出放置在data中
  ```

  尽量导出不可变内容

  如果单纯将所有导出整合到一个大文件中，然后再导出
  ```js
  export { a, b } from './a.js'
  ```