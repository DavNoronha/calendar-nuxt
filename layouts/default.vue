<template>
    <v-app>
        <header>
            <v-row>
                <v-col class="d-flex justify-center align-center">
                    <h1><strong>Calender</strong></h1>
                </v-col>
            </v-row>
        </header>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer
            :absolute="!fixed"
            app
        >
            <span v-if="!showBackBtn">&copy; {{ new Date().getFullYear() }}</span>
            <v-row class="py-5">                
                <v-col
                    v-if="showBackBtn"
                    id="backBtn"
                    class="d-flex justify-center align-center"
                >
                    <v-btn
                        to="/"
                        color="#4FC3F7"
                    >
                        Voltar
                    </v-btn>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data () {
        return {
            fixed: false,
        }
    },
    computed: {
        showBackBtn() {
            return this.$route.name == 'day-day' ? true : false
        }
    }
}
</script>

<style scoped>
header {
    padding: 5px 0px;
    background-color: #512DA8;
}
</style>