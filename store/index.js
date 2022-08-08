export const state = () => ({
    reminders: []
})

export const mutations = {
    SET_REMINDER(state, payload) {
        state.reminders.push(payload)
        state.reminders.sort((a, b) => a.hour - b.hour)
    },
    EDIT_REMINDER(state, payload) {
        let itemToEdit = state.reminders.find(item => item.id == payload.id);
        let index = state.reminders.indexOf(itemToEdit);
        
        state.reminders.splice(index, 1, payload)
        state.reminders.sort((a, b) => a.hour - b.hour)
    },
    DELETE_REMINDER(state, payload) {
        let itemToRemove = state.reminders.find(item => item.id == payload.id);
        let index = state.reminders.indexOf(itemToRemove);

        state.reminders.splice(index, 1)
    }
}

export const getters = {
    GET_REMINDERS: (state) => state.reminders
}