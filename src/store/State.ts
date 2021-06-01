interface stateObj {
  counter: number,
  [propName: string]: any
}

const state: stateObj = {
  counter: 0
}

export default state;
