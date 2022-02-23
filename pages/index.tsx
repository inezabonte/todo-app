import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Header />
			<Navbar />
			<AddTodo />
		</div>
	);
}
