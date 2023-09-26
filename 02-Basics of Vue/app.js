const app = Vue.createApp({
  //data itself a function i.e method
  data() {
    return {
      //Key value property.
      // You can assign the value of this property by your own i.e string,boolean,curly braces etc.
      //   courseGoal: "Finish the course and learn Vue!",
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      // courseGoalB: '<h2>Master Vue and build amazing apps<h2>!',
      // These data properties are avialable in behind the scenes managed vue app object. Our methods are also avialble there
      //We have access to anything stored in that global object through 'this' keyword
      //Any thing that you return with the object in 'data' can be used in html section.
      vueLink: "https://vuejs.org/",
    };
  },
  //Methods will allow you to execute functions which will executed when something happens. i.e an event occurs
  //Methods will take objects that will be full of methods i.e functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
        //Using 'this' keyword to access data stored in that in that global object
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
