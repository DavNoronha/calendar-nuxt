<template>
    <v-dialog
        v-model="openModal"
        max-width="600px"
    >
        <v-card
            color="#64B5F6"
            max-height="600px"
            max-width="600px"
            min-height="400px"
            min-width="400px"
        >
            <v-card-title>Lembrete</v-card-title>

            <v-row no-gutters justify="center">
                <v-col cols="11">
                    <v-text-field
                        v-model="reminder.reminder"
                        color="white"
                        class="black--text"
                        label="Lembrete"
                        counter="30"
                        :maxlength="30"
                        outlined
                    />
                </v-col>
            </v-row>
            <v-row no-gutters justify="center">
                <v-col cols="11">
                    <v-text-field
                        v-model="reminder.city"
                        color="white"
                        class="black--text"
                        label="Cidade"
                        outlined
                    />
                </v-col>
            </v-row>
            <v-row no-gutters justify="center">
                <v-col cols="2">
                    <v-select
                        v-model="reminder.hour"
                        label="Hora"
                        color="white"
                        :items="hours"
                    />
                </v-col>
                <v-col cols="3" class="ml-6">
                    <label for="color">Cor do lembrete</label>
                    <input
                        id="color"
                        v-model="reminder.color"
                        type="color"
                    >
                </v-col>
            </v-row>

            <v-card-actions>
                <v-btn
                    color="primary"
                    @click="addReminder()"
                >
                    Adicionar lembrete
                </v-btn>
                <v-btn
                    color="red"
                    @click="openModal = false"
                >
                    Cancelar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ModalAddReminder',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        date: {
            type: Object,
            default: () => ({})
        },
        reminder: {
            type: Object,
            default: () => ({
                reminder: '',
                city: '',
                hour: null,
                color: '',
                date: '',
                id: null
            })
        },
        editting: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        openModal: {
            get() {
                return this.value;
            },
            set(value) {
                this.clearModal()
                
                this.$emit('input', value)
            }
        },
        hours() {
            let arr = [];

            for(let i=1; i<=24; i++) {
                arr.push(i)
            }

            return arr
        }
    },
    methods: {
        addReminder() {
            let payload = {
                reminder: this.reminder.reminder,
                city: this.reminder.city,
                hour: this.reminder.hour,
                color: this.reminder.color,
                date: `${this.date.month}-${this.date.day}-${new Date().getFullYear()}`,
                id: this.reminder.id
            }

            if(this.editting) {
                this.$store.commit('EDIT_REMINDER', payload)
                this.openModal = false;
                return
            }

            payload['id'] = Date.now();
            
            this.$store.commit('SET_REMINDER', payload)
            this.openModal = false;
        },
        clearModal() {
            this.reminder.reminder = '';
            this.reminder.city = '',
            this.reminder.hour = null;
            this.reminder.color = '';
        }
    }
}
</script>