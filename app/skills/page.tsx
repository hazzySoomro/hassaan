'use client'
import {Divider} from "@nextui-org/divider";
import { subtitle, title } from "@/components/primitives";
import React from "react";
import {Progress} from "@nextui-org/progress";
import {Button} from "@nextui-org/button";

export default function Skills() {

	return (
		<div className="flex flex-col ">
			<h2 className={title()}>Skills and Expertise</h2>
			<Divider className="my-4" />
			<div className="">
			<h2 className={subtitle()}>WordPress  90%</h2>
			<Progress color="success" aria-label="Loading..." value={90} />
			</div>
			<br></br>
			<div>
			<h2 className={subtitle()}>Shopify  80%</h2>
			<Progress color="warning" aria-label="Loading..." value={70} />
			</div>
			<br></br>
			<div>
			<h2 className={subtitle()}>Wix  90%</h2>

			<Progress color="danger" aria-label="Loading..." value={90} />
			
			</div>
			<br></br>
			<div>
			<h2 className={subtitle()}>Nextjs/ Reactjs  90%</h2>

			
			<Progress color="secondary" aria-label="Loading..." value={90} />
			</div>
			<br></br>
			<div className="flex flex-col mt-10">
			<h2 className={title()}>Libaries and Tools</h2>
			<Divider className="my-4" />
			<p className={subtitle()}>Tailwindcss, Tailwindui, Nextui, Shadcn</p>
			<p className={subtitle()} >
			<Button color="primary">VS Code</Button> {" "}
			<Button color="warning">GitHub</Button> {" "}
			<Button color="default">Vercel for deployment</Button> </p>
			
			
			</div>
	    </div>
	);
}
