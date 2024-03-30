import { Dispatch, SetStateAction } from 'react';
import check from '../assets/check.svg'
import { TTask } from '../App';

type TTodo = {
  setIsEdit: Dispatch<SetStateAction<boolean>>,
  task: TTask,
  toggleTask: (id: string) => void,
  setTaskName:  Dispatch<SetStateAction<string>>,
  setTaskId: Dispatch<SetStateAction<string>>,
}

const Todo = ({ setIsEdit, task, toggleTask, setTaskName, setTaskId }: TTodo) => {

  const setEditForm = () => {
    setIsEdit(true)
    setTaskId(task.id)
    setTaskName(task.text)
  }

  const handleToggleTaskStatus = () => toggleTask(task.id)

  return (
    <div className='h-[91px] bg-white shadow-md shadow-black/10 rounded-md flex items-center justify-between pl-6 pr-5 mb-5'>
      <div onClick={handleToggleTaskStatus} className='inline-flex items-center gap-4 cursor-pointer'>
        <span className={`relative inline-block h-[32px] w-[32px] ${task.isComplete ? 'border-[#49C25D]' : 'border-[#071D55]'} border-[1.5px] border-solid rounded-full`}>
          {task.isComplete && <span className='flex items-center justify-center rounded-full h-full w-full bg-[#53DA69]'>
            <img src={check} alt="" />
          </span>}
        </span>

        <p className={`${task.isComplete ? 'text-[#8D8D8D] line-through' : 'text-[#071D55]'} text-base font-medium`}>{task.text}</p>
      </div>

      <button onClick={setEditForm} className='border-[1px] border-[#071D55] text-[#071D55] hover:bg-[#071D55] hover:text-white text-base font-medium w-[51px] h-[45px] rounded animate' type='button'>
        Edit
      </button>
    </div>
  )
}

export default Todo