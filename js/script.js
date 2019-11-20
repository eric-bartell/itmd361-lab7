function init(){
//add your javascrip between these two lines of code
  document.getElementById('entrybutton').addEventListener('click', buttonclick);

  function buttonclick(){
  	 var input = document.getElementById('entryinput').value;
  	 alert('Eric Bartell: '+input);
  	 document.getElementById('textoutput').innerHTML = input;
  }  
}


window.addEventListener('load', init);
