function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("ligthy")) {
  // html.classList.remove("ligthy")
  //} else {
  //   html.classList.add("ligthy")
  //  }
 const img = document.querySelector ("#profile img")
 if(html.classList.contains("light")) {
   img.setAttribute("src", "./assets/avatar-light.png")
 } else {
   img.setAttribute("src", "./assets/avatar.png")
 }

 const alt = img.getAttribute("alt")
}
