<template>
    <v-row justify="center">
        <v-col lg="11" class="d-flex justify-center">
            <Calendar
                :key="renderKey"
                @reRender="renderKey++"
            />
        </v-col>
    </v-row>
</template>

<script>
import Calendar from '@/components/templates/Calendar.vue';

export default {
    name: 'IndexPage',
    components: { Calendar },
    data() {
        return {
            renderKey: 0
        }
    }
}
</script>
