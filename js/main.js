// console.log('funziona', axios);

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Lista di email',
            emails: [],
            i: 0,
        }
    },
    methods: {
        fetchEmail() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        const newEmail = res.data.response;
                        this.emails.push(newEmail);
                        console.log(this.emails);
                    }, (err) => {
                        console.log(err);
                    });
            }
        }
    },
    created() {
        this.fetchEmail()
    },
    mounted() {
    }
}).mount('#app')








// axios
// .get('https://flynn.boolean.careers/exercises/api/random/mail')
// .then((res) => {
//     console.log(res)
//     console.log(res.data.response)
// })

