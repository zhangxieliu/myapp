/**
 * Created by Administrator on 2017/1/9.
 */
Template.postItem.helpers({
    domain () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});