<template>
  <div>
    <div>
      <button class="btn mt-3" @click="sortbyPrice">Sort by Price <i class="fa-solid fa-arrow-up"></i> <i
          class="fa-solid fa-arrow-down"></i></button>
      <button class="btn" @click="sortbyCategory">Sort by Category</button>
    </div>
  </div>
  <div>
    <div class="row mt-5" style="gap: 5rem; padding: 20px; justify-content: center" v-if="!isLoading && products">
      <div class="card" v-for="product in products" :key="product.id" style="width: 18rem; background-color: transparent">
        <img :src="product.imgURL" class="card-img-center" alt="...">
        <div class="card-body">
          <h2 class="text-light">{{ product.prodName }}</h2>
          <p class="text-light">{{ product.category }}</p>
          <button type="button" class="btn" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + product.id">
            See More
          </button>
          <div class="modal fade" :id="'exampleModal' + product.id" tabindex="-1"
            :aria-labelledby="'exampleModalLabel' + product.id" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" :id="'exampleModalLabel' + product.id"></h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                  <!-- <img :src="product.imgURL" class="card-img-center" alt="..."> -->
                  <div class="product-info">
                    <h4>{{ product.category }}</h4>
                    <p class="assorted">{{ product.prodDescription }}</p>
                    <p>Pieces: {{ product.prodQuantity }}</p>
                    <p class="price">R{{ product.prodPrice }}</p>
                  </div>
                  <div class="buttons">
                    <a href="./ProductView.vue" type="button" class="btn">Details</a>
                    <button type="button" class="btn" @click="addToCart(product)">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SpinnerC v-if="isLoading" />
  </div>
</template>
<script>
import axios from 'axios';
import SpinnerC from '../components/SpinnerC.vue';

export default {
  data() {
    return {
      products: null,
      isLoading: true,
    };
  },
  methods: {
    async getProducts() {
      let res = await axios.get('https://sushi-store2.onrender.com/products');
      let { results } = await res.data;
      this.products = results;
    },
    addToCart(product) {
      alert(`${product.prodName} added to cart!`);
    },

    methods: {
      sortbyPrice() {
        if (this.sortDir === "asc") {
          this.products.sort((a, b) => a.prodPrice - b.prodPrice);
          this.sortDir = "desc";
        } else {
          this.products.sort((a, b) => b.prodPrice - a.prodPrice);
          this.sortDir = "asc";
        }
      },

      sortbyCategory() {
        this.products.sort((a, b) => {
          if (a.category < b.category) {
            return -1;
          } else if (a.category > b.category) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  },
  mounted() {
    this.getProducts();
  },
  components: {
    SpinnerC,
  },
};
</script>


<style scoped>
.assorted{
  color: black;
}
  .card-img-top {
    max-width: 50% !important;
    max-height: 50% !important;
    height: auto;
  }
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

h1, p, h5, div, h2, h3, span{
  color:rgb(0, 0, 0) !important
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.products>div {
  width: calc(25% - 20px);
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 1024px) {
  .products>div {
    width: calc(33.33% - 20px);
  }
}

@media screen and (max-width: 768px) {
  .products>div {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 480px) {
  .products>div {
    width: calc(100% - 20px);
  }
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #EB455F;
}
.card-body:hover{
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #BAD7E9;
  transition: 1s;
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
    -3px -3px 10px transparent;
  transform: translateX(-0.5em) translateY(-0.5em);
}

.btn:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}

.btn2 {
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
  border: none;
}

.btn2:hover {
  box-shadow: 6px 6px 0px #969696,
    -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}

.btn2:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}

#loadproducts {
  display: inline-block;
  background: #2B3467;
  width: 25%;
  margin-bottom: 20px;
  color: #fff;
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
  transition: background 0.5s ease-out;
  border: none;
}

#loadproducts:hover {
  box-shadow: 6px 6px 0px #969696,
    -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}

#loadproducts:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}
</style>


