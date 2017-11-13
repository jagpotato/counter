let vm = new Vue({
  el: '#mycounter',
  data: {
    counters: [
      {text: "", count: 0},
      {text: "", count: 0},
      {text: "", count: 0}
    ]
  },
  methods: {
    countUp: function(counter) {
      counter.count++;
    },
    countDown: function(counter) {
      counter.count--;
    },
    addCounter: function() {
      this.counters.push({count: 0});
    },
    removeCounter: function(counter) {
      let index = this.counters.indexOf(counter);
      this.counters.splice(index, 1);
    }
  }
});
