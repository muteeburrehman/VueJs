const app = Vue.createApp({
data() {
    return {
        enteredGoal:'',
        goals: [],
    };
        
        
},
methods: {
    addGoal(){
       this.goals.push(this.enteredGoal);
       this.enteredGoal=''
    },
    removeGoal(indX){
        this.goals.splice(indX,1)
    }
},
});

app.mount('#user-goals');