$( function(){
	
	var main = {

		init : function(){
			this.moreLink();
		},

		moreLink : function(){
			$(".show-more").click( function(){
				var i = 0;
				$(".article.hide").each( function(){
					if( i < 10 ){
						$(this).removeClass("hide");
					}
					i++;
				});
				if( i < 10 ){
					$(this).hide();
				}
			});
		}

	}

	main.init();

});