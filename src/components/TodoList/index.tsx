import type { Todo } from "../../App";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import IconCheck from "/images/icon-check.svg";

interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
}

const TodoList = ({ todoList, toggleTodoCompleted }: TodoListProps) => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>

          {
            todoList.map((todo) => (
              <li key={todo.id} className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}>

                <div className='flex flex-row items-center gap-4'>
                  <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">

                    <button
                      onClick={() => toggleTodoCompleted(todo.id)}
                      className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].layout.backgroundColor} ${todo.completed ? " bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]" : ""}`}>

                      {todo.completed &&
                        <img
                          src={IconCheck}
                          alt="Checked Icon"
                          className="w-2 h-2 m-auto" />
                      }
                    </button>


                  </span>
                  <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""} `}>
                    {todo.text}
                  </p>
                </div>

              </li>
            ))
          }

        </ul>

        {todoList.length > 0 && (

          <div className={`text-sm flex justify-between p-4  ${themeConfig[theme].layout.textColor}`}>
            <p>{todoList.length} items total</p>
            <div className='hidden sm:flex gap-4'>
              <a className={`text-blue-500  cursor-pointer ${theme === "dark"
                ? "hover:text-dark-purple-100"
                : "hover:text-light-navy-850"}`}>All</a>
              <button className={`cursor-pointer ${theme === "dark"
                ? "hover:text-dark-purple-100"
                : "hover:text-light-navy-850"}`}>Active</button>
              <button className={`cursor-pointer  ${theme === "dark"
                ? "hover:text-dark-purple-100"
                : "hover:text-light-navy-850"}`}>Completed</button>
            </div>

            <button className={`cursor-pointer ${theme === "dark"
              ? "hover:text-dark-purple-100"
              : "hover:text-light-navy-850"}`}>Clear Completed</button>
          </div>
        )}

      </div>


      {todoList.length > 0 && (

        <div className={`sm:hidden flex justify-center gap-5 py-4 rounded-md mt-4 ${themeConfig[theme].layout.textColor} ${themeConfig[theme].todo.backgroundColor}`}>
          <a className={`text-blue-500 cursor-pointer cursor-pointer ${theme === "dark"
            ? "hover:text-dark-purple-100"
            : "hover:text-light-navy-850"}`}>All</a>
          <button className={`cursor-pointer ${theme === "dark"
            ? "hover:text-dark-purple-100"
            : "hover:text-light-navy-850"}`}
          >Active
          </button>
          <button className={`cursor-pointer ${theme === "dark"
            ? "hover:text-dark-purple-100"
            : "hover:text-light-navy-850"}`}>Completed</button>
        </div>
      )}
    </>
  )
}

export default TodoList;