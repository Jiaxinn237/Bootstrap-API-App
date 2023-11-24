<template>
    <div class="universal-header">
        <img src='src/assets/cookiss.png' class="img-fluid">
        <div style="float: right; padding-top: 40px;">
        <div style="margin-right: 10px; display: inline;">
            <div style="margin-right:10px; display: inline;">
                <span style=" font: 15px 'lato'">
                    PHONE &nbsp;
                </span>
                +603 7773 1510
            </div>
            <div style="display: inline;">
                <span style="display: inline; font: 15px 'lato';">
                    EMAIL &nbsp;
                </span>
                <a href="mailto:enquiry@cookissmobile.com" style="text-decoration: none;" class="link-danger">
                    enquiry@cookissmobile.com
                </a>
            </div>
        </div>
    </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="nav-link">
                <i class="bi bi-house-fill"></i>
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav spaced-navbar">
                    <li class="nav-item">
                        <router-link to="/deletemethod" class="nav-link">
                            <i class="bi bi-trash-fill"></i>Delete</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/getmethod" class="nav-link"><i
                                class="bi bi-arrow-down-square-fill"></i>Get</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/postmethod" class="nav-link"><i
                                class="bi bi-file-earmark-post"></i>Post</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/putmethod" class="nav-link"><i class="bi bi-pencil-square"></i>Put</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/listallmethod" class="nav-link"><i class="bi bi-card-list"></i>List
                            All</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
  
<style scoped>
.universal-header {
    padding-top: 20px;
    display: flex;
}

.universal-header img {
    position: relative;
    padding-left: 6%;
    padding-right: 30%;
    /* padding-bottom: 5px; */
}

.navbar {
    background-color: #2b3035;
    width: 100%;
    text-align: center;
}

.nav-link {
    color: white;
}

.nav-link i {
    margin-right: 10px;
}

/* Styles specific to the collapsed state using a media query */
@media (max-width: 991px) {
    .navbar-collapse {
        background-color: #2b3035;
        /* Set the background color for the collapsed state */
    }


    .navbar-nav .nav-link {
        color: #fff;
        /* Set the color of the navigation links in the collapsed state */
    }
}

.spaced-navbar {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
}

nav {
    width: 100%;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    /* margin-bottom: 80px; */
}
</style>