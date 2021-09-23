<template>
    <div class="container">
        <router-link to="/">All Users</router-link>
        <router-link to="/tom">Tom</router-link>
        <router-link to="/goals">Course Goals</router-link>
    </div>

  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <!-- <transition enter-to-class="some-class" enter-active-class="animate"> -->
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUser" v-if="!usarsAreVisible">Show User</button>
      <button @click="hideUser" v-else>Hide User</button>
    </transition>
  </div>
  
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <UsersList></UsersList>
  </div>
</template>  

<script>
import UsersList from '../components/UsersList.vue';
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usarsAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  components: {
    UsersList
  },
  methods: {
    enterCancelled(el) {
      console.log("Enter Cancelled");
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log("Leave Cancelled");
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log("Before Enter");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("Enter");
      console.log(el);

      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if( round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      },20);
    },
    afterEnter(el) {
      console.log("After Enter");
      console.log(el);
    },
    beforeLeave(el) {
      console.log("Before Leave");
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log("Leave");
      console.log(el);

      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if( round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      },20);
    },
    afterLeave(el) {
      console.log("After Leave");
      console.log(el);
    },
    showUser() {
      this.usarsAreVisible = true;
    },
    hideUser() {
      this.usarsAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>