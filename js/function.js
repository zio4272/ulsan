function logout()
{
	$('form[name=logoutFrm]').submit();
}


// 페이지이동
function moveUrl(url)
{
	location.href= ""+url;
}

// 숫자
function onlyNumber(event)
{
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		return false;
}
function removeChar(event) 
{
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else{
		if(event.target!=undefined){
			event.target.value = event.target.value.replace(/[^0-9]/g, "");
		}
	}
}



//form에 값 입력	(인수 : 이름,값)
function setForm(name,val){
	var obj = jQuery("input[name='"+name+"']");	
	var otype  = obj.attr("type");
	
	switch(otype){
		case "text": //text
			obj.val(val); 
			break;
		case "password": //password			
			obj.val(val); 			
			break;	
		case "hidden": //hidden
			obj.val(val); 			
			break;	
		case "radio": //radio
			jQuery("input[name='"+name+"'][value='"+val+"']").attr("checked","checked");				
			break;
		case "checkbox": //checkbox
			jQuery("input[name='"+name+"'][value='"+val+"']").attr("checked","checked");				
			break;			
		default://select
			jQuery("select[name='"+name+"'] > option[value='"+val+"']").attr("selected","selected");
			break; 
	}	
}


function setCate(set_id,parent_no,no,dep,i_flag){	
	
	//alert("set_id:"+set_id+"parent_no:"+parent_no+"no:"+no+"i_flag:"+i_flag);
	
	var request = $.ajax({
	  url: "/list/category_list.php",
	  method: "POST",
	  data: { parent_idx : parent_no, idx : no, depth : dep, ink_flag : i_flag },
	  dataType: "html"
	});
	 
	request.done(function( msg ) {
	  $( "#"+set_id ).html( msg );
	  //alert(msg);
	});
}


function validEMAIL( str )
{
	str = $.trim( str );

     /* check whether input value is included space or not  */
     if(str == ""){
     	alert("이메일 주소를 입력하세요.");
     	return 0;
     }
     var retVal = checkSpace( str );
     if( retVal != "") {
         alert("이메일 주소를 빈공간 없이 넣으세요.");
         return 0;
     }
          
     /* checkFormat */
     var isEmail = /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;
     if( !isEmail.test(str) ) {
         alert("이메일 형식이 잘못 되었습니다.");
         return 0;
     }
     if( str.length > 50 ) {
         alert("이메일 주소는 50자까지 유효합니다.");
         return 0;
     }
/*
	 if( str.lastIndexOf("daum.net") >= 0 || str.lastIndexOf("hanmail.net") >= 0 ) {
 		 alert("다음 메일 계정은 사용하실 수 없습니다.");
		 document.forms[0].email.focus();  
		 return 0;
	 }
*/

     return 1;
}

function checkSpace( str )
{
     if(str.search(/\s/) != -1){
     	return 1;
     }

     else {
         return "";
     }
}