import Cards from "@/components/card";
import { title } from "@/components/primitives";
import Projects from "@/components/projects";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>

		{/* <Cards/> */}
		<Projects/>
		</div>
	);
}
