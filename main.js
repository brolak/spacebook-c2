
var $posts = $(".posts");
var $postText = $("#post-name");
var $commentText = $(".comments")
var identity =0;
var removeId=0;
var user = "USERNAME";

var posts = [];

var createPost = function (text){
	newPost = {
		"text": text,
		"id": identity
	};
	identity +=1;
	posts.push(newPost);
};

var createComment = function (text){
	newComment = {
		"text": text,
		"id": user
	}
};

var removePost = function () {
	for(var i = 0; i < posts.length; i++) {
    	if(posts[i].id == removeId) {
        	posts.splice(i, 1);
        	break;
    	}
	}
};

var updatePosts = function () {
	$posts.empty();
	for(i=0;i<posts.length;i++) {
		$posts.append("<p class='posts' data-id='"+posts[i].id+"'>"+"<a href='#' class='remove'>Remove-</a>"+"<strong>"+user+"</strong>: \""+posts[i].text+"\""+"</p>");
		$posts.append("<div class='comments'><input type='text' class='comment' placeholder='Add a comment!'></input><button type='button' class='btn-md btn-primary comment-button'>Post</button></div><br>")
	}
};

$(".add-post").on("click", function() {
	createPost($postText.val());
	updatePosts();
	$postText.val("");
});

$(".posts").on("click",".comment-button", function() {
	
	$comment = $(this).find("input");
	alert($comment.val());
	$(".comments").append("<p>\"Example\"</p>");
});

$("div .posts").on("click",".remove", function () {
	removeId= $(this).parent().attr("data-id");
	removePost();
	updatePosts();
});