import { title } from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


const rows = [
	{
	  key: "1",
	  name: "Tony Reichert",
	  role: "CEO",
	  status: "Active",
	},
	{
	  key: "2",
	  name: "Zoey Lang",
	  role: "Technical Lead",
	  status: "Paused",
	},
	{
	  key: "3",
	  name: "Jane Fisher",
	  role: "Senior Developer",
	  status: "Active",
	},
	{
	  key: "4",
	  name: "William Howard",
	  role: "Community Manager",
	  status: "Vacation",
	},
  ];
  
  const columns = [
	{
	  key: "name",
	  label: "NAME",
	},
	{
	  key: "role",
	  label: "ROLE",
	},
	{
	  key: "status",
	  label: "STATUS",
	},
  ];

export default function PricingPage() {
	return (
		<div>
				<div>
					<h1 className={title()}>Projects and Reviews</h1>
					<Divider className="my-4 w-full"/>
					<p className="items-center flex justify-center"> hello</p>
				</div>

				<div>
			<h2>hello</h2>
				
				</div>
		</div>
		
		
	);
}
