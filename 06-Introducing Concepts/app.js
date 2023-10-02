const app = Vue.createApp({
    data() {
        return {
            friends: [
              {
                id: 'muteeb',
                name: 'Muteeb Ur Rehman',
                phone: '12313 2313 222',
                email: 'muteeb@gmail.com',
              },
              {
                id: 'rehman',
                name: 'Rehman',
                phone: '11111 233 3333',
                email: 'rehman@gmail.com',
              }
            ]
        };
    },
   
});

app.component('friend-contact',{
    template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{friend.email}} </li>
    </ul>
  </li>
    `,
    data(){
        return {
            detailsAreVisible: false,
            friend:  {
                id: 'muteeb',
                name: 'Muteeb Ur Rehman',
                phone: '12313 2313 222',
                email: 'muteeb@gmail.com',
              },
        }
    },
    methods:{
         toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
         }
    }
});
app.mount('#app');