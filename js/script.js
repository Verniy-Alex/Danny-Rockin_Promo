$('#nav-menu-btn').click(function(){
    $('#nav-menu-content').toggleClass('active');
});

$('#nav-menu-content a').click(function(){
    $('#nav-menu-content').remove('active');
});




