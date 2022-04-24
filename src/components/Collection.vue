<template>
  <div class="container">
      <header id="header">
          <div class="sidebar">
              <h1>sidebar</h1>       
          </div>
          <div class="avt">

          </div>
      </header>
  </div>
</template>

<script>
export default {
    name: 'CollectionWrap'
}
</script>

<style>
    html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    }

    ol, ul {
    list-style: none;
    }
    
    .container {        
    background-color: rgb(32, 30, 32);
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    }

</style>