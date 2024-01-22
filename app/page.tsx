import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Avatar} from "@nextui-org/avatar";
import hazzy from "@/public/hazzy.jpeg"

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
				<h1 className={title()}>Lets make your</h1><br/>
				<h1 className={title({ color: "violet" })}> &apos;beautiful&apos;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design and development experience.
				</h1>
				<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" ><Avatar className="w-20 h-20 text-large" isBordered color="secondary" src={hazzy.src} /></div>
				<h2 className={subtitle({ class: "mt-4 text-sm" })}> Hello, I&apos;m Hassaan. With my 6+ years of experience unlock the digital potential of your business with my expert web development services! As a seasoned WordPress, Shopify, and Wix developer. </h2>
				
			</div>
			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
				>
					Hire Me on UpWork
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						<a href="mailto:has.webdev@gmail.com" >
						Let&apos;s talk <Code color="danger">Email me</Code>
						</a>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
