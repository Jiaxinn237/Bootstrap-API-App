<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/homepage" class="nav-link">
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
.navbar {
    background-color: #343a40;
    /* Set the background color for both states */
}

.navbar-brand i {
    color: #fff;
    /* Set the color of the icon */
}

.nav-link {
    color: #fff;
    /* Set the color of the navigation links */
}

.nav-link i {
    margin-right: 10px;
}

/* Styles specific to the collapsed state using a media query */
@media (max-width: 991px) {
    .navbar-collapse {
        background-color: #343a40;
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
    margin-bottom: 80px;
}


</style>