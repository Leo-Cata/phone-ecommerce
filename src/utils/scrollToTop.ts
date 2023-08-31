const scrollToTop = () =>{
  //must be written this way because window.scroll does not work when routing
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default scrollToTop