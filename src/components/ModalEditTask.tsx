import { useState } from "react";
import FormEditTask from "./FormEditTask";

interface Task {
    id: string
    title: string
    completed: boolean
}

interface IModalEditTask {
    data: Task
}


export default function ModalEditTask ({ data }: IModalEditTask) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button 
                onClick={toggleModal}
            >
                Editar
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white rounded-lg shadow max-w-lg">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Edite sua tarefa
                            </h3>
                            <button 
                                type="button" 
                                onClick={toggleModal} 
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <FormEditTask setIsOpen={setIsOpen} data={data} />
                    </div>
                </div>
            )}
        </>
    );
}
