document.write(`
    <nav class="navbar navbar-expand-lg navbar-light break-side fix-top">
        <a class="navbar-brand" href="#">
            <img class="d-inline-block" src="../img/logo/ngcc100.png" alt="NGC Computer" height="50px">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-top">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id="nav-top" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        Beranda
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        Kategori
                    </a>
                    <div class="dropdown-menu transistion">
                        <a class="dropdown-item" href="menu/laptop.html">
                            Laptop
                        </a>
                        <a class="dropdown-item" href="menu/mb.html">
                            Motherboard
                        </a>
                        <a class="dropdown-item" href="menu/processor.html">
                            Processor
                        </a>
                          <a class="dropdown-item" href="menu/ram.html">
                            RAM
                        </a>
                        <a class="dropdown-item" href="menu/hdd.html">
                            HDD/SSD
                        </a>
                        <a class="dropdown-item" href="menu/psu.html">
                            PSU
                        </a>
                        <a class="dropdown-item" href="menu/keyboard.html">
                            Keyboard
                        </a>
                        <a class="dropdown-item" href="menu/mouse.html">
                            Mouse
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">
                        Tentang
                    </a>
                </li>
            </ul>
            <form class="form-inline">
                <input class="form-control" type="search" placeholder="Cari Disini">
                <button class="btn btn-outline-dark" type="submit">
                    Cari
                </button>
            </form>
        </div>
    </nav>
`);