import { title } from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import React from "react";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import {Chip} from "@nextui-org/react";

export default function PricingPage() {
	return (
		<div>
				<div>
					<h1 className={title()}>Projects and Reviews</h1>
					<Divider className="my-4 w-full"/>
					<p className="items-center flex justify-center">gathering all 6years of projects and will be uploading soon ...</p>
					<br/>
					
				</div>

				<div className="mt-24 flex gap-6 justify-center items-center">
				<Chip color="warning" variant="bordered">Stay connected</Chip>
					<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						<a href="https://wa.me/+923312444229" target="_blank">
						Let&apos;s talk <Code color="success">whatsapp</Code>
						</a>
					</span>
				</Snippet>
				
				</div>
		</div>
		
		
	);
}
