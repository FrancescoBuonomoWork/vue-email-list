console.log('funziona', axios);

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        email:''
      }
    },
    methods:{
        fetchEmail(){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) =>{
                    console.log(res)
                    const newEmail = res.data.response
                    this.email = newEmail
                    
                })
        }

    },
    created() {
        this.fetchEmail()
    }
  }).mount('#app')








// axios
// .get('https://flynn.boolean.careers/exercises/api/random/mail')
// .then((res) => {
//     console.log(res)
//     console.log(res.data.response)
// })

