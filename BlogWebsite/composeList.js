const lodash = require('lodash');

posts = [];

module.exports.addPost = (title, post) => {
  const simplePost = new Object();
  simplePost.title = title;
  simplePost.post = post;
  if(post.length > 100)
  simplePost.shortPost = post.substr(0, 100) + " ...";
  else
  simplePost.shortPost = post;
  simplePost.readMoreLink = "/posts/" + lodash.kebabCase([title]);

  posts.push(simplePost);
  console.log("The title of the post is : " + simplePost.title);
  console.log("The post is : " + simplePost.post);
  console.log("The complete array is : " + posts);
}

module.exports.getPosts = () => {
  return posts;
}
