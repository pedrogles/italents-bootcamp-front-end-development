import { useContext } from "react"
import { ToDoListContext } from "../contexts/ToDoListContext"

export const useToDoList = () => {
    return useContext(ToDoListContext);
}