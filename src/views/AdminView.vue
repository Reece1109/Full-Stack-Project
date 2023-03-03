<template>
  <div>
    <div class="spacing"></div>
    <AddUser></AddUser>
    <!-- <UpdateUser></UpdateUser> -->
    <div class="spacing2"></div>
    <AddProduct></AddProduct>
    <!-- <UpdateProduct></UpdateProduct> -->
    <RouterView></RouterView>
  </div>
</template>
  
  <script>
  import AddUser from '@/components/AddUser.vue';
  // import UpdateUser from '@/components/UpdateUser.vue';
  import AddProduct from '@/components/AddProduct.vue';
  // import UpdateProduct from '@/components/UpdateProduct.vue';
  export default {
    components: {
      AddUser,
      // UpdateUser,
      AddProduct,
      // UpdateProduct
    }
  }
  </script>

  <style scoped>
  .spacing{
    margin-bottom: 100px;
  }
  .spacing2{
    margin-bottom: 100px;
  }
  </style>