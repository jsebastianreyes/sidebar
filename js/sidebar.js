
$navbar = document.querySelector('#navbar-icon')
$sidebar = document.querySelector('#sidebar')


$navbar.addEventListener('click', navbarClick)


function navbarClick(event) {

  // console.log($sidebar.classList.contains("show"))
  if ($sidebar.classList.contains("show")){
    $sidebar.classList.remove('show')
    $sidebar.classList.add('hidden')
  }
  else{
    $sidebar.classList.add('show')
    $sidebar.classList.remove('hidden')

  }
}
