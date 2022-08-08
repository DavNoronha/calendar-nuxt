<template>
    <v-hover  v-slot="{ hover }">
        <v-card
            color="#0097A7"
            min-height="200px"
            min-width="160px"
            max-height="200px"
            max-width="200px"
        >
            <v-card-title class="pa-0 ml-1">{{ date.day }}</v-card-title>

            <v-row
                v-for="(reminder, idx) in reminders"
                :key="idx"
                no-gutters
            >
                <v-col class="ma-1">
                    <ReminderResume
                        :reminder="reminder"
                    />
                </v-col>
            </v-row>                    
            
            <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                    style="height: 40%;"
                >
                    <v-btn
                        color="success"
                        class="mx-3"
                        fab
                        small
                        @click="$emit('addReminder', date)"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>

                    <v-btn
                        color="primary"
                        class="mx-3"
                        fab
                        small
                        @click="$router.push(`/day/${date.day}?month=${date.month}`)"
                    >
                        <v-icon>mdi-text</v-icon>
                    </v-btn>
                </div>
            </v-expand-transition>
        </v-card>
    </v-hover>
</template>

<script>
import ReminderResume from '@/components/atoms/ReminderResume.vue';

export default {
    name: 'CardDay',
    props: {
        date: {
            type: Object,
            required: true
        }
    },
    components: {
        ReminderResume
    },
    computed: {
        reminders() {
            let allRemindersToday = this.$store.getters['GET_REMINDERS']
                .filter(reminder => reminder.date == this.date.date)

            return allRemindersToday;
        }
    }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, .3);
}

p {
    font-size: 15px;
}
</style>