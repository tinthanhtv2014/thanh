

setInterval(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h1').style.color = "#" + randomColor;
  }, 1000);



  setInterval(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.bentren').style.backgroundColor = "#" + randomColor;
  }, 1000);

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
