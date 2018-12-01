#### 编程导航
* 不能保证用户一定会点击某些按钮
* 并且当前操作，除了路由跳转以外，还有一些别的附加操作
* this.$router.go 根据浏览器记录 前进1 后退-1
* this.$router.push(直接跳转到某个页面显示)
    - push参数: 字符串 /xxx
    - 对象 :  `{name:'xxx',query:{id:1},params:{name:2}  }`



###  #router.push

### [#](https://router.vuejs.org/api/#router-replace)router.replace

### [#](https://router.vuejs.org/api/#router-go)router.go

### [#](https://router.vuejs.org/api/#router-back)router.back

### [#](https://router.vuejs.org/api/#router-forward)router.forward

Signatures:

```
router.push(location, onComplete?, onAbort?)
router.replace(location, onComplete?, onAbort?)
router.go(n)
router.back()
router.forward()
```



