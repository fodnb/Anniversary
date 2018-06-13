$(document).ready(function(){


$("#header").hover(function(){
    window.location.href="#header";
})


// $(".composition__photo").hover(function(){
  

//     window.location.href='#about';


// });

var loveText = function(){
    $(".timed-text").html("I LOVE YOU!");
    $(".heading-primary--center").html("5 Year");
}
setTimeout(function(){
    loveText();
}, 10000);

});