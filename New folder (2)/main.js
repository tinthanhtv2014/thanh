function show(){
    var a = document.getElementById('hiennut');
 
    a.style.display = 'block';
   
}

function tatnut(){
    var a = document.getElementById('hiennut');

    a.style.display = 'none';
}






var e = document.getElementById('abcc');
e.style.backgroundColor = 'red';


function sub(){
   var c = document.name1.name2.value;
   var b = document.name3.name4.value;
   if(b.length > 0){
    var a = document.getElementById('hiennut');
    a.style.display = 'none';
    alert('cảm ơn: '+ c + ' số điện thoại '+b);
   }else{
    alert('vui lòng nhập lại');
   }
    
}
