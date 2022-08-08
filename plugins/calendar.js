import Calendar from '@/lib/Calendar.js';

export default (_, inject) => {
    const CALENDAR = new Calendar(new Date().getMonth() + 1);

    inject('calendar', CALENDAR)
}