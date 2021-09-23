<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user of users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput">
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            users: ["Adhara", "Arora", "Trishan", "Abir", "Nishi"]
        }
    },
    methods: {
        addUser() {
            let enteredUser = this.$refs.userNameInput.value;
            this.users.unshift(enteredUser)
        },
        removeUser(user) {
            this.users = this.users.filter(usr => usr !== user)
        }
    }
}
</script>


<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 1rem 0;
    }
    li {
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
    }
    
    .user-list-enter-from {
        opacity: 0;
        transform: translateX(-30px);
    }

    .user-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .user-list-enter-active {
        transition: all 1s ease-out;
    }

    .user-list-leave-active {
        transition: all 1s ease-in;
        position: absolute;
    }

    .user-list-leave-from,
    .user-list-enter-to {
        opacity: 1;
        transform: translateX(0px);
    }

    .user-list-move {
        transition: transform 0.8s ease;
    }
</style>