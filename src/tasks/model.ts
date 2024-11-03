import axios from "axios";
import { Action, action, Thunk, thunk } from "easy-peasy";

export interface Task {
    createdAt: string
    id: string
    title: string
    completed: boolean
}

export interface StoreModel {
    todos: Task[];
    addTodo: Action<StoreModel, Task>;
    saveTodo: Thunk<StoreModel, Task>;
    editTodo: Thunk<StoreModel, Task>;
    fetchTodo: Thunk<StoreModel>
    setTodo: Action<StoreModel, Task[]>
    deleteTodo: Thunk<StoreModel, Task>
}

const url = 'https://6727bdcf270bd0b975537145.mockapi.io/api/todos'

export const taskModel: StoreModel = {
    todos: [],
    setTodo: action((state, payload) => {
        state.todos = payload
    }),
    addTodo: action((state, payload) => {
        state.todos.push(payload);
    }),
    saveTodo: thunk(async (actions, payload) => {
        const result = await axios.post(`${url}`, payload);
        actions.addTodo(result.data);
    }),
    editTodo: thunk(async (actions, payload) => {
        await axios.put(`${url}/${payload.id}`, payload)
        actions.fetchTodo()
    }),
    fetchTodo: thunk(async (actions) => {
        const response = await axios.get(`${url}`);
        actions.setTodo(response.data)
    }),
    deleteTodo: thunk(async (actions, payload) => {
        await axios.delete(`${url}/${payload}`)
        actions.fetchTodo()
    })
}