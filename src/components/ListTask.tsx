import style from './ListTask.module.css'
import clipBoarImg from '../assets/Clipboard.svg'
import { PlusCircle, Trash } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TaskType {
  id: number,
  title: String,
  isComplete: boolean
}

export function ListTask(){

  const [tasks, setTasks] = useState<TaskType[]>([]) 
  const [tempValueTask, setTempValueTask] = useState("")
  const [countId, setCountId] = useState(0)

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    const newTask = {
      id: countId + 1,
      title: tempValueTask,
      isComplete: false
    }

    setTasks([...tasks, newTask])

    setTempValueTask("")
    setCountId(countId + 1);
  }

  function handleChangeGetTitleTask(event: ChangeEvent<HTMLInputElement>){
    setTempValueTask(event.target.value)
  }

  function onChangeStateTask(id: number ){
    const state = tasks.map( task => {
      if(task.id === id)  task.isComplete = !task.isComplete;
      return task
    }) 
    setTasks(state) 

  }

  function onDeleteTask(id:number){
    const newTaskArray = tasks.filter( task => task.id != id ) 
    setTasks(newTaskArray) 
  }  
  
  const taskComplete = tasks.reduce((accumulator, currentValue) => 
    currentValue.isComplete? accumulator + 1 : accumulator ,
  0,)

  return (
    <main className={style.container}>
				<div className="form-header">
					<form 
            className={style.formContent}
            onSubmit={handleCreateNewTask}
          >
						<input
							type="text"
							name="todo"
							placeholder="Adicione uma nova tarefa"
              onChange={handleChangeGetTitleTask}
              value={tempValueTask}
						/>
						<button type="submit">
							Criar
							<PlusCircle size={18} />
						</button>
					</form>
				</div>
				<div className={style.content}>
					<div className={style.taskHeader}>
						<div className={style.created}>
							<strong>Tarefas Criadas</strong>
							<span>{tasks.length}</span>
						</div>
						<div className={style.done}>
							<strong>Concluídas</strong>
							<span>
               {taskComplete } de {tasks.length }
							</span>
						</div>
					</div>
					<div className={style.taskContent}>
						<div className={tasks.length > 0 ? style.emptyOcuted : style.empty}>
							<img src={clipBoarImg} alt="Empty" />
							<div>
								<strong>Você ainda não tem tarefas cadastradas</strong>
								<p>Crie tarefas e organize seus itens a fazer</p>
							</div>
						</div>
						<div className={style.taskList}>
              {
                tasks.map(task => 
                  <div className={style.task} key={task.id}>
                    <input 
                      type="checkbox" 
                      name="task" 
                      id="task" 
                      onClick={() => onChangeStateTask(task.id) }
                    />
                    <label className={task.isComplete? style.taskCompleted: ''}  htmlFor="task">{task.title}</label>
                    <button onClick={ () =>  onDeleteTask(task.id) }>
                      <Trash/>
                    </button>
                  </div>
                )
              }
						</div>
					</div>
				</div>
    </main>
  ); 
}