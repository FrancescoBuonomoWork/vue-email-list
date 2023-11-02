// console.log('funziona', axios);

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Lista di email',
        emails:[],
        i : 0,
      }
    },
    methods:{
        
        fetchEmail(){
            //   while(this.emails.lenght < 10){
                
                  axios
                      .get('https://flynn.boolean.careers/exercises/api/random/mail')
                      .then((res) =>{
                          // console.log(res);
                          const newEmail = res.data.response;
                          
                          this.emails.push(newEmail);
                          
                          
                        })
                        console.log(this.emails);
            //   }
        }

    },
    created() {
        // while(this.emails.lenght < 10){
        this.fetchEmail()

        // console.log(emails) } 
        
    }
  }).mount('#app')








// axios
// .get('https://flynn.boolean.careers/exercises/api/random/mail')
// .then((res) => {
//     console.log(res)
//     console.log(res.data.response)
// })

