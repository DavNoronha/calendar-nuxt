<template>
    <thead>
        <tr>
            <th
                v-for="(item, idx) in tableHeaders"
                :key="idx"
            >
                {{ item }}
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: 'TableHeader',
    data() {
        return {
            tableHeaders: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
        }
    }
}
</script>

<style scoped>
th {
    background-color: #444;
    padding: 2px 6px;
}
</style>