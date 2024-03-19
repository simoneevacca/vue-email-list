const { createApp } = Vue
createApp({
    data() {


        return {
            randomMail: null,
            number: 10,
            mailArray: []

        }
    },

    methods: {
        callApi() {
            for (let i = 0; i < this.number; i++) {
                
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response);
                        this.randomMail = response.data.response
                        this.mailArray.push(response.data.response)
                    })
                    
                }
                console.log(this.mailArray);

        },

        generate() {
            
            this.mailArray = []
            this.callApi()
        }
    },

    mounted() {
        this.callApi()
    }
}).mount('#app')