import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import renderer from 'react-test-renderer'

describe("HabitAddForm", ()=>{

    describe("Snapshot Test", ()=>{

        it("renders", ()=>{
            const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />)
            expect(component.toJSON()).toMatchSnapshot()
        })

    })

    describe("Submit Form Test", ()=>{
        let onAdd;
        let input;
        let button;

        beforeEach(()=>{
            onAdd = jest.fn()
            render(<HabitAddForm onAdd={onAdd} />)
            input = screen.getByPlaceholderText('Habit')
            button = screen.getByText('Add')
        })

        it("When click button, calls the onAdd", ()=>{
        
            userEvent.type(input, "New Habit")
            userEvent.click(button)

            expect(onAdd).toHaveBeenCalledWith("New Habit")
        })

        it("Calls the onAdd with empty string", ()=>{
        
            userEvent.type(input, "")
            userEvent.click(button)

            expect(onAdd).toBeCalledTimes(0)
        })
    })
})