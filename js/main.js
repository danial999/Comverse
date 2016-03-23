window.onresize = OnRes;

function OnRes() {
 

  var width =window.outerWidth;
  var width2 =window.innerWidth;
  console.log("outerWidth="+width);
  console.log("innerWidth="+width2);

  var myMarginleft = (width -850)/2 - (width-width2)- (width-width2);
  var myMarginRight = (width -850)/2 + (width-width2);
  var adjust = (1400 -width);
 var fontSize = 0;
  
  if(width>975) {
  setStyle('.content-wrapper-all' , {'width':950+'px'}); 
     setStyle('.first' , {'width':100+'%'});
        setStyle('.note' , {'width':280+'px'});
     setStyle('.note' , {'margin':2.8+'%'});
      setStyle('#note1' , {'margin-left':0+'%'});
      setStyle('#note3' , {'margin-right':0+'%'});
       setStyle('.second' , {'height':515+'px'});
       setStyle('.success-stories' , {'height':405+'px'});
       setStyle('#fourth--lay--text' , {'font-size':100+'%'});
        setStyle('.month-text' ,  {'font-size':20+'px'});
        setStyle('.date-text' ,  {'font-size':50+'px'});
       
       
  }
  else{ 
      setStyle('.content-wrapper-all' , {'width':100+'%'});
      setStyle('.second' , {'height':800+'px'});
          setStyle('.fifth' , {'height':1200+'px'});
          setStyle('.success-stories' , {'height':700+'px'});
          setStyle('.month-text' ,  {'font-size':18+'px'});
          setStyle('.date-text' ,  {'font-size':45+'px'});
            
    setStyle('#fourth--lay--text' , {'font-size':70+'%'});
    setStyle('.note' , {'width':100+'%'});
     setStyle('.note' , {'margin':0+'%'});
       if(width<635) {
          setStyle('.success-stories' , {'height':1000+'px'});   
        }
  }
  if(width<480) {
    setStyle('.third' , {'height':490+'px'});
      setStyle('#fourth--lay--text' , {'font-size':40+'%'});
  }
  
  else if(width<685){
    setStyle('.third' , {'height':370+'px'});
 
 
    setStyle('.success-stories' , {'text-align':'center'});
      
  }
  else if(width<950){
    setStyle('.third' , {'height':300+'px'});
      
  }
  else {
     setStyle('.third' , {'height':250+'px'});

  }
  

  
  if(adjust>0) {
    adjust=adjust/4;
   
    margin = adjust/6;
    fontSize = (80-adjust/10);

    
   
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
