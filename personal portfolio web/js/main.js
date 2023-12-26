// 
var typed = new Typed(".auto-input", {
  strings: ["Zakir Naik Abir.", "Web Designer.", "Graphic Designer.", "Web Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})

// 
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
      tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// 
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
  sidemeu.style.right = "0";
}
function openmenu(){
  sidemenu.style.right = "-200px";
}

// 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzq63Yw_xulBp5cqzICPpJPv46NejeCdJJVcM1PiHnJ-9P03yYaLZN4TMySalG-S96BzA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
