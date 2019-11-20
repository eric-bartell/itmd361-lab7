function init(){
//add your javascrip between these two lines of code
  document.getElementById('entrybutton').addEventListener('click', buttonclick);

  function buttonclick(){
  	 var input = document.getElementById('entryinput');
  	 alert('Eric Bartell: '+input.value);
  	 document.getElementById('textoutput').innerHTML = input.value();
  }  
}


window.addEventListener('load', init);
