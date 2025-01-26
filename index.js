$(window).load(function() { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(0).fadeOut(1000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(250).fadeOut(1000);
})



$(document).ready(() => {
    const sections = [];
	$("article").each(function() {
		const id = $(this).attr("id");
		sections.push({
			id: id,
			offsetTop: $(this).offset().top,
			navItem: $(`li#item_${id}`)
		});
	});

	$(document).scroll(()=>{
		const scrollpos = $(document).scrollTop();
		let activesection = null;
		sections.forEach((section)=>{
			if(scrollpos >= (section.offsetTop-350)){
				activesection = section;
			}
		})

		$("nav li").css({'background-color':'none'});
		$("nav li a").css({'color':'#000'});

		if(activesection){
			activesection.navItem.css({
				'background-image': 'linear-gradient(45deg, #F37335, #FDC830 80%)',
				'-webkit-background-clip': 'text', 
				'background-clip': 'text',
			});
			activesection.navItem.find('a').css({'color': 'transparent'});
		}

	});

});
