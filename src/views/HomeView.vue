<template>
  <div class="home">
    <div class="home-text">
      <h1>Welcome to the Sushi Store</h1>
      <p>Discover the best sushi in town and experience the perfect fusion of Japanese and Western cuisine.</p>
      <div class="home-buttons">
        <router-link to="/products" custom v-slot="{ navigate }"><a @click="navigate" role="./ProductView.vue"
            class="btn">Store</a></router-link>
        <a class="btn">About Us</a>
        <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom">Follow Us</button>
        <!--Icons not showing up-->
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title mx-auto" id="offcanvasBottomLabel"> Follow us, so that you can stay up to date with the latest and freshest sushi platters available</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body large mx-auto">
            <span class="span1"><i class="bi bi-instagram"></i></span>
            <span class="span2"><i class="bi bi-twitter"></i></span>
            <span class="span3"><i class="bi bi-linkedin"></i></span>
          </div>
        </div>

      </div>
    </div>
    <div class="home-img">
      <img src="https://i.postimg.cc/Wb0GJ0QC/pexels-ivan-samkov-8951565.jpg" class="image1" alt="Landing Image">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
body {
  /* background-image: url(https://i.postimg.cc/kXKqW5MB/pexels-polina-tankilevitch-4725634.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0%; */
  height: 100vh;
}
.offcanvas-body, span{
  margin: 20px;
  font-size: 60px;
}

.span1{
  color: #EB455F;
}
.span2{
  color: #2B3467;
}
.span3{
  color: #BAD7E9;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  height: 87vh;
}

.home-text {
  text-align: left;
  max-width: 500px;
  margin-right: 2rem;
} 

/* uncomment if background image is making the home text unreadable */
/* p{
  background-color: rgba(255, 255, 255, 0.75);
  text-align: center;
} */
/* p:hover{
  background-color: rgba(255, 255, 255, 0.75);
  text-align: center;
  transform:scale(1.1);
  transition: 2s;
} */

.home-text h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.home-text p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.home-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.btn {
  display: inline-block;
  background: #2B3467;
  width: 50%;
  margin-bottom: 20px;
  color: #fff;
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
  transition: background 0.5s ease-out;
}

.btn:hover {
  box-shadow: 6px 6px 0px #969696,
    -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}

.btn:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}

.home-img {
  max-width: 500px;
}
.home-img:hover{
  max-width: 500px;
  transform: scale(1.1);
  transition: 5s;
}

.home-img img {
  width: 100%;
  height: auto;
}

@media only screen and (min-width: 768px) {
  .home {
    flex-direction: row;
  }

  .home-text {
    margin-right: 4rem;
  }

  .home-buttons {
    flex-direction: column;
  }
}

@media screen and (max-width: 385px) {
  .btn{
  font-size: 12px;
  display: inline-block;
  background: #2B3467;
  width: 50%;
  margin-bottom: 20px;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
  transition: background 0.5s ease-out;
  }
}
</style>
