import { useState } from "react";
import { useStoreActions } from 'easy-peasy';
import { StoreModel } from "../tasks/model";

interface IModalConfirmDelete {
    id: string
}

export default function ModalConfirmDelete ({ id }: IModalConfirmDelete) {
    const [isOpen, setIsOpen] = useState(false);
    const { deleteTodo } = useStoreActions<StoreModel>((actions) => actions);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleDeleteTask = async () => {
        await deleteTodo(id)
    }

    return (
        <>
            <button 
                onClick={toggleModal}
            >
                Deletar
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col space-y-8 bg-white p-2 rounded">
                        <h2 className="font-semibold text-2xl  text-black">Deseja remover essa tarefa ?</h2>
                        <div className="flex w-full justify-between">
                            <button className="py-2 px-4 text-xl text-black border border-gray-500 rounded" onClick={() => setIsOpen(false)}>Cancelar</button>
                            <button className="py-2 px-4 text-xl bg-red-500 rounded" onClick={handleDeleteTask}>Remover</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
