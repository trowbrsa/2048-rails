// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery
//= require bootstrap-sprockets


$(document).on('ready', function() {
  $('.resume').click(function() {
    var id = $(this).attr("data-val");
    $(this).addClass("yellow");
    var url = "http://localhost:3000/games/" + id;
    window.location.href = 'http://localhost:3000/?gid=' + gameId;
    $.ajax(url)
      .done(function(data) {
        console.log(data);
    });

  });
});
