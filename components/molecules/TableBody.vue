<template>
    <tbody>
        <tr
            v-for="(week, idx) in 5"
            :key="idx"
        >
            <td
                v-for="(day, index) in 7"
                :key="`${idx}${index}`"
            >
                <CardDay
                    :date="sortDay(day)"
                    @addReminder="$emit('openModal', $event)"
                />
            </td>
        </tr>
    </tbody>
</template>

<script>
import CardDay from '@/components/molecules/CardDay.vue';

export default {
    name: 'TableBody',
    components: {
        CardDay
    },
    computed: {
        days() {
            return this.$calendar.getDays()
        }
    },
    methods: {
        sortDay(dayOfTheWeek) {
            let objDay = this.days.find(day => day.dayOfTheWeek == dayOfTheWeek);
            this.days.splice(0, this.days.indexOf(objDay))

            return {
                month: objDay.month,
                date: `${objDay.month}-${objDay.dayOfTheMonth}-${new Date().getFullYear()}`,
                day: objDay.dayOfTheMonth
            };
        }
    }
}
</script>
