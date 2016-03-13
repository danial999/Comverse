window.onresize = OnRes;

function OnRes() {
 

  var width =window.outerWidth;
  var width2 =window.innerWidth;
  var myMarginleft = (width -850)/2 - (width-width2)- (width-width2);
  var myMarginRight = (width -850)/2 + (width-width2);
  var adjust = (1400 -width);
 var fontSize = 0;
  
  if(width>1400) {
 
  
     setStyle('.first' , {'width':70+'%','padding-left':15+'%','padding-right':15+'%'});

  }

  if(adjust>0) {
    adjust=adjust/4;
   
    margin = adjust/6;
    fontSize = (80-adjust/10);

    // setStyle('.nav' , {'font-size':fontSize+'%','width':(19-adjust/50)+'%'});   
      console.log(adjust/50);
    setStyle('.first' , {'width':(70+margin)+'%','padding-left':(15-(margin/2))+'%','padding-right':(15-(margin/2))+'%'});
   
  }

}



window.onload = function(e) {
 OnRes();

};


function setStyle( objId, propertyObject )
{

 var elem = document.getElementById (objId);
 var elem2 = document.querySelectorAll(objId);
 var i;
 if(elem != null) { 
   for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}
else if(elem2 != null){
  for (i = 0; i < elem2.length; ++i) {
   for (var property in propertyObject)
    elem2[i].style[property] = propertyObject[property];
}
}

}








function searchFn() {
  

}
