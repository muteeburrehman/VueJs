const app = Vue.createApp({
    data() {
      return {
        currentUserInput: '',
        message: 'Vue is great!',
      };
    },
    methods: {
      saveInput(event) {
        this.currentUserInput = event.target.value;
      },
      setText() {
        this.message = this.currentUserInput;
      },
    },
    beforeCreate() {
        console.log('beforeCreate()');
    },
    beforeMount() {
        console.log('beforeMount()');
    },
    mounted() {
        console.log('mounted()');
    },
    beforeUpdate() {
        console.log('beforeUpdate()');
    },
    updated() {
        console.log('updated()');
    },
    beforeUnmount() {
        console.log('beforeUnmount()');
    },
    unmounted() {
        console.log('unmounted()');
    },
  });
  
  app.mount('#app');

  setTimeout(function () {
    app.unmount();
  }, 3000);
//   //Also we can have multiple apps like
// //   const app2 = Vue.createApp({
//     //    template:`
//     //    <p> {{favoriteMeal}} <p>
//     //    `,
// //     data(){
// //         return{

// //         };
// //     },
// //     methods:{

// //     }
// //   });
// //   app.mount('#app2')

// //   //......
// //   //Javascript itself not reactive 

// //   let message = 'Hello';

// //   let longMessage = message + 'World!';

// //   console.log(longMessage);

// //   message = 'Hello!!!';
// //   //Now in this case javascript will still show Hello World!
// //   console.log(longMessage);

// //........
// const data = {
//     message:'Hello!'
// };

// // const handler = {
// //     set(target,key,value){
// //         console.log(target);
// //         console.log(key);
// //         console.log(value);
// //     }
// // };

// // const proxy = new Proxy(data,)

// const handler = {
//     set( target, key, value){
//         if(key=== 'message'){
//            target.longMessage = value + 'World!'
//         }
//         target.message=value;
//     }
// };

// const proxy = new Proxy ( data , handler);
// proxy.message = 'Hello!!!'
// console.log(proxy.longMessage);