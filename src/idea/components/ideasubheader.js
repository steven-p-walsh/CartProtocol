

export default function IdeaSubheader() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
			<div className="flex items-center space-x-5">
				<div className="flex-shrink-0">
					<div className="relative">
						<img
							className="h-16 w-16 rounded-full"
							src=""
							alt=""
						/>
						<span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
					</div>
				</div>
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Name</h1>
					<p className="text-sm font-medium text-gray-500">
						<a href="#" className="text-gray-900">
							subtitle
						</a>{' '}
						on <time dateTime="2020-08-25">Date</time>
					</p>
				</div>
			</div>
			<div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
				<button
					type="button"
					className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
				>
					Action 1
				</button>
				<button
					type="button"
					className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
				>
					Action 2
				</button>
			</div>
		</div>
	);
}