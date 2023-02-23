$(window).load(function() { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(0).fadeOut(1000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(250).fadeOut(1000);
})


function getTop() {
	var scroll = $(document).scrollTop();
	if (scroll > 0) {
		$("nav").css({ 
		'box-shadow': '0 5px 10px 0 rgba(0,0,0,.1)',
		'position':'sticky',
		'top': '0',
		'background-color':'#fff',
		});
	} else {
		$("nav").css({
			'box-shadow': '0 0 0 0 #000', //默认显示css属性
			'position':'sticky',
			'top': '0',
			'background-color':'#fff',
			});
	}
		setTimeout(getTop);
}
	getTop();



$(document).ready(() => {
            //滾動事件
	$(document).scroll(() => {
		let Nav = $('nav').offset().top;
		let header = $('header').offset().top;
		let item1 = $('article#About').offset().top; 
		let item2 = $('article#Members').offset().top; 
		let item3 = $('article#Project').offset().top;
		//let item4 = $('article#Publications').offset().top;
		let item5 = $('article#Contact').offset().top; 
		
		//$('div#debug_msg').text(`Nav.top: ${topNav}, 商品介紹: ${top01}, 規格說明: ${top02}, 運送方式: ${top03}`); for debug
		if(Nav > header){ //當 nav 滾到 item1 的區域內
			$("li#item1 a").css({'color':'#000',});
			$("li#item2 a").css({'color':'#000',});
			$("li#item3 a").css({'color':'#000',});
			//$("li#item4 a").css({'color':'#000',});
			$("li#item5 a").css({'color':'#000',});
		}
		if(Nav > (item1-250)){ //當 nav 滾到 item1 的區域內
			$("li#item1").css({'background-image': 'linear-gradient(45deg, #F37335, #FDC830 80%)',
			'-webkit-background-clip': 'text', /* 背景裁剪成文字的前景色 */
			'background-clip': 'text',
			});
			$("li#item1 a").css({'color':'transparent',});		
			$("li#item2 a").css({'color':'#000',});
			$("li#item3 a").css({'color':'#000',});
			//$("li#item4 a").css({'color':'#000',});
			$("li#item5 a").css({'color':'#000',});
		}
		if(Nav > (item2-250)){ //當 nav 滾到 area02 的區域內
			$("li#item2").css({'background-image': 'linear-gradient(45deg, #F37335, #FDC830 80%)',
			'-webkit-background-clip': 'text', /* 背景裁剪成文字的前景色 */
			'background-clip': 'text',
			});
			$("li#item2 a").css({'color':'transparent',});
			$("li#item1 a").css({'color':'#000',});
			$("li#item3 a").css({'color':'#000',});
			//$("li#item4 a").css({'color':'#000',});
			$("li#item5 a").css({'color':'#000',});	
		}
		if(Nav > (item3-250)){ //當 nav 滾到 area02 的區域內
			$("li#item3").css({'background-image': 'linear-gradient(45deg, #F37335, #FDC830 80%)',
			'-webkit-background-clip': 'text', /* 背景裁剪成文字的前景色 */
			'background-clip': 'text',
			});
			$("li#item3 a").css({'color':'transparent',});
			$("li#item1 a").css({'color':'#000',});
			$("li#item2 a").css({'color':'#000',});
			//$("li#item4 a").css({'color':'#000',});
			$("li#item5 a").css({'color':'#000',});
		}
		
		if(Nav > (item5-250)){ //當 nav 滾到 area02 的區域內
			$("li#item5").css({'background-image': 'linear-gradient(45deg, #F37335, #FDC830 80%)',
			'-webkit-background-clip': 'text', /* 背景裁剪成文字的前景色 */
			'background-clip': 'text',
			});
			$("li#item5 a").css({'color':'transparent',});
			$("li#item1 a").css({'color':'#000',});
			$("li#item2 a").css({'color':'#000',});
			$("li#item3 a").css({'color':'#000',});
			//$("li#item4 a").css({'color':'#000',});	
		}
	
  });
});
	
