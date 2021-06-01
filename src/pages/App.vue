<template>
  <div class="box">
    {{ counter }}
    <a-button type="primary" @click="addCount">添加</a-button>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store: any = useStore();

    const counter = computed(() => {
      return store.state.counter;
    });

    const addCount = () => {
      store.commit('addCount');
    };

    return { counter, addCount };
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  height: 500px;
  background: green;
  border-radius: 50%;
}
</style>