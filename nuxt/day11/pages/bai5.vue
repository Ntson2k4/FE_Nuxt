<template>
    <div>
        <h1>Item Management</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                <strong>{{ item.name }}</strong>: {{ item.description }}
                <button @click="deleteItem(item.id)">Delete</button>
            </li>
        </ul>
        <form @submit.prevent="addItem">
            <input v-model="newItem.name" placeholder="Item Name" required />
            <input v-model="newItem.description" placeholder="Item Description" required />
            <button type="submit">Add Item</button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);
const newItem = ref({ name: '', description: '' });

async function fetchItems() {
    const data = await $fetch('/api/items');
    items.value = data || [];
}
onMounted(fetchItems);

async function addItem() {
    await $fetch('/api/items', {
        method: 'POST',
        body: newItem.value,
    });
    fetchItems();
    newItem.value={name:'',description:''}
}

async function deleteItem(id) {
    await $fetch('/api/items', {
        method: 'DELETE',
        body: { id },
    });
    fetchItems();
}
</script>


<style scoped>
form {
    margin-top: 20px;
}

label,
input {
    display: block;
    margin-bottom: 10px;
}

button {
    margin-top: 10px;
}
</style>