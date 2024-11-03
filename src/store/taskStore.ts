// src/store/taskStore.ts
import { createStore } from 'easy-peasy';
import { taskModel } from '../tasks/model';

const taskStore = taskModel;

const store = createStore(taskStore);

export default store;
