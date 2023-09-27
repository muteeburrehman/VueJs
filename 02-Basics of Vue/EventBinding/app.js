const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName:''
    };
  },
  methods: {
    outputFullName(){
        console.log('Running again...')
      if(this.name === ''){
        return '';
      }
      return this.name + '' + 'Ur Rehman';
    },
    add(num) {
      this.counter = this.counter + num;
      // this.counter = this.counter + 1;
      //this.counter++
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter = this.counter - 1;
      //this.counter--
    },
    setName(event) {
        this.name = event.target.value;
    //   this.name = event.target.value + "" + lastName;
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    ResetInput(){
     this.name = ''
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submitted!!!");
    },
  },
});

app.mount("#events");
