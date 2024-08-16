import React from "react";
import Ex2Counter from "../Components/Ex2Counter";
import Ex3TempControlApp from "../Components/Ex3TempControlApp";
import Ex4SearchFilter from "../Components/Ex4SearchFilter";
import Ex5RegForm from "../Components/EX5RegForm";
import Ex6QuizApp from "../Components/Ex6QuizApp";
import Ex7Navbar from "../Components/Ex7Navbar";
function Homepage() {
  return (
    <div>
      <div className="e1">
        <h1>1.Hello World</h1>
      </div>
      <hr />
      <div className="e2">
        <h1>2.Counter</h1>
        <Ex2Counter />
      </div>
      <hr />
      <div className="e3">
        <h1>3.Temp. Control Bg Change</h1>
        <Ex3TempControlApp />
      </div>
      <hr />
      <div className="e4">
        <h1>4.Search Filter</h1>
        <Ex4SearchFilter />
      </div>
      <hr />
      <div className="e5">
        <h1>5.Basic Registration Form</h1>
        <Ex5RegForm />
      </div>
      <hr />
      <div className="e6">
        <h1>6.Quiz App</h1>
        <Ex6QuizApp />
      </div>
      <hr />
      <div className="e7">
        <h1>7.Navbar</h1>
        <Ex7Navbar />
      </div>
      <hr />
      <div className="e8">
        <h1>8.OAuth0</h1>
      </div>
      <hr />
      <div className="e9">
        <h1>9.To-Do App</h1>
      </div>
    </div>
  );
}
export default Homepage;
