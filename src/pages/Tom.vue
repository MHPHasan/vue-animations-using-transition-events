<template>
    <div class="container">
        <transition name="tom">
            <h2 :class="{animate: tomAnimate}">Tom</h2>
        </transition>
        <button @click="tomAnimates">Tom Animate</button>
        <router-link to="/goals">Course Goals</router-link>
        <router-link to="/tom">Tom</router-link>
        <router-link to="/animationpage">Animation</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tomAnimate: false,
        }
    },
    methods: {
        tomAnimates() {
            this.tomAnimate = true;
        }
    }
}
</script>
