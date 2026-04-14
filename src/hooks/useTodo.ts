import { useEffect, useState, type FormEvent } from "react";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

async function getTodos(): Promise<Todo[]> {
    await new Promise(resolve => setTimeout(resolve, 800));

    return [

        {id: 1, text: "Aprender HTML", completed: true},
        {id: 2, text: "Aprender CSS", completed: true},
        {id: 3, text: "Aprender useEffect", completed: false},
    ]
    
}

export const useTodo = () => {

    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {

            const todos = await getTodos(); // Simula a chmada pra API externa e depois de 800ms retorna a lista de tarefas;

            console.log("Dados recebidos:", todos);
            setTodoList(todos);
        };

        fetchTodos();
    }, [refresh]);

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target.value);

        const formData = new FormData(event.currentTarget);
        const todoItem = formData.get("todo") as string;

        if (!todoItem.trim()) return

        setTodoList(prev => [...prev, {
            id: Date.now(),
            text: todoItem,
            completed: false
        }]);

        event.currentTarget.reset();

        setFilter("all");
    }

    const toggleTodoCompleted = (id: number) => {


        const newTodoList = todoList.map(todo => {
            if (id === todo.id) {
                const completed = !todo.completed;

                return {
                    ...todo,
                    completed,
                };
            }

            return todo;

        });

        setTodoList(newTodoList);

    };

    const filteredTodos = todoList.filter(todo => {
        if (filter === "active") return !todo.completed
        if (filter === "completed") return todo.completed
        return true
    })

    const clearCompleted = () => {
        setTodoList(prev => prev.filter(todo => !todo.completed));
    }

    const removeTodo = (id: number) => {
        const confirmed = window.confirm("Are you sure you want to delete this todo?");

        if (confirmed) {
            setTodoList(prev => prev.filter(todo => todo.id !== id));
        }

    }

    return {
        addTodo,
        toggleTodoCompleted,
        filteredTodos,
        filter,
        setFilter,
        clearCompleted,
        removeTodo,
        refresh,
        setRefresh
    }
}