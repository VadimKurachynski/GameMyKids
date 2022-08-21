function alerted(){
   
    var el = document.getElementById('promptaudio');
    el.style.display === 'none' ? el.style.display = 'initial' : el.style.display = 'none';
  }


  function prov(){
    var el = document.getElementById('audio1text').value;
    el=el.toLowerCase();
    if (el=="открытка") {
      var elv = document.getElementById('prompvideo');
     elv.style.display = 'initial';
    }else{
      alert("НЕ ВЕРНО!");
    }
    
  }