<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Sushi Store 🇯🇵 <img src="https://i.postimg.cc/0j9R7MXR/icons8-sushi-64.png" id="/src/views/HomeView.vue"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link"><i class="bi bi-house-heart"></i> Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin" class="nav-link"> <i class="bi bi-card-checklist"></i> Admin</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link"><i class="bi bi-bag"></i> Our Products</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link"><i class="bi bi-fingerprint"></i> Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link"><i class="bi bi-ticket-perforated"></i> Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link"><i class="bi bi-phone"></i> Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<style scoped>
.navbar-brand {
  color: #9EA1D4;
}
.navbar-brand:hover {
  color: #FD8A8A;
}

.nav-link {
  color: #9EA1D4;
}
.nav-link:hover {
  color: #FD8A8A;
}

nav a.router-link-exact-active {
  color: #FD8A8A;
}

.dropdown-menu {
  background-color:#9EA1D4;
}

.btn{
    color: #9EA1D4;
    border-color:#9EA1D4;
}
.btn:hover{
    color: #FD8A8A;
    background-color: transparent;
}

@media (max-width: 991.98px) {
    .navbar-nav {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-item {
        margin-bottom: 0.5rem;
    }

    .navbar-toggler {
        margin-left: auto;
        margin-right: 0;
    }
}
</style>
  