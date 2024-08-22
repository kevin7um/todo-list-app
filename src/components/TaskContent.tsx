import { ChangeEvent, FormEvent, useState } from "react";
import style from "./TaskContent.module.css";
import { InputForm } from "./InputForm";
import { TaskItem } from "./TaskItem";
import { TaskHeader } from "./TaskHeader";

export interface TaskType {
	id: number;
	title: String;
	isComplete: boolean;
}

export function ListTask() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [tempValueTask, setTempValueTask] = useState("");
	const [countId, setCountId] = useState(0);

	function handleCreateNewTask(evento: FormEvent) {
		evento.preventDefault();
		const newTask = {
			id: countId + 1,
			title: tempValueTask,
			isComplete: false,
		};

		setTasks([...tasks, newTask]);

		setTempValueTask("");
		setCountId(countId + 1);
	}

	function handleChangeGetTitleTask(evento: ChangeEvent<HTMLInputElement>) {
		setTempValueTask(evento.target.value);
	}

	function onChangeStateTask(id: number) {
		const state = tasks.map((task) => {
			if (task.id === id) task.isComplete = !task.isComplete;
			return task;
		});
		setTasks(state);
	}

	function onDeleteTask(id: number) {
		const newTaskArray = tasks.filter((task) => task.id != id);
		setTasks(newTaskArray);
	}

	const taskComplete = tasks.reduce(
		(accumulator, currentValue) =>
			currentValue.isComplete ? accumulator + 1 : accumulator,
		0
	);

	return (
		<main className={style.container}>
			<InputForm
				onCreateNewTask={handleCreateNewTask}
				onChangeGetTitleTask={handleChangeGetTitleTask}
				tempValueTask={tempValueTask}
			/>
      
			<TaskHeader tasks={tasks} taskComplete={taskComplete} />

			<TaskItem
				onChangeStateTask={onChangeStateTask}
				onDeleteTask={onDeleteTask}
				tasks={tasks}
			/>
		</main>
	);
}
