interface mutationObj {
  addCount: Function,
  [propName: string]: any
}

const mutations: mutationObj = {
  addCount(state) {
    state.counter += 1;
  }
}

export default mutations;
