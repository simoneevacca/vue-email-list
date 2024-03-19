const { createApp } = Vue
createApp({
    data() {


        return {
            randomMail: null,
            number: 10,

        }
    },

    methods: {
        callApi() {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response);
                    this.randomMail = response.data.response
                })

        }
    },

    mounted() {
        this.callApi()
    }
}).mount('#app')