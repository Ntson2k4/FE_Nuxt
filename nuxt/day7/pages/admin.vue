<template>
    <div>
        <h1>Admin Page</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <button @click="editItem(item)">Edit</button>
                <button @click="deleteItem(item.id)">Delete</button>
            </li>
        </ul>
        <form @submit.prevent="submitForm">
            <input v-model="formData.name" placeholder="Item Name" required />
            <input v-model="formData.id" type="hidden" />
            <button type="submit">{{ editingItem ? 'Update Item' : 'Add Item' }}</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([]);
        const formData = ref({ id: null, name: '' });
        const editingItem = ref(null);

        const fetchItems = async () => {
            const data = await $fetch('/api/admin-items');
            items.value = data;
        };

        const addItem = async () => {
            const newItem = { name: formData.value.name };
            const response = await fetch('/api/admin-items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem)
            });
            if (response.ok) {
                const addedItem = await response.json();
                items.value.push(addedItem);
                resetForm();
            } else {
                console.error('Failed to add item');
            }
        };

        const updateItem = async () => {
            const updatedItem = { name: formData.value.name };
            const response = await fetch(`/api/admin-items/${formData.value.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedItem)
            });
            if (response.ok) {
                const index = items.value.findIndex(item => item.id == formData.value.id);
                if (index !== -1) {
                    items.value[index].name = updatedItem.name; // Cập nhật trong mảng cục bộ
                }
                resetForm();
            } else {
                console.error('Update failed');
            }
        };

        const deleteItem = async (id) => {
            console.log('Deleting item with ID:', id); // Kiểm tra ID
            const response = await fetch(`/api/admin-items/${id}`, { method: 'DELETE' });
            if (response.ok) {
                items.value = items.value.filter(item => item.id !== id);
            } else {
                console.error('Delete failed', response.statusText);
            }
        };




        const submitForm = async () => {
            if (editingItem.value) {
                await updateItem();
            } else {
                await addItem();
            }
        };

        const resetForm = () => {
            formData.value.name = '';
            formData.value.id = null;
            editingItem.value = null;
        };

        const editItem = (item) => {
            editingItem.value = item;
            formData.value.name = item.name;
            formData.value.id = item.id; // Gán ID đúng
        };

        fetchItems(); // Lấy danh sách khi component được mount

        return { items, formData, editingItem, submitForm, deleteItem, editItem };
    }
};
</script>
