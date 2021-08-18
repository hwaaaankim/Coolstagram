var pageCnt=3;
var contentPerPage = 3;
var detailPage=1;
var webPage=1;
var snsPage=1;
var totalContents;
var totalPageNum;


function makeVariable(code){
	switch(code){
		case 'detail':
			totalContents = detail.length;
			if((totalContents%contentPerPage) == 0){
				totalPageNum = totalContents/contentPerPage;
				break;
			}else{
				totalPageNum = parseInt(totalContents/contentPerPage)+1;
				break;
			}
		case 'web':
			totalContents = web.length;
			if((totalContents%contentPerPage) == 0){
				totalPageNum = totalContents/contentPerPage;
				break;
			}else{
				totalPageNum = parseInt(totalContents/contentPerPage)+1;
				break;
			}	
		case 'sns':
			totalContents = sns.length;
			if((totalContents%contentPerPage) == 0){
				totalPageNum = totalContents/contentPerPage;
				break;
			}else{
				totalPageNum = parseInt(totalContents/contentPerPage)+1;
				break;
			}	
	}
}

// Detail Components
var preDetail = '<div id="detail-area" class="col-lg-12">'
				+'<div class="row">';
var detailModal = '<div id="detailModal" class="pageModal">'
				  +'<span class="mclose">&times;</span>'
				  +'<img class="mcontent" id="img01">'
				  +'<div id="mcaption"></div>'
				  +'</div>'
var surDetail = '</div>'+detailModal+'</div>';
// Web Components
var preWeb = '<div id="web-area" class="col-lg-12">'
				+'<div class="row">';
var surWeb = '</div></div>';
// Sns Components
var preSns = '<div id="sns-area" class="col-lg-12">'
		   + '<div class="row">';
var surSns = '</div></div>';

// Pagination Components
var prePaginagtion = '<div class="row iq-mt-80">'
			   +'<div class="col-lg-12 col-md-12 text-center">'
  			   +'<ul class="pagination pagination-lg">';
var surPagination = '</ul></div></div>';
var paginationPre='';
var paginationSur='';

function drawSns(num){
	$('#content-wrap').children().remove();
	var preSlice = contentPerPage*(num-1);
	var surSlice = preSlice + contentPerPage;
	var basicSns = sns.slice(preSlice, surSlice);
	var snsContent = basicSns.map(function(item){
		var result=
		'<div class="col-lg-4 col-md-4 col-sm-4 iq-mb-20">'
		+'<div class="iq-blog-box">'
		+'<div class="iq-blog-image clearfix">'
		+'<img class="img-responsive center-block" src="'+item.image+'" alt="SNS service">'
		+'</div>'
		+'<div class="iq-blog-detail">'
		+'<div class="blog-title">'
		+'<a href="javascript:void(0)">'
		+'<h5 class="iq-tw-6">'+item.content+'</h5>'
		+'</a>'
		+'</div></div></div></div>';
		
		return result;
	});
	var snsContents = snsContent.join('');
	$('#content-wrap').append(preSns + snsContents + surSns);
}
			
function drawWeb(num){
	$('#content-wrap').children().remove();
	var preSlice = contentPerPage*(num-1);
	var surSlice = preSlice + contentPerPage;
	var basicWeb = web.slice(preSlice, surSlice);
	var webContent = basicWeb.map(function(item){
		var result =
		'<div class="col-lg-6 col-md-6 col-sm-6 iq-mb-20">'
		+'<div class="iq-blog-box">' 
		+'<div class="iq-blog-image clearfix">'
		+'<img class="img-responsive center-block" src="'+item.image+'" alt="WebSite Service">'
		+'</div>'
		+'<div class="iq-blog-detail">'
		+'<div class="blog-title">'
		+'<a href="javascript:void(0)">'
		+'<h5 class="iq-tw-6">'+item.name+'</h5>'
		+'</a>'
		+'</div>'
		+'<div class="iq-blog-meta">'
		+'<ul class="list-inline">'
		+'<li><a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true"></i>'+item.address+'</a></li>'
		+'</ul>'
		+'</div>'
		+'<div class="blog-content">'
		+'<p>'+item.content+'</p>'
		+'</div></div></div></div>'
		return result;
	});
	
	var webContents = webContent.join('');
	$('#content-wrap').append(preWeb + webContents + surWeb);
	
	
}	


function drawDetail(num){
	$('#content-wrap').children().remove();
	var preSlice=contentPerPage*(num-1);
	var surSlice=preSlice+contentPerPage;
	
	var basicDetail = detail.slice(preSlice,surSlice);	
	var detailContent = basicDetail.map(function(item){
		var result=
		'<div class="col-lg-4 col-md-4 col-sm-4 iq-mb-20">'
		+'<div class="iq-blog-box">'
		+'<div class="iq-blog-image clearfix img-detail-page">'
		+'<img class="img-responsive center-block myImg" src="'+item.image+'" alt="DetailPage Service">'
		+'</div>'
		+'<div class="iq-blog-detail">'
		+'<div class="blog-title">'
		+'<a href="#">'
		+'<h5 class="iq-tw-6">'+item.name+'</h5>'
		+'</a>'
		+'</div>'
		+'<div class="blog-content">'
		+'<p>'+item.content+'</p>'
		+'</div></div></div></div>';
		return result;
	});
	var detailContents = detailContent.join('');
	$('#content-wrap').append(preDetail + detailContents + surDetail);
	$(".myImg").click(function() {
		$("#detailModal").show();
		var main = $(this).attr('src');
		$("#img01").attr('src', main);
		var text = $(this).attr('alt');
		$("#mcaption").text(text);
	});

	$(".mclose").click(function() {
		$("#detailModal").hide();
	});
}	

function firstPage(){
	alert('첫페이지 입니다');
}
function lastPage(){
	alert('마지막 페이지 입니다');
}
	
function drawPagination(code,num){
	$('#pagination-wrap').children().remove();
	var first; 
	var last;
	if(num%pageCnt==1){
		first=num;
		last=num+2;
	}else if(num%pageCnt==2){
		first=num-1;
		last=num+1;
	}else if(num%pageCnt==0){
		first=num-2;
		last=num;
	}
	if(last>totalPageNum){
		last=totalPageNum;
	}
	
	var result='';
	for(i=first;i<=last;i++){
		if(i==num){
			result += '<li class="active"><a href="javascript:makePage('+code+','+i+')">'+i+'</a></li>';	
		}else{
			result += '<li><a href="javascript:makePage('+code+','+i+')">'+i+'</a></li>';	
		}
	}
	if(first==1){
		paginationPre = '<li class="disabled"><a href="javascript:firstPage()"><i class="ion-ios-arrow-left"></i></a></li>';
	}else{
		paginationPre = '<li><a href="javascript:makePage('+code+','+(first-1)+')"><i class="ion-ios-arrow-left"></i></a></li>';
	}
	
	if(last>=totalPageNum){
		paginationSur = '<li class="disabled"><a href="javascript:lastPage()"><i class="ion-ios-arrow-right"></i></a></li>';
	}else{
		paginationSur = '<li><a href="javascript:makePage('+code+','+(last+1)+')"><i class="ion-ios-arrow-right"></i></a></li>';
	}
			
	$('#pagination-wrap').append(
	prePaginagtion
	+paginationPre+result
	+paginationSur
	+surPagination);
}

function makePage(code,num){
	$('#tab-menu').children().removeClass('active');
	switch(code){
		case 1:
		$('#detail').addClass('active');
		detailPage=num;
		makeVariable('detail');
		drawDetail(detailPage);
		drawPagination(code,detailPage);
			break;
		case 2:
		$('#web').addClass('active');
		webPage=num;
		makeVariable('web');
		drawWeb(webPage);
		drawPagination(code,webPage);
			break;
		case 3:
		$('#sns').addClass('active');
		snsPage=num;
		makeVariable('sns');
		drawSns(snsPage);
		drawPagination(code,snsPage);
			break;	
	}		
}

	
	
$(function(){
	
	//makePage(1,detailPage);
	makePage(1,detailPage);
	
	$('#detail').click(function(){
		makePage(1,detailPage);
	});
	$('#web').click(function(){
		makePage(2,webPage);
	});
	$('#sns').click(function(){
		makePage(3,snsPage);
	});
	
	
	
});