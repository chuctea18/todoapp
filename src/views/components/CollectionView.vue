<template>
  <header>
    <div class="header">
      <div class="left">
        <button class="guide">
          <i class="fa-solid fa-align-justify ic-guide"></i>
        </button>
        <a class="title">
          <i class="fa-solid fa-border-all ic-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </div>
      <div class="right">
        <button class="avatar-btn">
          <img src="../assets/img/hình-mèo-cute-tâm-trạng.jpg" alt="" />
        </button>
      </div>
    </div>
  </header>

  <sidebar class="sidebar">
    <div class="items">
      <h3>Collections</h3>
      <a href="#" class="item">
        <button class="item-ic bg-pink">
          <i class="fa-solid fa-book-open ic"></i>
        </button>
        <span class="item-txt">School</span>
      </a>
      <a href="#" class="item">
        <button class="item-ic bg-blue">
          <i class="fa-solid fa-user ic"></i>
        </button>
        <span class="item-txt">Personal</span>
      </a>
      <a href="#" class="item">
        <button class="item-ic bg-ppl">
          <i class="fa-solid fa-pen ic"></i>
        </button>
        <span class="item-txt">Design</span>
      </a>
    </div>
  </sidebar>

  <section class="container">
    <div class="wrap">
      <form action="">
        <div class="container-header">
          <a href="#" class="left">
            <button class="ic-left">
              <i class="fa-solid fa-angle-left icon-left"></i>
            </button>
            <h3>My Account</h3>
          </a>
          <a href="#" class="right"
            ><i class="fa-solid fa-ellipsis ic-dot"></i
          ></a>
        </div>
      </form>
    </div>
  </section>
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
}

.ic-dashboard {
  margin: auto 10px auto 0;
  font-size: 19px;
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

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #272635;
  min-width: 250px;
  width: 250px;
  height: calc(100% - 60px);
  position: fixed;
}

/* .items h3 {
  margin-top: 0;
  color: #fff;
  padding: 0 24px;

} */

.item,
.items h3 {
  text-decoration: none;
  display: flex;
  font-size: 16px;
  color: #fff;
  display: flex;
  height: 45px;
  align-items: center;
  padding: 0 24px;
}

.item:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.item-ic {
  height: 24px;
  width: 24px;
  margin-right: 20px;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: none;
}

.bg-pink {
  background-color: #f26a8d;
}

.bg-blue {
  background-color: #80ffdb;
}

.bg-ppl {
  background-color: #854798;
}

.item-ic .ic {
  color: #fff;
}

.item-txt {
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.container {
  height: 100vh;
  margin-left: 250px;
  background-color: #1c1d21;
}

form {
  max-width: 420px;
  padding: 10px;
  margin: auto;
  text-align: center;
}

.container-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.container-header .left {
  display: flex;
  justify-content: space-around;
}

.container-header .ic-left {
  border: none;
  outline: none;
  background-color: #272635;
}

.ic-left {
  height: 30px;
  width: 30px;
  margin-right: 20px;
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
}

.icon-left {
  color: #9999a1;
}

.container-header a {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.container-header .ic-dot {
  color: #9999a1;
}
</style>