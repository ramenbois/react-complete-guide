import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {
      text: "Do all excercises!",
      id: "g1",
    },
    {
      text: "Finish the course!",
      id: "g2",
    },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      // Error (Fix via debugger)
      // updatedGoals.unshift({ text: enteredText, id: "goal1" });

      // Fix the error above
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}> No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList
        items={courseGoals}
        onDeleteItem={deleteItemHandler}
      ></CourseGoalList>
    );
  }

  return (
    // Error (Normal fix)
    // <section id='goal-form'>
    //     <CourseInput onAddGoal={addGoalHandler} />
    //   </section>
    //   <section id='goals'>{content}</section>

    // Fix the error above
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>{content}</section>
    </div>
  );
};

export default App;
