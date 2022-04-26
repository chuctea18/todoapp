<template>
  <div class="sidebar">
    <div class="items">
      <a href="#" class="item">
        <button class="item-ic bg-transparent">
          <i class="fa-solid fa-book-open ic"></i>
        </button>
        <span class="item-txt">School</span>
      </a>
      <a href="#" class="item">
        <button class="item-ic bg-transparent">
          <i class="fa-solid fa-user ic"></i>
        </button>
        <span class="item-txt">Personal</span>
      </a>
      <a href="#" class="item">
        <button class="item-ic bg-transparent">
          <i class="fa-solid fa-pen ic"></i>
        </button>
        <span class="item-txt">Design</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #272635;
  min-width: 250px;
  width: 250px;
  height: calc(100vh - 56px);
}

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