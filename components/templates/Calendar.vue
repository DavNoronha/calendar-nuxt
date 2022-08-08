<template>
    <section id="calendar">
        <v-row no-gutters>
            <v-col>
                <v-btn
                    @click="changeCalendar(months.previous)"
                >
                    {{ stringMonths(months.previous) }}
                </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">
                <h1>{{ stringMonths(months.current) }}</h1>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn
                    @click="changeCalendar(months.next)"
                >
                    {{ stringMonths(months.next) }}
                </v-btn>
            </v-col>
        </v-row>

        <table>
            <TableHeader />
            <TableBody @openModal="openModal = true, date = $event" />
        </table>

        <ModalAddReminder
            v-model="openModal"
            :date="date"
        />
    </section>
</template>

<script>
import TableHeader from '@/components/molecules/TableHeader.vue';
import TableBody from '@/components/molecules/TableBody.vue';
import ModalAddReminder from '@/components/organisms/ModalAddReminder.vue';

export default {
    name: 'Calendar',
    components: {
        TableHeader,
        TableBody,
        ModalAddReminder
    },
    data() {
        return {
            openModal: false,
            date: {}
        }
    },
    computed: {
        months() {
            return this.$calendar.getMonths()
        },
    },
    methods: {
        stringMonths(month) {
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

            return MONtHS[month-1]
        },
        changeCalendar(newMonth) {
            this.$calendar.changeMonth(newMonth)
            this.$emit('reRender')
        }
    }
}
</script>