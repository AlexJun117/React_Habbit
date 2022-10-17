export default class habitPresenter {
    constructor(habits, habitMaxLength) {
        this.habits = habits
        this.habitMaxLength = habitMaxLength
    }

    getHabits() {
        return this.habits
    }

    increment(habit, updater) {
        this.habits = this.habits.map(item => {
            if (item.id === habit.id) {
                return { ...habit, count: item.count + 1 };
            }
            return item;
        })
        updater(this.habits)
    }

    decrement(habit, updater) {
        this.habits = this.habits.map(item => {
            if (item.id === habit.id) {
                const count = item.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        })
        updater(this.habits)
    }

    addHabit(name, updater) {
        if(this.habits.length >= this.habitMaxLength){
            throw new Error(`Habits length is less than ${this.habitMaxLength}`)
        }
        this.habits = [...this.habits, {id:Date.now(), name, count:0}]
        updater(this.habits)
    }

    deleteHabit(habit, updater) {
        this.habits = this.habits.filter(item => item.id !== habit.id)
        updater(this.habits)
    }

    reset(updater) {
        this.habits = this.habits.map(item => {
            return { ...item, count: 0 };
        })
        updater(this.habits)
    }

}