

setInterval(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('h1').style.color = "#" + randomColor;
  }, 1000);


  setInterval(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.bentren h2').style.color = "#" + randomColor;
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

var boxx =  document.getElementById('hiennut'); 
var toggle = false;
function cheching(){
  if(toggle){
    boxx.style.display = 'block';
    toggle = false;
  }else{
    boxx.style.display = 'none';
    toggle = true;
  }
}
//kiểm tra họ tên

var a = document.getElementById('form1');
function blurr(erros){
  return erros ? undefined : 'vui lòng nhập tên';
}

if(a){
  a.onblur = function (){
    var valid = blurr(a.value);
    
    if(valid){
      a.classList.add('invalid');
      document.getElementById('fomr1').innerHTML= valid;
    }else{
      a.classList.remove('invalid');
      document.getElementById('fomr1').innerHTML= '';
    }
}
}




//kiểm tra mail
var b = document.getElementById('form2');
function blurrr(erross){
  return erross ? undefined : 'vui lòng nhập mail';
}

if(b){
  b.onblur = function (){
    var valid = blurrr(b.value);
    
    if(valid){
      b.classList.add('invalid');
      document.getElementById('fomr2').innerHTML= valid;
    }else{
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b.value)){
        b.classList.remove('invalid');
        document.getElementById('fomr2').innerHTML= '';
      }else{
        document.getElementById('fomr2').innerHTML= 'vui lòng nhập lại mail';
        b.classList.add('invalid');
      }
}
}
}



//kiểm tra số điện thoại
var c = document.getElementById('form3');
function blurrrr(erros){
  return erros ? undefined : 'vui lòng nhập số điện thoại';
}

if(c){
  c.onblur = function (){
    var valid = blurrrr(c.value);
    
    if(valid){
      c.classList.add('invalid');
      document.getElementById('fomr3').innerHTML= valid;
    }else{
      if(isNaN(c.value)){
        c.classList.add('invalid');
      document.getElementById('fomr3').innerHTML= 'vui lòng nhập lại số điện thoại của bạn !!';
      }else{
        c.classList.remove('invalid');
      document.getElementById('fomr3').innerHTML= '';
      }
      
    }
}
}




//kiểm tra địa chỉ
var d = document.getElementById('form4');
function blurrrrr(erros){
  return erros ? undefined : 'vui lòng nhập địa chỉ';
}

if(d){
  d.onblur = function (){
    var valid = blurrrrr(d.value);
    
    if(valid){
      d.classList.add('invalid');
      document.getElementById('fomr4').innerHTML= valid;
    }else{
      d.classList.remove('invalid');
      document.getElementById('fomr4').innerHTML= '';
    }
}
}





//nút xác nhận
function sub(){
  var a = document.getElementById('form1').value;
  var b = document.getElementById('form2').value;
  var c = document.getElementById('form3').value;
  var d = document.getElementById('form4').value;
  var e;
  
  if(a.length > 0 && b.length > 0 && c.length > 0 && d.length > 0){
   var e = document.getElementById('hiennut');
   e.style.display = 'none';
   alert('cảm ơn: '+ a + ' \r số điện thoại: '+ c + '\r email xác nhận:' + b + '\r địa chỉ ' + d)
  }else{
   alert('vui lòng nhập lại');
  }
   
}



$('.bentren').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});