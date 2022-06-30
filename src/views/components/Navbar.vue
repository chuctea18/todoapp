<template>
  <nav class="navbar">
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
      <button class="btn-guide btn-pink">
        <i class="fa-solid fa-plus" style="font-size: 18px"></i><i></i>
      </button>
      <button class="btn-guide">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 18px"></i>
      </button>
      <button class="btn-guide">
        <i class="fa-regular fa-bell" style="font-size: 18px"></i>
      </button>
      <button class="avatar-btn">
        <img src="" alt="" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #212529;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
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
  margin-right: 40px;
}

.ic-dashboard {
  margin: auto 10px auto 0;
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

.top {
  display: flex;
}

.top .ic-dot {
  color: #9999a1;
}

.btn-guide {
  outline: none;
  background-color: inherit;
  margin-right: 5px;
  color: #fff;
  border-radius: 4px;
  border: none;
}

.btn-pink {
  background-color: #f08080;
}
</style>