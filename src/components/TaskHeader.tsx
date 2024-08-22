import style from './TaskHeader.module.css'
import {TaskType} from './TaskContent'

interface PropsType {
  tasks: TaskType[],
  taskComplete: number
}

export function TaskHeader({tasks, taskComplete}: PropsType) {
	return (
		<div className={style.taskHeader}>
			<div className={style.created}>
				<strong>Tarefas Criadas</strong>
				<span>{tasks.length}</span>
			</div>
			<div className={style.done}>
				<strong>Concluídas</strong>
				<span>
					{taskComplete} de {tasks.length}
				</span>
			</div>
		</div>
	);
}
