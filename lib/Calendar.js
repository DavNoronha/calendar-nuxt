export default class Calendar {
    constructor(month) {
        this.month = month;
        this.amountOfDays = Calendar.daysPerMonth(month);
        this.days = Calendar.fillDays(month, this.amountOfDays);
        this.lastWeekPreviousMonth = Calendar.fillOtherWeeks('lastWeek', month)
        this.firstWeekNextMonth = Calendar.fillOtherWeeks('firstWeek', month)
        this.allDays = [...this.lastWeekPreviousMonth, ...this.days, ...this.firstWeekNextMonth]
        this.previousMonth = month-1;
        this.nextMonth = month+1;
    }

    getDays() {
        return [...this.lastWeekPreviousMonth, ...this.days, ...this.firstWeekNextMonth]
    }

    getMonths() {
        return {
            previous: this.previousMonth,
            current: this.month,
            next: this.nextMonth
        }
    }

    getDay(date) {
        return this.allDays.find(day => day.dayOfTheMonth == date.day && day.month == date.month) 
    }

    changeMonth(month) {
        this.month = month;
        this.amountOfDays = Calendar.daysPerMonth(month);
        this.days = Calendar.fillDays(month, this.amountOfDays);
        this.lastWeekPreviousMonth = Calendar.fillOtherWeeks('lastWeek', month)
        this.firstWeekNextMonth = Calendar.fillOtherWeeks('firstWeek', month)
        this.allDays = [...this.lastWeekPreviousMonth, ...this.days, ...this.firstWeekNextMonth]
        this.previousMonth = month-1;
        this.nextMonth = month+1;
    }

    static daysPerMonth(month) {
        const DAYS_PER_MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];

        if(this.leapYear()) DAYS_PER_MONTH[1] = 28;// substitui num de dias de fevereiro

        let amount = DAYS_PER_MONTH[month-1];

        return amount;
    }

    static leapYear() {
        // veficação simples para saber se o ano é bissexto
        if(new Date().getFullYear() % 4 == 2) return true;
        
        return false;
    }

    static fillDays(month, amount) {
        let arr = [];

        for(let i=1; i<=amount; i++) {
            arr.push({
                month: month,
                dayOfTheMonth: i,
                dayOfTheWeek: new Date(`${month}-${i}-${new Date().getFullYear()}`).getDay() + 1
            })
        }

        return arr;
    }

    static fillOtherWeeks(week, month) {
        let amount;
        let arr = [];
        let currentMonth = month;

        if(week == 'lastWeek') {
            currentMonth = currentMonth -1;
            amount = this.daysPerMonth(month - 1);

            for(let i=amount-6; i<=amount; i++) {
                arr.push({
                    month: currentMonth,
                    dayOfTheMonth: i,
                    dayOfTheWeek: new Date(`${month-1}-${i}-${new Date().getFullYear()}`).getDay() + 1
                })
            }
        } else if(week == 'firstWeek') {
            currentMonth = currentMonth +1;

            for(let i=1; i<=7; i++) {
                arr.push({
                    month: currentMonth,
                    dayOfTheMonth: i,
                    dayOfTheWeek: new Date(`${month+1}-${i}-${new Date().getFullYear()}`).getDay() + 1
                })
            }
        }

        return arr
    }
}