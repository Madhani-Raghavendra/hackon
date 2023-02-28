var typed = new Typed(".auto-type", {
  strings: ["FULL STACK DEVELOPMENT", "DATA SCIENCE", "AMAZON WEB SERVICES", "DIGITAL MARKETING"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablinks of tablinks) {
    tablinks.classList.remove("active-link");
  }
  for (tabcontents of tabcontents) {
    tabcontents.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")

}


const nav = document.querySelector('.navcontainer')

 nav.innerHTML= `  <nav class="navbar fixed-top" style="background-color: #e3f2fd;">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="img/Innomatics-Logo1.webp" class="card-img-top" alt="...">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" style="background-color:whitesmoke;">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Courses
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">DATA SCIENCE</a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">FULL STACK DEVELOPMENT</a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">DIGITAL MARKETING</a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">AMAZON WEB SERVICES (AWS)</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        INTERNSHIP
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">DATA SCIENCE INTERNSHIP</a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">FULL STACK INTERNSHIP</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#place">PLACEMENTS</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        ABOUT US
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">ABOUT US </a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">CONTACT US </a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">BLOG </a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">REVIEW </a></li>
                        <hr class="dropdown-divider">
                        <li><a class="dropdown-item" href="#">GALLERY</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">REFER A FRIEND</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>`