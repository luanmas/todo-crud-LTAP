import { FormEvent, useState } from "react";
import { useStoreActions } from 'easy-peasy';
import { StoreModel } from "../tasks/model";

interface Task {
    title: string
    completed: boolean    
}

interface IFormEditTask {
    data: Task
    setIsOpen: (e: boolean) => void
}

export default function FormEditTask ({ data, setIsOpen }: IFormEditTask) {
    const [task, setTask] = useState<Task>(data)
    const { editTodo } = useStoreActions<StoreModel>((actions) => actions);
    
    const handleCreateTask = async (e: FormEvent) => {
        e.preventDefault()
        await editTodo(task);
        setTask({ title: '', completed: false });
        setIsOpen(false)
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            completed: value === 'completed'
        }));
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            title: value
        }));
    };

    return (
        <div>
            <form onSubmit={handleCreateTask} className="p-6 space-y-4" action="#">
                <div className="w-full">
                    <label htmlFor="name" className="block mb-2 text-left text-sm font-medium text-gray-900">Titulo</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="border w-full border-gray-300 text-gray-900 text-sm rounded-lg p-2" 
                        placeholder="Nome da tarefa"
                        value={task.title}
                        onChange={handleChangeInput}
                        required 
                    />
                </div>
                <select 
                    required
                    name="status"
                    id="status"
                    className="border border-gray-300 w-full p-2 rounded-lg text-gray-900"
                    onChange={handleChangeSelect}
                    value={task.completed ? 'completed' : 'incompleted'}
                >
                    <option value="">Selecione uma opção</option>
                    <option value='completed'>Concluída</option>
                    <option value='incompleted'>Em andamento</option>
                </select>
                <button 
                    type="submit" 
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Editar Tarefa
                </button>
            </form>
        </div>
    )
}