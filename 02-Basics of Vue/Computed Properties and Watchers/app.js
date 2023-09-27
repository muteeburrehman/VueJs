const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        name: "",
        confirmedName:'',
        lastName:''
      };
    },
    // if you want to change data properties in reaction to something
    //then,watcher are useful.
    watch: {
      counter(value){
        if (value > 50){
          const that = this;
          setTimeout(function () {
            that.counter = 0;
          },2000)
        }
      }
      // name(value){
      //   if(value === ''){
      //     return '';
      //   }else {
      //     this.fullName = value + '' + this.lastName;
      //   }
          
      // },
      // lastName(value){
      //   if(value === ''){
      //     return '';
      //   }else{
      //     this.fullName = this.name + '' + value;
      //   }
          
      // }

    },
    // if you want to change just output then, computed properties are useful
    computed:{
      fullName(){
        console.log('Running again...')
        if(this.name === '' || this.lastName == ''){
          return '';
        }
        return this.name + '' + this.lastName;
      }
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
       this.name = '',
       this.lastName = ''
      },
      submitForm(event) {
        event.preventDefault();
        alert("Submitted!!!");
      },
    },
  });
  
  app.mount("#events");
  