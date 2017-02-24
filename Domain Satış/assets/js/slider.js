// Converted to SCSS. If you want to grab just the CSS, click the `View Compiled` button on the css window over there <-- . That will list out the compiled css for you to use. Grab all the css between the comments and the html between the comments and it should work like a champ anywhere you place it.


















// All this jquery is just used for presentation. Not required at all for the radio buttons to work.
$( document ).ready(function(){
//   Hide the border by commenting out the variable below
    var $on = 'section';
    $($on).css({
      'background':'none',
      'border':'none',
      'box-shadow':'none'
    });
}); 
// Plugin options and our code
$("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

$(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
});
$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});