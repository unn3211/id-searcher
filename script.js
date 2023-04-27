function search(inputId, containerId) {
  /* variables*/
  var classExists = false
  var a = document.getElementById(inputId).value.toLowerCase()
  var b = document.getElementById(containerId)

  /* loop through every element in the container */
  for(let i = 0; i < b.childElementCount; i++) {

    /* if id contains the desired value, hide the element */
    if(b.children[i].id.toLowerCase().includes(a) == false) {
      
      b.children[i].classList.add('hidden')
    } else {
      
      b.children[i].classList.remove('hidden')
      classExists = true
      
    }
  } if(classExists == false) {
    /* add YOUR code here :) */
    
    
  }
}
