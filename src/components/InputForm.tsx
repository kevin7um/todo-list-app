import { ChangeEvent, FormEvent } from "react";
import style from "./InputForm.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface PropsType {
	onCreateNewTask: (evento: FormEvent) => void;
	onChangeGetTitleTask: (event: ChangeEvent<HTMLInputElement>) => void;
	tempValueTask: string;
}

export function InputForm({
	onCreateNewTask,
	onChangeGetTitleTask,
	tempValueTask,
}: PropsType) {
	function handleCreateNewTask(event: FormEvent) {
		onCreateNewTask(event);
	}

	function handleChangeGetTitleTask(event: ChangeEvent<HTMLInputElement>) {
		onChangeGetTitleTask(event);
	}

	return (
		<form className={style.formContent} onSubmit={handleCreateNewTask}>
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
	);
}
