window.onload = function(){
  $("#sidemenu-profile-image").mouseenter(function(){
    $('#sidemenu-container').addClass('sidemenu-container-show');
    $('#sidemenu-backdrop').addClass('sidemenu-backdrop-show');
  });

  $('#sidemenu-backdrop').on('click', function() {
    $('#sidemenu-container').removeClass('sidemenu-container-show');
    $('#sidemenu-backdrop').removeClass('sidemenu-backdrop-show');
  });

  $("#sidemenu-container").mouseleave(function(){
    $('#sidemenu-container').removeClass('sidemenu-container-show');
    $('#sidemenu-backdrop').removeClass('sidemenu-backdrop-show');
  });
}
