import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-2xl text-center justify-center">
				<h1 className={title()}>Lets make your</h1><br/>
				<h1 className={title({ color: "violet" })}> &apos;beautiful</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design and development experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
				Hello, I am Hassaan. I am a Front-end developer with 6 years of experience. I enjoy building sites. My focus is React and Next.js.
				</h2>
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
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
