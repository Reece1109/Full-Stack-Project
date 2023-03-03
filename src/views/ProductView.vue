<template>
  <div>
    <tr v-for="product in products" :key="product.id">
      <td data-label="productID">{{ product.id }}</td>
      <td data-label="category">{{ product.category }}</td>
      <td data-label="name">{{ product.prodName }}</td>
      <td data-label="information">{{ product.prodInfo }}</td>
      <td data-label="price">R{{ product.prodPrice }}</td>
      <td data-label="Quantity">{{ product.prodQuantity }}</td>
      <td data-label="Image"><img :src="product.prodImage" class="img-fluid" style="height:12vh" alt="">
      </td>
    </tr>
  </div>
</template>
  
<script scoped>
export default {
}
</script>