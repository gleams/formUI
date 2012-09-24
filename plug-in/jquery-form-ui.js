/**   
* @fileOverview formUI   
* @author <a href="gleams.iteye.com">星月</a>   
* @version 0.1   
*/ 
(function($){
	var FormUI=(function(){
		var FormUI = function(options){
			return new FormUI.fn.init(options);
		};
			
		FormUI.fn=FormUI.prototype={
		constructor:FormUI,
		init:function(options){
				var bottonAble = options.bottonAble; //启用botton样式
				
				if(bottonAble) FormUI.botton(options);
				
					
			}
		};
		
		
		FormUI.fn.init.prototype=FormUI.fn;
		return FormUI;
	})();
	
		//按钮样式
		FormUI.botton = function(options){
			var  scolor=options.scolor || "white",//配色方案
				bml = options.bml || 0,//左边距离
				bmr = options.bmr || 0,//右边距离
				bfl = options.bfl || "left",//浮动方式				
				element = options.bottonElement || "a,input[type='button'],input[type='submit'],input[type='reset']", //默认元素添加样式
			    elements =  element.split(",");
				if(!elements.length) return;
			var len=0,
			    _e=null,
				icon=null;
				
				
				
			var html='<span class='+scolor+'><span></span></span>',
				hover=scolor+"-hover";
			var scolors=null,hovers=null;//自定样式 
			  for(var e in elements){
				 _e = $(elements[e]);//获取处理元素
				len = _e.size();	
				if(!len) continue;
				
				_e.each(function(){
					icon = $(this).attr("icon");
					bml = $(this).attr("bml")=="undefined"? bml+"px" :$(this).attr("bml")+"px";
					bmr = $(this).attr("bmr")=="undefined"? bmr+"px" :$(this).attr("bmr")+"px";
					bfl = $(this).attr("bfl")=="undefined"? bfl :$(this).attr("bfl");
				    bg = $(this).attr("bg")=="undefined"? bfl :$(this).attr("bg");
				    
					
				   
				
					if(!icon) return;
					if(icon=="no")	{//是否需要icon
						$(this).addClass("button").css({"padding-left":"3px"});
					}else{
						$(this).addClass("button").addClass(icon);
					}
					
					
											
						$(this).wrap(html);	
						$(this).parents("."+scolor).hover(function(){
								$(this).toggleClass(hover);
							},function(){
								$(this).toggleClass(hover);
							}
							).css({"margin-left":bml,"margin-right":bmr,"float":bfl});
					
					scolors = $(this).attr("scolor");//样式重置
					if(!scolors) return;
					$(this).parents("."+scolor).addClass(scolors);
					hovers=scolors+"-hover";
					$(this).parents("."+scolors).hover(function(){
							$(this).toggleClass(hovers);
						},function(){
							$(this).toggleClass(hovers);
						}
						).css({"margin-left":bml,"margin-right":bmr,"float":bfl});				
					
				});
				
			  }
		}//按钮样式结束
	
	//jquery扩展
		$.FormUI = function(options){
				var defaults ={
					bottonAble:true //按钮样式启用
				};
								
				options = $.extend(defaults,options);
				FormUI(options);
							
		};
		
	//初始化
	$(function(){
		$.FormUI();
	});	
})(jQuery);