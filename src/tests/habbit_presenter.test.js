import HabitPresenter from "../habit_presenter"; 

describe("Habit Presenter", ()=>{
    const habits = [
        {  id:1, name:"Reading", count: 0 },
        {  id:2, name:"Football", count: 1 },
        { id:3, name:"Gaming", count: 0 },
    ]
    let presenter;
    let update;
    beforeEach(()=>{
        presenter = new HabitPresenter(habits, 4)
        update = jest.fn()
    })

    it("Init habits", ()=>{
       expect(presenter.getHabits()).toEqual(habits)
    })

    it('Increment Habit', ()=>{
        presenter.increment(habits[0], update)
        expect(presenter.getHabits()[0].count).toBe(1)
        checkUpdateStatus()
    })

    it('Decrement Habit', ()=>{
        presenter.decrement(habits[1], update)
        expect(presenter.getHabits()[0].count).toBe(0)
        checkUpdateStatus()
    })

    it("Prevent negative count value", ()=>{
        presenter.decrement(habits[0], update)
        presenter.decrement(habits[0], update)
        expect(presenter.getHabits()[0].count).toBe(0)
    })

    it('Delete Habit', ()=>{
        presenter.deleteHabit(habits[0], update)
        expect(presenter.getHabits()[0].name).toBe("Football")
        expect(presenter.getHabits().length).toBe(2)
        
        checkUpdateStatus()
    })

    it('Add Habit', ()=>{
        presenter.addHabit("Sex", update)
        expect(()=>{presenter.addHabit("Eating", update)}).toThrow('Habits length is less than 4')
        expect(presenter.getHabits()[3].name).toBe("Sex")
        expect(presenter.getHabits().length).toBe(4)
        
        checkUpdateStatus()
    })

    it('Reset All Habits', ()=>{
        presenter.reset(update)
        expect(presenter.getHabits()[0].count).toBe(0)
        expect(presenter.getHabits()[1].count).toBe(0)
        expect(presenter.getHabits()[2].count).toBe(0)
        
        checkUpdateStatus()
    })


    function checkUpdateStatus(){
        expect(update).toHaveBeenCalledTimes(1)
        expect(update).toHaveBeenCalledWith(presenter.getHabits())
    }
})

