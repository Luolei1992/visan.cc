(
	function($){
		$.extend({
				"easypage":function(options){
					options = $.extend({
						contentclass:"contentlist",
						navigateid:"navigatediv",
						everycount:"5",
						navigatecount:"5"
						},
						options);
					var currentpage = 0;
					var contents = $("."+options.contentclass);
					var contentcount = contents.length;
					var pagecount = Math.ceil(contentcount/options.everycount);
					var navigatehtml = "<div id='pagefirst' class='pagefirst'></div><div id='pagepre' class='pagepre'><a href='javascript:void(0)'><img src='./images/aboutL.png' alt=''></a></div>";
					for(var i = 1;i <= pagecount;i++){
							navigatehtml+='<div class="pagenavigate"><a href="javascript:void(0)">'+i+'</a></div>';
					}
					navigatehtml+="<div id='pagenext' class='pagenext'><a href='javascript:void(0)'><img src='./images/aboutR.png' alt=''></a></div><div id='pagelast' class='pagelast'></div>";
					
					$("#"+options.navigateid).html(navigatehtml);	
					
					var navigates = $(".pagenavigate");
					
					$.extend({
						"hidenavigates":function(){
							navigates.each(function(){
								$(this).hide();
							})	
						}	
					});
					
					$.extend({
						"shownavigate":function(currentnavigate){
							$.hidenavigates();
							var begin = currentnavigate>=options.navigatecount?currentnavigate-parseInt(options.navigatecount):0;
							if(begin>navigates.length-2*options.navigatecount){
								begin = navigates.length-2*options.navigatecount;	
							}
							for(var i = begin;i < currentnavigate+parseInt(options.navigatecount);i++){
								$(navigates[i]).show();
							}
						}	
					});
					
					$.extend({
						"lightnavigate":function(currentnavigate){
							currentnavigate.addClass("pagenavigateon");	
						}	
					});
					
					$.extend({
						"removelight":function(){
							$(".pagenavigateon").each(
								function(){
									$(this).removeClass("pagenavigateon");	
								}
							)
						 }	
					});
					
					$.extend({
						"showPage":function(page){
							contents.each(
								function(contentindex){
									if(contentindex>=page*options.everycount && contentindex < (page+1)*options.everycount){
									$(this).show();	
									}else{
									$(this).hide();	
									}
								}
							);
						}
					});
					
					$.shownavigate(0);
					$.showPage(0);
					if(pagecount>0){
							$.lightnavigate($(navigates.get(0)));
					}
					$(".pagenavigate").each(
						function(myindex){
							$(this).click(
								function(){
									$.showPage(myindex);
									$.removelight();
									$.lightnavigate($(this));
									currentpage = myindex;
									var na = Math.floor((currentpage+1)/options.navigatecount)*options.navigatecount;
									$.shownavigate(na);	
								}
							);
						}
					);
					$("#pagepre").click(
						function(){
							--currentpage<=0 && (currentpage=0);
							$.showPage(currentpage);	
							$.removelight();
							$.lightnavigate($(navigates.get(currentpage)));
							var na = Math.floor(currentpage/options.navigatecount)*options.navigatecount;
							$.shownavigate(na);	
						}
					);
					$("#pagenext").click(
						function(){
							++currentpage>=pagecount-1 && (currentpage=pagecount-1);
							$.showPage(currentpage);	
							$.removelight();
							$.lightnavigate($(navigates.get(currentpage)));
							var na = Math.floor((currentpage+1)/options.navigatecount)*options.navigatecount;
							$.shownavigate(na);	
						}
					);
					$("#pagefirst").click(
						function(){
							currentpage=0;
							$.showPage(currentpage);	
							$.removelight();
							$.lightnavigate($(navigates.get(currentpage)));
							var na = Math.floor((currentpage+1)/options.navigatecount)*options.navigatecount;
							$.shownavigate(na);	
						}
					);
				 $("#pagelast").click(
				 		function(){
				 			currentpage=pagecount-1;
				 			$.showPage(currentpage);	
							$.removelight();
							$.lightnavigate($(navigates.get(currentpage)));
							var na = Math.floor((currentpage+1)/options.navigatecount)*options.navigatecount;
							$.shownavigate(na);	
				 		}
				 );
				}
		});
	}
)(jQuery)