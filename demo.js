(function(){
  var objFit = document.querySelector('#objectFitWrapper'),
  objPosX = document.querySelector('#objectPosXWrapper'),
  objPosY = document.querySelector('#objectPosYWrapper'),
  arr = [objFit, objPosX, objPosY],f='cover', x='left', y='center';
  
  if(window.navigator.appVersion.search('Trident')!==-1) {
    for(var i=0; i<document.querySelectorAll('.txt.top').length; i++) {
      document.querySelectorAll('.txt.top')[i].querySelector('.fit').innerHTML = f;
      document.querySelectorAll('.txt.top')[i].querySelector('.x').innerHTML = x;
      document.querySelectorAll('.txt.top')[i].querySelector('.y').innerHTML = y;
    }
    document.querySelector('.para').innerHTML = '<span>You\'re in Internet Explorer Browser.<span>';
    document.querySelector('.para').classList.add('success');
  }
  else{
    for(var i=0; i<document.querySelectorAll('.txt.top').length; i++) {
      document.querySelectorAll('.txt.top')[i].style.display = 'none';
    }
    document.querySelector('.para').innerHTML = '<span>This is not IE Browser. Please View this page in IE for the difference of using and without using JS.</span>';
    document.querySelector('.para').classList.add('error');
    document.querySelector('.values').style.display = 'none';
  }

  for(var i=0; i<arr.length; i++) {
    arr[i].onchange = function(){
      if(this.getAttribute('id').search('Fit')!==-1){
        f = this.value;
        document.querySelector('.txt.top .fit').innerHTML = this.value;
        for(var j=0; j<document.querySelectorAll('.txt.top').length; j++) {
          document.querySelectorAll('.txt.top')[j].querySelector('.fit').innerHTML = f;
        }
        objectFitIE.ieImg('.img', x, y, f);
      }
      else if(this.getAttribute('id').search('PosX')!==-1){
        x = this.value;
        document.querySelector('.txt.top .x').innerHTML = this.value;
        (function(){
        for(var j=0; j<document.querySelectorAll('.txt.top').length; j++) {
            document.querySelectorAll('.txt.top')[j].querySelector('.x').innerHTML = x;
          }
        })();
        objectFitIE.ieImg('.img', x, y, f);
      }
      else {
        y = this.value;
        document.querySelector('.txt.top .y').innerHTML = this.value;
        for(var j=0; j<document.querySelectorAll('.txt.top').length; j++) {
          document.querySelectorAll('.txt.top')[j].querySelector('.y').innerHTML = y;
        }
        objectFitIE.ieImg('.img', x, y, f);
      }
    }
    objectFitIE.ieImg('.img', x, y, f);
  }
})();