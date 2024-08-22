import style from './TaskItem.module.css';
import {Trash} from '@phosphor-icons/react';
import clipBoardImg from '../assets/Clipboard.svg';
import {TaskType} from './TaskContent'

interface PropsType {
  onChangeStateTask: (id: number) => void,
  onDeleteTask: (id: number) => void, 
  tasks: TaskType[],
}

export function TaskItem({onChangeStateTask, onDeleteTask, tasks}: PropsType) {

  function handleChangeStateTask(id: number){
    onChangeStateTask(id)
  }

  function handleDeleteTask(id: number){
    onDeleteTask(id)
  }

	return (
    <div className={style.taskContent}>
      <div className={tasks.length > 0 ? style.emptyOcuted : style.empty}>
        <img src={clipBoardImg} alt="Empty" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
      <div className={style.taskList}>
        {tasks.map((task) => (
          <div className={style.task} key={task.id}>
            <input
              type="checkbox"
              name="task"
              id={"task-" + task.id}
              onClick={() => handleChangeStateTask(task.id)}
            />
            <label
              className={task.isComplete ? style.taskCompleted : ""}
              htmlFor={"task-" + task.id}
            >
              {task.title}
            </label>
            <button onClick={() => handleDeleteTask(task.id)}>
              <Trash />
            </button>
          </div>
        ))}
      </div>
    </div>
	);
}
