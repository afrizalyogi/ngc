document.getElementById("header").innerHTML = `
    <header class="carousel slide carousel-fade">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="/img/carousels/carousel1.jpg" alt="ROG Zephyrus Duo 15">
            </div>
            <div class="carousel-item">
                <img class="w-100" src="/img/carousels/carousel2.jpg" alt="ROG Zephyrus S GX502">
            </div>
            <div class="carousel-item">
                <img class="w-100" src="/img/carousels/carousel3.jpg" alt="Lenovo Legion 7i">
            </div>
            <div class="carousel-item">
                <img class="w-100" src="/img/carousels/carousel4.jpg" alt="RTX 3080">
            </div>
        </div>
        <a class="carousel-control-prev" href="header" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="header" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </header>
`;

document.getElementById("nav-top").innerHTML = `
    <nav id="nav-top" class="navbar navbar-expand-lg navbar-light break-side fix-top hiddenup">
    <a class="navbar-brand" href="#">
        <img src="/img/assets/ngcc.svg" alt="NGC Computer" height="50px">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-top">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <button class="btn btn-outline-light">
                    <a class="nav-link" href="../index.html">
                        Beranda
                    </a>
                </button>
            </li>
            <li class="nav-item dropdown">
                <button class="btn btn-outline-light">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        Kategori
                    </a>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/menu/laptop.html#category">
                        Laptop
                    </a>
                    <a class="dropdown-item" href="/menu/mb.html#category">
                        Motherboard
                    </a>
                    <a class="dropdown-item" href="/menu/processor.html#category">
                        Processor
                    </a>
                    <a class="dropdown-item" href="/menu/ram.html#category">
                        RAM
                    </a>
                    <a class="dropdown-item" href="/menu/hdd.html#category">
                        HDD/SSD
                    </a>
                    <a class="dropdown-item" href="/menu/psu.html#category">
                        PSU
                    </a>
                    <a class="dropdown-item" href="/menu/keyboard.html#category">
                        Keyboard
                    </a>
                    <a class="dropdown-item" href="/menu/mouse.html#category">
                        Mouse
                    </a>
                </div>
            </li>
            <li class="nav-item">
                <button class="btn btn-outline-light">
                    <a class="nav-link" href="/index.html#about">
                        Tentang
                    </a>
                </button>
            </li>
        </ul>
        <form class="form-inline">
            <input class="form-control" type="search" placeholder="Cari Disini">
            <button class="btn btn-primary" type="submit">
                Cari
            </button>
        </form>
    </div>
    </nav>
`;

document.getElementById("nav-category").innerHTML = `
    <nav id="category" class="navbar navbar-expand-lg navbar-dark bg-black">
    <ul class="navbar-nav w-75 center">
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/laptop.html#category">
                <img class="category-icon" src="/img/assets/laptop.png" alt="Laptop">
                <br>
                Laptop
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/motherboard.html#category">
                <img class="category-icon" src="/img/assets/motherboard.png" alt="Motherboard">
                <br>
                Motherboard
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/processor.html#category">
                <img class="category-icon" src="/img/assets/proci.png" alt="Processor">
                <br>
                Processor
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/ram.html#category">
                <img class="category-icon" src="./img/assets/ram.png" alt="RAM">
                <br>
                RAM
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/hdd.html#category">
                <img class="category-icon" src="./img/assets/hdd.png" alt="HDD/SSD">
                <br>
                HDD/SSD
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/psu.html#category">
                <img class="category-icon" src="./img/assets/psu.png" alt="Power Supply">
                <br>
                PSU
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/keyboard.html#category">
                <img class="category-icon" src="./img/assets/keyboard.png" alt="Keyboard">
                <br>
                Keyboard
            </a>
        </li>
        <li class="nav-item center">
            <a class="btn btn-outline-primary" href="/menu/mouse.html#category">
                <img class="category-icon" src="./img/assets/mouse.png" alt="Mouse">
                <br>
                Mouse
            </a>
        </li>
    </ul>
    </nav>

    <div id="round-border"></div>
`;

document.getElementById("footer").innerHTML = `
    <div id="round-border"></div>

    <footer>
        <br>
        <hr class="bg-light w-50">
        <div class="row w-50 center">
            <div class="col-lg-5 center">
            <img src="/img/assets/ngcc.svg" alt="NGC Computer" style="cursor: pointer">
            </div>
            <div class="col center d-inline-flex">
            <a class="center" href="mailto:nagechicomputer@gmail.com">
                <img src="/img/assets/email-w.png" alt="Email">
            </a>
            <a class="center" href="https://www.instagram.com/ngccomputer/">
                <img src="/img/assets/ig-w.png" alt="Insta">
            </a>    
            <a class="center" href="https://discord.com/invite/EgTQyquemM">
                <img src="/img/assets/discord-w.png" alt="Discord">
            </a>
            </div>
        </div>
        <hr class="bg-light w-50">	
        <br>
    </footer>
`;