/**
 * Created by Administrator on 2017/1/9.
 */
// 发布一个posts的信息出去
Meteor.publish('posts', function () {
    return Posts.find();
});