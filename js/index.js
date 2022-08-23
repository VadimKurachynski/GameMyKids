function alerted1() {

  var el = document.getElementById('prompt1');
  el.style.display == 'none' ? el.style.display = 'initial' : el.style.display = 'none';
}

function alerted2() {
  let muz = document.getElementById('audio-prompt');
  muz.playbackRate = 3.5;

  if (muz.paused) {
    muz.play();
  } else {
    muz.pause();
  }


}


function prov() {
  var el = document.getElementById('audiotext1').value;
  el = el.toLowerCase();
  if (el == "открытка") {
    var elv = document.getElementById('prompvideo');
    elv.style.display = 'initial';
    document.getElementById('nextbt').style.display = 'initial';
    document.getElementById('signupinput').value = "ВЕРНО!"
  } else {
    document.getElementById('signupinput').value = "НЕ ВЕРНО!"

  }

}

function provglavnaja() {
  var el = document.getElementById('kod').value;
  el = el.toLowerCase();
  if (el == "105154554") {
    document.getElementById('dkod').style.display = 'initial';
    document.getElementById('messagekod').value = "ВЕРНО!"
  } else {
    document.getElementById('messagekod').value = "НЕ ВЕРНО!"

  }

}


function see() {

  document.getElementById('picnn').style.display = 'initial';


}



let elem = document.getElementById('audiotext1');

elem.addEventListener('input', function () {
  // document.getElementById('signupinput').value = this.value;
  if (this.value.trim().length === 0) { document.getElementById('signupinput').value = "" }


});

// function next() {
//   let title = document.getElementsByTagName("title")[0].innerHTML;

//   window.open("/2.html", "SO");
//   console.log(title);

// }


