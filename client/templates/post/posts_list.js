/**
 * Created by Administrator on 2017/1/9.
 */
var postData = Posts.find();
Template.postsList.helpers({
    posts: postData
});
