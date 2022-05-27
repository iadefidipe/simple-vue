const app = Vue.createApp({
  // template: '<h1>{{firstName}}</h1>',
  //data that you use in the app
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    }
  },
  //functions that you call in the components
  methods: {
    async getUser() {
      const res = await fetch ('https://randomuser.me/api') 
      const {results} = await res.json()

      this.firstName = results[0].name.first
      this.lastName= results[0].name.last
      this.email= results[0].email
      this.gender= results[0].gender
      this.picture= results[0].picture.large
    },
  },
})

app.mount("#app")
