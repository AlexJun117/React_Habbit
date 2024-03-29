import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = ({presenter}) => {
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = useCallback(habit => {presenter.increment(habit, setHabits)}, []);

  const handleDecrement = useCallback(habit => {presenter.decrement(habit, setHabits)}, []);

  const handleDelete = useCallback(habit => {presenter.deletehabit(habit, setHabits)}, []);

  const handleAdd = useCallback(name => {presenter.addhabit(name, setHabits)}, []);

  const handleReset = useCallback(() => {presenter.reset(setHabits)}, []);

  return (
    <>
      <Navbar totalCount={habits.filter(item => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
