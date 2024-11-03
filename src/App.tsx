import { useEffect, useState } from 'react'
import './App.css'
import ModalCreateTask from './components/ModalCreateTask';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { StoreModel, Task } from './tasks/model';
import ModalEditTask from './components/ModalEditTask';
import ModalConfirmDelete from './components/ModalConfirmDelete';
import ModalViewDetailsTask from './components/ModalViewDetailsTask';

function App() {
  const { fetchTodo } = useStoreActions<StoreModel>((actions) => actions);
  const todos = useStoreState<StoreModel>((state) => state.todos);

  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <>
      <main className='p-12 space-y-12 h-screen relative'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>Gerencie suas tarefas</h2>
          <ModalCreateTask />
        </div>

        <div className='space-y-4 py-8'>
          <h2 className='text-xl font-semibold'>Tarefas Cadastrada</h2>
          <hr />
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-center">Ações</th>
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
            {todos.map((todo: Task) => (
                <tr key={todo.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 font-semibold">{todo.id}</td>
                  <td className="py-3 px-6 text-xl">{todo.title}</td>
                  <td className={`py-3 px-6 font-semibold ${todo.completed ? 'text-green-500' : 'text-orange-500'}`}>{todo.completed ? 'Concluida' : 'Em andamento'}</td>
                  <td className="py-3 px-6 text-center space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
                      <ModalEditTask data={{
                        id: todo.id,
                        title: todo.title,
                        completed: todo.completed
                      }}/>
                    </button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700">
                      <ModalViewDetailsTask data={{
                        id: todo.id,
                        title: todo.title,
                        completed: todo.completed
                      }} />
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                      <ModalConfirmDelete id={todo.id} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default App
