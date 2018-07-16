function ListPaging(totalList, currentPage, returnSelect, rowCnt){
	/*
	totalList : 리스트 총 개수
	totalPage : 리스트 총 페이지 수
	currentPage : 현재 보여지는 페이지번호
	viewRows : 페이지당 화면에 보여지는 리스트 수
	viewPage : 화면에 보여지는 최대 페이지 수
	returnSelect : 페이지 클릭스 호출하는 함수 이름
	firstViewPage : 화면에 보여지는 처음 페이지
	lastViewpage : 화면에 보여지는 마지막 페이지
	*/
	this.returnSelect = returnSelect;
	var rCnt = 0;
	if(rowCnt != undefined)
	{
		rCnt = parseInt(rowCnt);
	}
	else
	{
		rCnt = 10;
	}	
	var viewPage = 5;	
	
	
	var tl = parseInt(totalList);


	var currentPage = parseInt(currentPage);
	
	var totalPage = Math.floor((tl + rCnt - 1)/rCnt);
	var firstViewPage = (Math.floor(currentPage/viewPage))*viewPage + 1;
	var lastViewpage = (Math.ceil(currentPage/viewPage))*viewPage + 1;
	if(currentPage%viewPage == 0){ firstViewPage = lastViewpage - viewPage; }
	if(lastViewpage > totalPage){ lastViewpage = totalPage + 1; }	 

	var viewHTML = "";

	if( tl > 0 )
	{
		if(currentPage > 1) 
		{
			var prev = currentPage-1;
			var currentViewPage = (firstViewPage-viewPage)>0 ?firstViewPage-viewPage : 1;  

			viewHTML += "<a class='first_back' href='javascript:;' onclick='"+this.returnSelect+"(1);'><<</a>";
			viewHTML += '<a class="next_back" href="javascript:;" onclick="'+this.returnSelect+'('+currentViewPage+');"><</a>';
		}
		else
		{
			viewHTML += '<a class="first_back" href="javascript:;"><<</a>';
			viewHTML += '<a class="next_back" href="javascript:;"><</a>';
		}
	}
	
	
	for(var i = firstViewPage ; i < lastViewpage ; i++){
		if(i == currentPage){		
			viewHTML += '<a class="num on" href="javascript:;" onclick="'+this.returnSelect+'('+i+');" >'+i+'</a>';	
		}else{
			viewHTML += '<a class="num"href="javascript:;" onclick="'+this.returnSelect+'('+i+');" >'+i+'</a>';
		}
	}
	
	if( tl > 0 )
	{
		if(currentPage < totalPage)
		{
			var next = currentPage+1;
			var currentViewPage = (firstViewPage+viewPage)>totalPage ? currentPage : firstViewPage+viewPage; 

			viewHTML += '<a class="next_back" href="javascript:;" onclick="'+this.returnSelect+'('+currentViewPage+');" >></a>';
			viewHTML += '<a class="first_back" href="javascript:;" onclick="'+this.returnSelect+'('+totalPage+');" >>></a>';
		}
		else
		{
			viewHTML += '<a class="next_back" href="javascript:;">></a>';
			viewHTML += '<a class="first_back" href="javascript:;">>></a>';
		}
	}
	return viewHTML;
}
