import { useState } from 'react';
import './App.css';
import avatar from './assets/avatar.svg'
import Todo from './components/Todo';
import Button from './components/Button';
import Form from './components/Form';
import Banner from './components/Banner';
import useCustomToast, { ToastTypes } from './hooks/useCustomToast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export type TTask = {
  id: string;
  text: string;
  isComplete: boolean;
}


const tasksFactory: TTask[] = [
  {
    id: '2',
    text: "Training at the Gym",
    isComplete: true
  },
  {
    id: '3',
    text: "Play Paddle with friends",
    isComplete: false
  },
  {
    id: '4',
    text: "Burger BBQ with family",
    isComplete: false
  }
]


function App() {
  const [tasks, setTasks] = useState<TTask[]>(tasksFactory);
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [taskName, setTaskName] = useState<string>('')
  const [taskId, setTaskId] = useState<string>('')
  const showToast = useCustomToast()

  const createTask = (value: string): void => {
    if (!value) return
    const sanitize = value.trim();
    const task: TTask = {
      id: Date.now().toString(),
      text: sanitize,
      isComplete: false
    }
    setTasks([...tasks, task]);
    showToast('Task created successfully', ToastTypes.SUCCESS)
    resetFormState()
  }

  const toggleTask = (id: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
    resetFormState()
  };

  const editTask = (id: string, newText: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText.trim() } : task
      )
    );
    showToast('Task updated successfully', ToastTypes.SUCCESS)
    resetFormState()
  };

  const deleteTask = (id: string): void => {
    setTasks(tasks.filter(task => task.id !== id));
    showToast('Task deleted successfully', ToastTypes.SUCCESS)
    resetFormState()
  };

  const resetFormState = () => {
    setIsEdit(false)
    setTaskName('')
    setTaskId('')
  }

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen w-screen bg-[#F3F3F3]">
        <div className='relative w-4/12 shadow-xl shadow-black/40 h-full'>
          {/* header */}
          <div className="h-[123px] w-full flex bg-[#3556AB] pl-[7%]">
            <div className="flex gap-3 my-auto max-w-[292px]">
              <img src={avatar} className='h-[50px] w-[50px] object-cover rounded-full' />

              <div>
                <h6 className='text-[16px] [text-shadow:0px_2px_1px_#030712] font-medium leading-[18.75px] text-white mb-1'>Hello, Jhon</h6>
                <h4 className='text-[25px] [text-shadow:0px_2.5px_1px_#030712] font-thin italic leading-[26.46px] text-white'>What are  your plans for today?</h4>
              </div>
            </div>
          </div>

          <Banner />

          <div className='relative p-4 pb-[60px] overflow-auto h-[calc(100vh_-_249px)]'>
            {tasks.map(task => <Todo key={task.id} {...{ setIsEdit, setTaskId, task, toggleTask, setTaskName }} />)}
          </div>

          <Button title='+' onClick={resetFormState} variant='filled' type='button' className='absolute bottom-6 right-4 text-[36px] w-[60px] h-[61px] rounded-full shadow-[inset_0_5px_3px_-3px_rgba(255,255,255,0.2)]' />
        </div>

        <div className='w-8/12'>
          <div className="h-[123px] w-full bg-[#3556AB] flex items-center justify-center">
            <h6 className='text-[20px] [text-shadow:0px_2px_1px_#030712] font-medium leading-[18.75px] text-white mb-1'>{isEdit ? 'Edit' : 'Create'} Task</h6>
          </div>

          <div className='px-4 py-6 flex flex-col h-[calc(100vh_-_123px)]'>
            <Form {...{ isEdit, taskName, setTaskName, createTask, editTask, deleteTask, taskId }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
