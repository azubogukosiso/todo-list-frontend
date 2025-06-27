import { useState } from "react";

import ToDoItem from "../components/ToDoItem";

const scrollToToday = () => {
  const section = document.getElementById("today-section");
  section && section.scrollIntoView({ behavior: "smooth" });
};

const scrollToTomorrow = () => {
  const section = document.getElementById("tomorrow-section");
  section && section.scrollIntoView({ behavior: "smooth" });
};

const HomePage = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [isTomorrowChecked, setIsTomorrowChecked] = useState<boolean>(false);

  const submitTodoItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput) {
      setTodoList((prev) => [...prev, todoInput.trim()]);
      setTodoInput("");
    }
  };

  return (
    <div className="min-h-[73.5vh] w-[90%] mx-auto flex flex-col lg:flex-row justify-evenly relative">
      <div className="w-full lg:w-[45%] mb-5 lg:mb-0" id="today-section">
        <h1>
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h1>

        <form onSubmit={submitTodoItem}>
          <div>
            <input
              type="text"
              className="w-1/2 focus:!outline-none bg-white rounded p-2 mt-3"
              onChange={(e) => setTodoInput(e.target.value)}
              value={todoInput}
            />
            <button className="ml-5 bg-orange-500 rounded py-2 px-3 text-white active:scale-95 transition-all hover:bg-orange-600 cursor-pointer">
              Add to List
            </button>
          </div>
          <div className="mt-3 flex flex-row items-center">
            <input
              type="checkbox"
              id="next-day"
              onChange={(e) =>
                e.target.checked
                  ? setIsTomorrowChecked(true)
                  : setIsTomorrowChecked(false)
              }
              className="cursor-pointer accent-white"
            />
            <label htmlFor="next-day" className="ml-2 cursor-pointer">
              Schedule for Tommorrow
            </label>
          </div>
        </form>

        {/* ########## TODO LIST ITEMS ########## */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          {todoList.map((todoItem, index) => (
            <ToDoItem key={index} todoItem={todoItem} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[45%]" id="tomorrow-section">
        <h1>
          {new Date(Date.now() + 86400000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h1>

        {/* ########## TODO LIST ITEMS ########## */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          <ToDoItem todoItem="Lorem ipsum dolor sit amet consectetur" />
        </div>
      </div>
      <div className="lg:hidden fixed right-0 bottom-0 p-5 flex flex-col items-end">
        <button
          className="block bg-orange-500 rounded py-2 px-3 text-white active:scale-95 transition-all hover:bg-orange-600 cursor-pointer mb-5 opacity-60 hover:opacity-85"
          onClick={scrollToToday}
        >
          Jump to Today
        </button>
        <button
          className="block bg-orange-500 rounded py-2 px-3 text-white active:scale-95 transition-all hover:bg-orange-600 cursor-pointer opacity-60 hover:opacity-85"
          onClick={scrollToTomorrow}
        >
          Jump to Tomorrow
        </button>
      </div>
    </div>
  );
};

export default HomePage;
