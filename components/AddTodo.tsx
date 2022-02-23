import { HiPlus } from "react-icons/hi";
import { useState, MouseEvent } from "react";

function AddTodo() {
	const [viewInput, setViewInput] = useState(false);
	const handleFormClicks = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return (
		<div className="relative">
			<button
				className="bg-white h-12 w-12 flex justify-center items-center rounded-full absolute right-0 -top-6 drop-shadow-md"
				onClick={() => setViewInput(!viewInput)}
			>
				<HiPlus className="text-3xl" />
			</button>
			<div
				onClick={() => setViewInput(!viewInput)}
				id="modal-container"
				className={`${
					viewInput ? "flex" : "hidden"
				} justify-center items-center overflow-y-hidden fixed right-0 left-0 bottom-0 bg-gray-900 bg-opacity-50 h-screen`}
			>
				<div
					onClick={handleFormClicks}
					className="bg-white rounded-lg drop-shadow-md md:max-w-5xl flex items-center w-1/3"
				>
					<form className=" p-2 flex items-start w-full">
						<input
							className="text-sm w-full p-2  outline-none "
							placeholder="Write a new task"
							required
						/>

						<button
							type="submit"
							className=" text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
						>
							Add
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddTodo;
