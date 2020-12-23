document.write(`
    <nav class="navbar navbar-expand-lg navbar-light break-side fix-top">
        <a class="navbar-brand" href="#">
            <img src="img/assets/ngcc.svg" alt="NGC Computer" height="50px">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-top">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id="nav-top" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">
                        Beranda
                    </a>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        Kategori
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="laptop.html#category">
                            Laptop
                        </a>
                        <a class="dropdown-item" href="mb.html#category">
                            Motherboard
                        </a>
                        <a class="dropdown-item" href="processor.html#category">
                            Processor
                        </a>
                        <a class="dropdown-item" href="ram.html#category">
                            RAM
                        </a>
                        <a class="dropdown-item" href="hdd.html#category">
                            HDD/SSD
                        </a>
                        <a class="dropdown-item" href="psu.html#category">
                            PSU
                        </a>
                        <a class="dropdown-item" href="keyboard.html#category">
                            Keyboard
                        </a>
                        <a class="dropdown-item" href="mouse.html#category">
                            Mouse
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../index.html#about">
                        Tentang
                    </a>
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
`);