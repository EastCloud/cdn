$(function() {
	$('#search_button').click(function() {
		toggleNavigation();
	});
	$.ajax({
		type:'get',
		url:"https://zxso.net/api/notice",
		async:true,
		success:function(result){
			if(result.code == 200){
				$('#notice').attr('class',"alert alert-success bg-white text-success");
				$('#notice').html(result.content);
			}
		}
	});
});
function toggleNavigation() {
	$('#sidebarreturn').toggleClass('sidebarreturn');
	if ($('#searchbox').hasClass('searchshow')) {
		// 关闭
		$('#searchbox').removeClass('searchshow');

		$('#search_button i').removeClass('dripicons-cross');
		$('#search_button i').addClass('dripicons-search');
	} else {
		// 显示
		$('#searchbox').addClass('searchshow');

		$(".search-input").focus();

		$('#search_button i').removeClass('dripicons-search');
		$('#search_button i').addClass('dripicons-cross');
	}
}
