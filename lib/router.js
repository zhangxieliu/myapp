/**
 * Created by Administrator on 2017/1/9.
 */
Router.configure({
    layoutTemplate: 'layout',
    // 当请求数据过程中显示等待加载动画
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    // 等待数据完才显示
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});
Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function () {
        return Posts.findOne(this.params._id);
    }
});