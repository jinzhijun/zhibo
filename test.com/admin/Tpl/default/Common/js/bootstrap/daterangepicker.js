!function(n){var t=function(t,i,r){var h=typeof i=="object",c,a,o,e,l,v,y,p,w,s,u,f;if(moment.lang("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiem:function(n,t){return 9>n?"早上":11>n&&30>t?"上午":13>n&&30>t?"中午":18>n?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinal:function(n,t){switch(t){case"d":case"D":case"DDD":return n+"日";case"M":return n+"月";case"w":case"W":return n+"周";default:return n}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"}}),this.startDate=moment(),this.endDate=moment().add("day",7),this.minDate=!1,this.maxDate=!1,this.dateLimit=!1,this.showDropdowns=!1,this.showWeekNumbers=!1,this.timePicker=!1,this.timePickerIncrement=1,this.timePicker12Hour=!1,this.ranges={},this.opens="right",this.buttonClasses=["btn","btn-small"],this.applyClass="btn-success",this.cancelClass="btn-default",this.format="MM/DD/YYYY",this.separator=" - ",this.locale={applyLabel:"确定",cancelLabel:"取消",fromLabel:"From",toLabel:"To",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:moment()._lang._weekdaysMin,monthNames:moment()._lang._monthsShort,firstDay:0},this.cb=function(){},this.element=n(t),this.element.hasClass("pull-right")&&(this.opens="left"),this.element.is("input"))this.element.on({click:n.proxy(this.show,this),focus:n.proxy(this.show,this)});else this.element.on("click",n.proxy(this.show,this));if(c=this.locale,h&&(typeof i.locale=="object"&&n.each(c,function(n,t){c[n]=i.locale[n]||t}),i.applyClass&&(this.applyClass=i.applyClass),i.cancelClass&&(this.cancelClass=i.cancelClass)),a='<div class="daterangepicker dropdown-menu"><div class="calendar left"><\/div><div class="calendar right"><\/div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input" style="float: left"><label for="daterangepicker_start">'+this.locale.fromLabel+'<\/label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /><\/div><div class="daterangepicker_end_input" style="float: left; padding-left: 11px"><label for="daterangepicker_end">'+this.locale.toLabel+'<\/label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /><\/div><button class="'+this.applyClass+' applyBtn" disabled="disabled">'+this.locale.applyLabel+'<\/button>&nbsp;<button class="'+this.cancelClass+' cancelBtn">'+this.locale.cancelLabel+"<\/button><\/div><\/div><\/div>",this.container=n(a).appendTo("body"),h){if(typeof i.format=="string"&&(this.format=i.format),typeof i.separator=="string"&&(this.separator=i.separator),typeof i.startDate=="string"&&(this.startDate=moment(i.startDate,this.format)),typeof i.endDate=="string"&&(this.endDate=moment(i.endDate,this.format)),typeof i.minDate=="string"&&(this.minDate=moment(i.minDate,this.format)),typeof i.maxDate=="string"&&(this.maxDate=moment(i.maxDate,this.format)),typeof i.startDate=="object"&&(this.startDate=moment(i.startDate)),typeof i.endDate=="object"&&(this.endDate=moment(i.endDate)),typeof i.minDate=="object"&&(this.minDate=moment(i.minDate)),typeof i.maxDate=="object"&&(this.maxDate=moment(i.maxDate)),typeof i.ranges=="object"){for(e in i.ranges)(u=moment(i.ranges[e][0]),f=moment(i.ranges[e][1]),this.minDate&&u.isBefore(this.minDate)&&(u=moment(this.minDate)),this.maxDate&&f.isAfter(this.maxDate)&&(f=moment(this.maxDate)),this.minDate&&f.isBefore(this.minDate)||this.maxDate&&u.isAfter(this.maxDate))||(this.ranges[e]=[u,f]);o="<ul>";for(e in this.ranges)o+="<li>"+e+"<\/li>";o+="<li>"+this.locale.customRangeLabel+"<\/li>",o+="<\/ul>",this.container.find(".ranges").prepend(o)}if(typeof i.dateLimit=="object"&&(this.dateLimit=i.dateLimit),typeof i.locale=="object"&&typeof i.locale.firstDay=="number")for(this.locale.firstDay=i.locale.firstDay,l=i.locale.firstDay;l>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),l--;typeof i.opens=="string"&&(this.opens=i.opens),typeof i.showWeekNumbers=="boolean"&&(this.showWeekNumbers=i.showWeekNumbers),typeof i.buttonClasses=="string"&&(this.buttonClasses=[i.buttonClasses]),typeof i.buttonClasses=="object"&&(this.buttonClasses=i.buttonClasses),typeof i.showDropdowns=="boolean"&&(this.showDropdowns=i.showDropdowns),typeof i.timePicker=="boolean"&&(this.timePicker=i.timePicker),typeof i.timePickerIncrement=="number"&&(this.timePickerIncrement=i.timePickerIncrement),typeof i.timePicker12Hour=="boolean"&&(this.timePicker12Hour=i.timePicker12Hour)}this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.startOf("day")),v=this.container,n.each(this.buttonClasses,function(n,t){v.find("button").addClass(t)}),this.opens=="right"&&(y=this.container.find(".calendar.left"),p=this.container.find(".calendar.right"),y.removeClass("left").addClass("right"),p.removeClass("right").addClass("left")),(typeof i=="undefined"||typeof i.ranges=="undefined")&&(this.container.find(".calendar").show(),this.move()),typeof r=="function"&&(this.cb=r),this.container.addClass("opens"+this.opens),h&&(typeof i.startDate!="undefined"||typeof i.endDate!="undefined")||n(this.element).is("input[type=text]")&&(w=n(this.element).val(),s=w.split(this.separator),s.length==2&&(u=moment(s[0],this.format),f=moment(s[1],this.format)),u!=null&&f!=null&&(this.startDate=u,this.endDate=f)),this.oldStartDate=this.startDate,this.oldEndDate=this.endDate,this.leftCalendar={month:moment([this.startDate.year(),this.startDate.month(),1,this.startDate.hour(),this.startDate.minute()]),calendar:[]},this.rightCalendar={month:moment([this.endDate.year(),this.endDate.month(),1,this.endDate.hour(),this.endDate.minute()]),calendar:[]};this.container.on("mousedown",n.proxy(this.mousedown,this));this.container.find(".calendar").on("click",".prev",n.proxy(this.clickPrev,this));this.container.find(".calendar").on("click",".next",n.proxy(this.clickNext,this));this.container.find(".ranges").on("click","button.applyBtn",n.proxy(this.clickApply,this));this.container.find(".ranges").on("click","button.cancelBtn",n.proxy(this.clickCancel,this));this.container.find(".calendar").on("click","td.available",n.proxy(this.clickDate,this));this.container.find(".calendar").on("mouseenter","td.available",n.proxy(this.enterDate,this));this.container.find(".calendar").on("mouseleave","td.available",n.proxy(this.updateView,this));this.container.find(".ranges").on("click","li",n.proxy(this.clickRange,this));this.container.find(".ranges").on("mouseenter","li",n.proxy(this.enterRange,this));this.container.find(".ranges").on("mouseleave","li",n.proxy(this.updateView,this));this.container.find(".calendar").on("change","select.yearselect",n.proxy(this.updateYear,this));this.container.find(".calendar").on("change","select.monthselect",n.proxy(this.updateMonth,this));this.container.find(".calendar").on("change","select.hourselect",n.proxy(this.updateTime,this));this.container.find(".calendar").on("change","select.minuteselect",n.proxy(this.updateTime,this));this.container.find(".calendar").on("change","select.ampmselect",n.proxy(this.updateTime,this));this.element.on("keyup",n.proxy(this.updateFromControl,this));this.updateView(),this.updateCalendars()};t.prototype={constructor:t,mousedown:function(n){n.stopPropagation()},updateView:function(){this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()),this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)),this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)),this.startDate.isSame(this.endDate)||this.startDate.isBefore(this.endDate)?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled")},updateFromControl:function(){if(this.element.is("input")&&this.element.val().length){var i=this.element.val().split(this.separator),n=moment(i[0],this.format),t=moment(i[1],this.format);n!=null&&t!=null&&(t.isBefore(n)||(this.startDate=n,this.endDate=t,this.updateView(),this.cb(this.startDate,this.endDate),this.updateCalendars()))}},notify:function(){this.updateView(),this.cb(this.startDate,this.endDate)},move:function(){var t=n(this.container).find(".ranges").outerWidth(),i;n(this.container).find(".calendar").is(":visible")&&(i=24,t+=n(this.container).find(".calendar").outerWidth()*2+i),this.opens=="left"?(this.container.css({top:this.element.offset().top+this.element.outerHeight(),right:n(window).width()-this.element.offset().left-this.element.outerWidth(),left:"auto","min-width":t}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:this.element.offset().top+this.element.outerHeight(),left:this.element.offset().left,right:"auto","min-width":t}),this.container.offset().left+this.container.outerWidth()>n(window).width()&&this.container.css({left:"auto",right:0}))},show:function(t){this.container.show(),this.move(),t&&(t.stopPropagation(),t.preventDefault()),this.oldStartDate=this.startDate,this.oldEndDate=this.endDate;n(document).on("mousedown",n.proxy(this.hide,this));this.element.trigger("shown",{target:t.target,picker:this})},hide:function(){this.container.hide(),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify(),n(document).off("mousedown",this.hide),this.element.trigger("hidden",{picker:this})},enterRange:function(n){var i=n.target.innerHTML,t;i==this.locale.customRangeLabel?this.updateView():(t=this.ranges[i],this.container.find("input[name=daterangepicker_start]").val(t[0].format(this.format)),this.container.find("input[name=daterangepicker_end]").val(t[1].format(this.format)))},clickRange:function(n){var i=n.target.innerHTML,t;i==this.locale.customRangeLabel?(this.container.find(".calendar").show(),this.move()):(t=this.ranges[i],this.startDate=t[0],this.endDate=t[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.startOf("day")),this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()),this.updateCalendars(),this.container.find(".calendar").hide(),this.hide())},clickPrev:function(t){var i=n(t.target).parents(".calendar");i.hasClass("left")?this.leftCalendar.month.subtract("month",1):this.rightCalendar.month.subtract("month",1),this.updateCalendars()},clickNext:function(t){var i=n(t.target).parents(".calendar");i.hasClass("left")?this.leftCalendar.month.add("month",1):this.rightCalendar.month.add("month",1),this.updateCalendars()},enterDate:function(t){var i=n(t.target).attr("data-title"),r=i.substr(1,1),u=i.substr(3,1),f=n(t.target).parents(".calendar");f.hasClass("left")?this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[r][u].format(this.format)):this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[r][u].format(this.format))},clickDate:function(t){var e=n(t.target).attr("data-title"),o=e.substr(1,1),s=e.substr(3,1),h=n(t.target).parents(".calendar"),u,i,r,f;h.hasClass("left")?(i=this.leftCalendar.calendar[o][s],r=this.endDate,typeof this.dateLimit=="object"&&(u=moment(i).add(this.dateLimit).startOf("day"),r.isAfter(u)&&(r=u))):(i=this.startDate,r=this.rightCalendar.calendar[o][s],typeof this.dateLimit=="object"&&(f=moment(r).subtract(this.dateLimit).startOf("day"),i.isBefore(f)&&(i=f))),h.find("td").removeClass("active"),i.isSame(r)||i.isBefore(r)?(n(t.target).addClass("active"),this.startDate=i,this.endDate=r):i.isAfter(r)&&(n(t.target).addClass("active"),this.startDate=i,this.endDate=moment(i).add("day",1).startOf("day")),this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()),this.updateCalendars()},clickApply:function(){this.element.is("input")&&this.element.val(this.startDate.format(this.format)+this.separator+this.endDate.format(this.format)),this.hide()},clickCancel:function(){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.updateView(),this.updateCalendars(),this.hide()},updateYear:function(t){var i=parseInt(n(t.target).val()),r=n(t.target).closest(".calendar").hasClass("left");r?this.leftCalendar.month.month(this.startDate.month()).year(i):this.rightCalendar.month.month(this.endDate.month()).year(i),this.updateCalendars()},updateMonth:function(t){var i=parseInt(n(t.target).val()),r=n(t.target).closest(".calendar").hasClass("left");r?this.leftCalendar.month.month(i).year(this.startDate.year()):this.rightCalendar.month.month(i).year(this.endDate.year()),this.updateCalendars()},updateTime:function(t){var o=n(t.target).closest(".calendar").hasClass("left"),u=this.container.find(".calendar.left"),i,r,s,f,e;o||(u=this.container.find(".calendar.right")),i=parseInt(u.find(".hourselect").val()),r=parseInt(u.find(".minuteselect").val()),this.timePicker12Hour&&(s=u.find(".ampmselect").val(),s=="PM"&&i<12&&(i+=12)),o?(f=this.startDate,f.hour(i),f.minute(r),this.startDate=f,this.leftCalendar.month.hour(i).minute(r)):(e=this.endDate,e.hour(i),e.minute(r),this.endDate=e,this.rightCalendar.month.hour(i).minute(r)),this.updateCalendars()},updateCalendars:function(){var t,i,n;this.leftCalendar.calendar=this.buildCalendar(this.leftCalendar.month.month(),this.leftCalendar.month.year(),this.leftCalendar.month.hour(),this.leftCalendar.month.minute(),"left"),this.rightCalendar.calendar=this.buildCalendar(this.rightCalendar.month.month(),this.rightCalendar.month.year(),this.rightCalendar.month.hour(),this.rightCalendar.month.minute(),"right"),this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar,this.startDate,this.minDate,this.maxDate)),this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar,this.endDate,this.startDate,this.maxDate)),this.container.find(".ranges li").removeClass("active"),t=!0,i=0;for(n in this.ranges)this.timePicker?this.startDate.isSame(this.ranges[n][0])&&this.endDate.isSame(this.ranges[n][1])&&(t=!1,this.container.find(".ranges li:eq("+i+")").addClass("active")):this.startDate.format("YYYY-MM-DD")==this.ranges[n][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[n][1].format("YYYY-MM-DD")&&(t=!1,this.container.find(".ranges li:eq("+i+")").addClass("active")),i++;t&&this.container.find(".ranges li:last").addClass("active")},buildCalendar:function(n,t,i,r){for(var s=moment([t,n,1]),l=moment(s).subtract("month",1).month(),a=moment(s).subtract("month",1).year(),h=moment([a,l]).daysInMonth(),v=s.day(),c=[],f,e,u=0;u<6;u++)c[u]=[];f=h-v+this.locale.firstDay+1,f>h&&(f-=7),v==this.locale.firstDay&&(f=h-6),e=moment([a,l,f,i,r]);for(var u=0,o=0,y=0;u<42;u++,o++,e=moment(e).add("day",1))u>0&&o%7==0&&(o=0,y++),c[y][o]=e;return c},renderDropdowns:function(n,t,i){for(var s=n.month(),f='<select class="monthselect">',u,r=0;r<12;r++)(!0||r>=t.month())&&(!0||r<=i.month())&&(f+="<option value='"+r+"'"+(r===s?" selected='selected'":"")+">"+this.locale.monthNames[r]+"<\/option>");f+="<\/select>";var e=n.year(),h=i&&i.year()||e+5,c=t&&t.year()||e-50,o='<select class="yearselect">';for(u=c;u<=h;u++)o+='<option value="'+u+'"'+(u===e?' selected="selected"':"")+">"+u+"<\/option>";return o+="<\/select>",f+o},renderCalendar:function(t,i,r,u){var f='<div class="calendar-date">',a,e,s,h,v,o,c;for(f+='<table class="table-condensed">',f+="<thead>",f+="<tr>",this.showWeekNumbers&&(f+="<th><\/th>"),f+=!r||r.isBefore(t[1][1])?'<th class="prev available"><i class="icon-arrow-left"><\/i><\/th>':"<th><\/th>",a=this.locale.monthNames[t[1][1].month()]+t[1][1].format(" YYYY"),this.showDropdowns&&(a=this.renderDropdowns(t[1][1],r,u)),f+='<th colspan="5" style="width: auto">'+a+"<\/th>",f+=!u||u.isAfter(t[1][1])?'<th class="next available"><i class="icon-arrow-right"><\/i><\/th>':"<th><\/th>",f+="<\/tr>",f+="<tr>",this.showWeekNumbers&&(f+='<th class="week">'+this.locale.weekLabel+"<\/th>"),n.each(this.locale.daysOfWeek,function(n,t){f+="<th>"+t+"<\/th>"}),f+="<\/tr>",f+="<\/thead>",f+="<tbody>",e=0;e<6;e++){for(f+="<tr>",this.showWeekNumbers&&(f+='<td class="week">'+t[e][0].week()+"<\/td>"),s=0;s<7;s++)h="available ",h+=t[e][s].month()==t[1][1].month()?"":"off",r&&t[e][s].isBefore(r)||u&&t[e][s].isAfter(u)?h=" off disabled ":t[e][s].format("YYYY-MM-DD")==i.format("YYYY-MM-DD")?(h+=" active ",t[e][s].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&(h+=" start-date "),t[e][s].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&(h+=" end-date ")):t[e][s]>=this.startDate&&t[e][s]<=this.endDate&&(h+=" in-range ",t[e][s].isSame(this.startDate)&&(h+=" start-date "),t[e][s].isSame(this.endDate)&&(h+=" end-date ")),v="r"+e+"c"+s,f+='<td class="'+h.replace(/\s+/g," ").replace(/^\s?(.*?)\s?$/,"$1")+'" data-title="'+v+'">'+t[e][s].date()+"<\/td>";f+="<\/tr>"}if(f+="<\/tbody>",f+="<\/table>",f+="<\/div>",this.timePicker){f+='<div class="calendar-time">',f+='<select class="hourselect">';var y=0,p=23,l=i.hour();for(this.timePicker12Hour&&(y=1,p=12,l>=12&&(l-=12),l==0&&(l=12)),o=y;o<=p;o++)f+=o==l?'<option value="'+o+'" selected="selected">'+o+"<\/option>":'<option value="'+o+'">'+o+"<\/option>";for(f+="<\/select> : ",f+='<select class="minuteselect">',o=0;o<60;o+=this.timePickerIncrement)c=o,c<10&&(c="0"+c),f+=o==i.minute()?'<option value="'+o+'" selected="selected">'+c+"<\/option>":'<option value="'+o+'">'+c+"<\/option>";f+="<\/select> ",this.timePicker12Hour&&(f+='<select class="ampmselect">',f+=i.hour()>=12?'<option value="AM">AM<\/option><option value="PM" selected="selected">PM<\/option>':'<option value="AM" selected="selected">AM<\/option><option value="PM">PM<\/option>',f+="<\/select>"),f+="<\/div>"}return f}},n.fn.daterangepicker=function(i,r){return this.each(function(){var u=n(this);u.data("daterangepicker")||u.data("daterangepicker",new t(u,i,r))}),this}}(window.jQuery);