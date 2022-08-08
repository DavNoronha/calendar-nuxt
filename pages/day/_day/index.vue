<template>
    <v-card
        color="#777"
        class="pb-3"
    >
        <v-card-title>
            <v-row>
                <v-col cols="2">
                    <v-card
                        color="#4FC3F7"
                        class="pa-4"
                    >
                        <h1 class="text-center">DIA<br/>{{ $route.params.day }}</h1>
                        <h4>{{ this.dayOfTheWeek }}</h4>
                        <h5>{{ this.stringMonths }}</h5>
                    </v-card>
                </v-col>
                <v-col cols="8" class="d-flex justify-center align-center">
                    <h1>Seus Lembretes do dia!</h1>
                </v-col>
            </v-row>
        </v-card-title>

        <v-card
            v-for="(reminder, idx) in allRemindersToday"
            :key="idx"
            :color="reminder.color"
            class="mx-4 my-2 pa-4"
        >  
            <v-row>
                <v-col>
                    <h3><small>Lembrete:</small> {{ reminder.reminder }}</h3>
                    <h4><small>Cidade:</small> {{ reminder.city }}</h4>
                    <h4><small>Horário:</small> {{ reminder.hour }} Horas</h4>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn
                        fab
                        :color="reminder.color"
                        class="mr-3"
                        @click="edit(reminder)"
                    >
                        <v-icon>mdi-pen</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        small
                        :color="reminder.color"
                        @click="deleteReminder(reminder)"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>

        <ModalAddReminder
            v-model="openModal"
            :reminder="reminderToEdit"
            :date="date"
            :editting="true"
        />
    </v-card>
</template>

<script>
import ModalAddReminder from '@/components/organisms/ModalAddReminder.vue';

export default {
    name: 'dayPage',
    components: {
        ModalAddReminder
    },
    data() {
        return {
            openModal: false,
            reminderToEdit: {}
        }
    },
    computed: {
        day() {
            return this.$route.params.day;
        },
        month() {
            return this.$route.query.month;
        },
        currentDate() {
            let date = {
                day: this.day,
                month: this.month
            }

            return this.$calendar.getDay(date)
        },
        dayOfTheWeek() {
            switch(this.currentDate.dayOfTheWeek.toString()) {
                case '1':  
                    return 'Domingo'
                case '2':  
                    return 'Segunda'
                case '3':  
                    return 'Terça'
                case '4':  
                    return 'Quarta'
                case '5':  
                    return 'Quinta'
                case '6':  
                    return 'Sexta'
                case '7':  
                    return 'Sábado'
                default:
                    return 'Domingo'
            }
        },
        stringMonths() {
            const MONtHS = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ]

            return MONtHS[this.month-1]
        },
        date() {
            return {
                date: `${this.month}-${this.day}-${new Date().getFullYear()}`,
                day: this.day,
                month: this.month
            };
        },
        allRemindersToday() {
            let allRemindersToday = this.$store.getters['GET_REMINDERS']
                .filter(reminder => reminder.date == this.date.date)

            return allRemindersToday;
        }
    },
    methods: {
        deleteReminder(reminder) {
            this.$store.commit('DELETE_REMINDER', reminder)
        },
        edit(reminder) {
            this.reminderToEdit = JSON.parse(JSON.stringify(reminder));
            this.openModal = true;
        }
    }
}
</script>

<style scoped>
h1 {
    line-height: 1.2;
}
</style>