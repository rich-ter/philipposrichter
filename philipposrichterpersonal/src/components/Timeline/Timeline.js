import React from 'react'

const Timeline = () => {
  return (
    <div>
	<div className="container max-w-5xl    mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Junior Web Developer </h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">May 2022 - Present</time>
						<p className="mt-3">
              •Interacted with clients, captured requirements and proposed digital solutions to meet their business needs. <br></br>
              •Designed websites using CMS platforms such as WordPress, Shopify and Webflow.<br></br>
              •Designed and deployed 2 React Js websites on Vercel fetching data from a Strapi headless CMS server.
            </p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Senior Marketing Coordinator</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">May 2018 - May 2022</time>
						<p className="mt-3">
              •Supervising the whole group marketing mix and reporting on the performance of the organic, paid and affiliate traffic through Google Data Studio and Google Analytics reports. <br></br>
              •Created a one-stop performance cockpit using Salesforce to keep track of a portfolio in excess of 50 licensees, suppliers and investors, enabling tighter and more effective performance management. <br></br>
              •Supervised the web development of more than 6 projects to ensure that the design aligns with the easy branding and ensure that functionality meets the scope as signed on contracts.

            </p>
					</div>

				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Timeline
