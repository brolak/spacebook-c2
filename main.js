
var $posts = $(".posts");
var $postText = $("#post-name");
var identity =0;

var posts = [];

var createPost = function (text){
	newPost = {
		"text": text,
		"id": identity
	};
	identity +=1;
	posts.push(newPost);
}

var updatePosts = function () {
	$posts.empty();
	for(i=0;i<posts.length;i++) {
		$posts.append("<p class='posts' data-id='"+posts[i].id+"'>"+"<a href='#' class='remove'>Remove-</a>"+" \""+posts[i].text+"\""+"</p>");
	}
}

$(".btn").on("click", function() {
	createPost($postText.val());
	updatePosts();
	$postText.val("");
});

$("div .posts").on("click",".remove", function () {
	$(this).parent().remove();
	
})