import Cards from "@/components/card";
import { subtitle, title } from "@/components/primitives";
import {Divider} from "@nextui-org/divider";

export default function AboutPage() {
	return (
		<div>
			<div>
			<h1 className={title()}>Lets talk about myself and my experience</h1>
			<p className="mt-3 sm-mt-1">On a mission to build products clients love. Here is a summary of my work so far.</p>
			<Divider className="my-4 mb-10"/>
			</div>
			<div className="text-left mb-8">
				<h1 className={subtitle()}>Web Developer <br/> @Upwork
				</h1>
				<span className="">2023 - Currently</span>
				<p className="mt-4 text-gray-400">Successfully satisfies the clients on Upwork. Work across a wide range
				of web projects with clients all over the globe.</p>
			</div>
			<Divider className="my-4 mb-10"/>


			<div className="text-left mb-8">
				<h1 className={subtitle()}>Junior Front-end Developer  <br/> @Golootlo.
				</h1>
				<span className="">Sep. 2023 - Currently</span>
				<p className="mt-4 text-gray-400">Working closely with business stakeholders, project head, team
				lead, designers, and QA to on <span className="font-bold">conceptualize</span> and produce amazing
				output.
				</p>
				<p className="mt-4 text-gray-400">Working on WebView  (SDK) for new client Ufone Pakistan (Cellular). Mainly,
				focused on the front end and also, worked closely with the backend developers. I strive to learn back-end technology.
				</p>
			</div>
			<Divider className="my-4 mb-10"/>



			<div className="text-left mb-10">
				<h1 className={subtitle()}>Front-end Developer <br/> @Voxtron (Pvt) Ltd</h1>
				<span className="">Feb. 2023 - Sep 2023</span>
				<p className="mt-4 text-gray-400">Joined the company in stealth mode. Scaled it from 0 to 500k+ MAUS <br/><br/>
				Get hands on experience of working in a fast paced iterative
				Tools
				Soft Skills
				Willingness To Learn
				Successfully converted websites from PSD to Next.js, ensuring seamless
				user experiences and enhanced performance.<br/><br/>
				Expertly integrated API Keys into various web applications, optimizing
				data flow and enabling dynamic functionalities.<br/><br/>
				Proactively improved existing websites by implementing advanced
				features and enhancements, resulting in increased user engagement and
				satisfaction.<br/><br/>
				Implemented Continuous Integration/Continuous Deployment (CI/CD)
				pipelines in Github, automating the build and deployment processes for
				efficient and reliable code releases<br/><br/></p>
			</div>
			<Divider className="my-4 mb-10"/>



			<div className="text-left mb-10">
				<h1 className={subtitle()}>Front-end Developer <br/> @Sigma IT - Saudi Arabia</h1>
				<span className="">Feb 2022 - Oct 2022</span>
				<p className="mt-4 text-gray-400">Within 09 months, Implemented development strategy in 7 projects that Proficiently converted websites from PSD to WordPress, delivering visually
				appealing and dynamic websites that met clients’ specific requirements<br/><br/>
				Successfully integrated Woocommerce and payment systems into web
				applications, facilitating seamless e-commerce transactions and enhancing
				the user shopping experience.
				<br/><br/>
				Assisted clients by managing a comprehensive user guide, providing
				valuable insights into site features, and empowering them to efficiently
				manage their websites.
				<br/><br/>
				Initiated the practice of Next.js/React.js, enhancing skills in modern frontend development and contributing to the adoption of cutting-edge
				technologies within the team.
				<br/><br/>
				</p>
			</div>
			<Divider className="my-4 mb-10"/>


			<div className="text-left mb-10">
				<h1 className={subtitle()}>Web Developer <br/>@Turnsole IT Service
				</h1>
				<span className="">Feb 2018 - Oct 2021</span>
				<p className="mt-4 text-gray-400">Successfully converted websites from PSD to WordPress, utilizing industry
				best practices to create visually appealing and user-friendly websites.<br/><br/>
				Customized WordPress platforms to support specific features and
				functionalities, tailoring websites to meet clients unique requirements.<br/><br/>
				Proficiently handled custom development of blogs, ensuring seamless
				integration with third-party plugins and enhancing website functionality.<br/><br/>
				</p>
			</div>
			<Divider className="my-4 mb-10"/>



			<div className="text-left mb-10">
				<h1 className={subtitle()}>ITech-Squad <br/>@Innovative Network Pvt Ltd</h1>
				<span className="">Jan 2017 - Dec 2017
				</span>
				<p className="mt-4 text-gray-400">Track record working with startups - in a team and Efficiently resolved a
				wide range of computer hardware and software issues, including
				printing, installation, word processing, email, and operating systems
				problems, ensuring smooth and uninterrupted workflow for end-users.
				<br/><br/>
				Provided exceptional support to end users on various technical matters,
				encompassing software, hardware, peripherals, and network
				connectivity, resulting in enhanced productivity and user satisfaction.
				<br/><br/>
				</p>
			</div>
			<Divider className="my-4 mb-10"/>
		</div>
	);
}
