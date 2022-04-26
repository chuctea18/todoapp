<template>
  <!-- <header>
    <div class="header">
      <div class="left">
        <a href="#" class="title">
          <i class="fa-solid fa-border-all ic-dashboard"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="title">
          <i class="fa-solid fa-puzzle-piece ic-puzzle"></i>
          <span>Collections</span>
        </a>
      </div>
      <div class="right">
        <button class="avatar-btn">
          <img src="../assets/img/hình-mèo-cute-tâm-trạng.jpg" alt="" />
        </button>
      </div>
    </div>
  </header> -->

  <!-- <section class="container">
    <div class="wrap">
      <div class="top">
        <h3>Collection</h3>
        <a href="#" class="right"
          ><i class="fa-solid fa-ellipsis ic-dot"></i
        ></a>
      </div>
    </div>
  </section> -->

  <div class="container">
    <h3>Collections</h3>
    <div>
      <button>Favorites</button>
      <button>All Colections</button>
    </div>
    <div>
      <div class="box">
        <span><i class="fa-solid fa-book-open"></i></span>
        <h3>School</h3>
        <div>
          <p>4/8 done</p>
          <span><i class="fa-regular fa-spinner-third"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
.header {
  height: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #343a40;
}

.left {
  display: flex;
}

.right {
  display: flex;
  align-items: center;
}

.guide {
  border: none;
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 0;
  background: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  margin: auto 15px;
}

.ic-guide {
  color: #9999a1;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #9999a1;
  text-decoration: none;
  margin-right: 15px;
}

.ic-dashboard {
  margin: auto 10px auto 0;
  /* font-size: 19px; */
  width: 19px;
  height: 19px;
}

.ic-puzzle {
  margin: auto 10px auto 0;
  width: 19px;
  height: 19px;
}

.avatar-btn {
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.avatar-btn img {
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0 8px;
  overflow: hidden;
  border-radius: 50%;
}

.container {
  height: 100vh;
  background-color: #1c1d21;
}

/* .wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
} */

.top {
  display: flex;
}

.top .ic-dot {
  color: #9999a1;
}
</style>