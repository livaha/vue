# vue实战--SPA的实现思路

转自：晨曦之光11

https://blog.csdn.net/qq_21796899/article/details/78753574

## 1. 什么是SPA

> 单页Web应用（single page application，SPA），就是只有一个Web页面的应用。 
> 对于单页应用程序来说, 只有第一次会加载页面, 以后的每次请求, 仅仅是获取必要的数据. 
> 然后, 由页面中js解析获取的数据, 展示在页面中

## 2. 实现SPA的技术

1. ajax（数据请求）
2. 前端路由（hash）

### 3. 路由（实现）

> 路由即：浏览器中的哈希值（# hash）与展示视图内容（template）之间的对应规则 
> vue中的路由是：hash 和 component（组件）的对应关系。 
> 当URL中的哈希值（# hash）发生改变后，路由会根据制定好的规则，展示（更新）对应的视图内容（组件）