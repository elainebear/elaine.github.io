$(window).on('load',function() { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").fadeOut(1000); 
    $("#preloader").delay(250).fadeOut(1000); //delay --> 延遲幾秒才fadeOut
})



$(document).ready(() => {
    // const sections = [];
	// $("article").each(function() {
	// 	// const id = $(this).attr("id");
	// 	sections.push({
	// 		id: this.id,
	// 		offsetTop: $(this).offset().top,
	// 		navItem: $(`li#item_${id}`)
	// 	});
	// });
	const sections = $("article").map(function() {
        return {
            id: this.id,
            navItem: $(`li#item_${this.id}`)
        };
    }).get();

	$(document).on('scroll', ()=>{
		const scrollpos = $(document).scrollTop();
		let activesection = null;

		// sections.forEach((section)=>{
		// 	if(scrollpos >= (section.offsetTop-350)){
		// 		activesection = section;
		// 	}
		// })
		for (let i = sections.length - 1; i >= 0; i--) {
            const offsetTop = $(`#${sections[i].id}`).offset().top;
            if (scrollpos >= offsetTop - 350) {
                activesection = sections[i];
                break;
            }
        }

		$("nav li").removeClass("active");
		if(activesection){
			activesection.navItem.addClass("active");
		}
	});

});
