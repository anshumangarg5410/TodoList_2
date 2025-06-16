import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            message: "Here is the first todo",
            completed: false
        }
    ],
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo:() => {},
    updateodo: () => {}
})

export const useTodos = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider

