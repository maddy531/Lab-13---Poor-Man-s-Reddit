$(document).ready(function(){
    $.get('https://www.reddit.com/r/aww/.json', function(response){

    var posts= response.data.children;


    $.each(posts, function(index, post){
    var $container = $("<div />").appendTo($('body'));

    var $title = $('<a />').html('<h2>'+ post.data.title +'</h2>').appendTo($container);

    $title.attr("href",post.data.url);

    $('<img />').attr('src', post.data.thumbnail).appendTo($container);
    $('<p />').text(post.data.author).appendTo($container);

    var postDate = new Date(post.data.created*1000);

    $('<p />').text("Post: " +postDate  ).appendTo($container);
  });
});

})
