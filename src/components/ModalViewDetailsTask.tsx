import { useState } from "react";
import { Task } from "../tasks/model";

interface IModalViewDetailsTask {
    data: Task
}

export default function ModalViewDetailsTask ({ data }: IModalViewDetailsTask) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const formatDate = (timestamp: string) => {
        const date = new Date(Number(timestamp) * 1000)
        return date.toLocaleDateString("pt-BR")
    }

    return (
        <>
            {isOpen &&
                <>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white text-black space-y-4 p-2 rounded">
                            <div className="flex justify-between items-center space-x-24">
                                <h2 className="font-semibold text-xl">Data de Criação</h2>
                                <span>{formatDate(data.createdAt)}</span>
                            </div>
                            <div className="flex justify-between items-center space-x-24">
                                <h2 className="font-semibold text-xl">ID</h2>
                                <span>{data.id}</span>
                            </div>
                            <div className="flex justify-between items-center space-x-24">
                                <h2 className="font-semibold text-xl">Titulo</h2>
                                <span>{data.title}</span>
                            </div>
                            <div className="flex justify-between items-center space-x-24">
                                <h2 className="font-semibold text-xl">Status</h2>
                                <span>{data.completed ? 'Concluida' : 'Em andamento'}</span>
                            </div>
                            <button className="w-full border p-2 font-semibold  border-gray-900 rounded" onClick={toggleModal}>Fechar</button>
                        </div>
                    </div>
                </>
            }
            <button onClick={toggleModal}>Visualizar</button>
        </>
    )
}