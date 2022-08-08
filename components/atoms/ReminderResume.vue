<template>
    <v-chip
        label
        :color="reminder.color"
    >
        {{ reminder.reminder }}
    </v-chip>
</template>

<script>
export default {
    name: 'ReminderResume',
    props: {
        reminder: {
            type: Object,
            required: true
        },
    }
}
</script>