<template>
  <div>
    <div class="container-main">
      <div class=nav>
        <NavBar />
      </div>
      <div class="content">
        <header class="header-main">
          <img class="logo" src="../img/logo.png" />
        </header>
        <ListLinks />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
import ListLinks from '../components/ListButtons/ListBtns';

export default {
  components: {
    // ThemeBtn,
    NavBar,
    ListLinks
  },
}
</script>

<style>
.container-main {
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  /* background-color: #FFFFFF; */
}

.content {
  flex-basis: 60%;
  align-items: center
}

.nav {
  flex-basis: 40%
}

.header-main {
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px;
  margin-bottom: 185px;
}

.logo {
  width: 217px;
  height: 77px;
}
</style>