/**
 * Created by Administrator on 2017/1/9.
 */
// 在 Meteor 中，关键字 var 限制对象的作用域在文件范围内。
// 我们想要 Posts 作用于整个应用范围内，因此我们在这里不要 Var 这个关键字
Posts = new Mongo.Collection('posts');