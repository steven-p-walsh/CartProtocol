import { observer } from "mobx-react-lite"
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useRootStore } from "../../app/rootstore";
import { BsDiscord, BsTwitter } from 'react-icons/bs'


const SubmitIdeaForm = (props) => {

	const { setOpen } = props;
	const { ideaStore } = useRootStore();

	return (
		<form className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
			<div className="flex-1 h-0 overflow-y-auto">
				<div className="py-6 px-4 bg-indigo-700 sm:px-6">
					<div className="flex items-center justify-between">
						<Dialog.Title className="text-lg font-medium text-white">New Project</Dialog.Title>
						<div className="ml-3 h-7 flex items-center">
							<button
								type="button"
								className="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
								onClick={() => setOpen(false)}
							>
								<span className="sr-only">Close panel</span>
								<XIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
					</div>
					<div className="mt-1">
						<p className="text-sm text-indigo-300">
							Get started by filling in the information below to create your new project.
						</p>
					</div>
				</div>
				<div className="flex-1 flex flex-col justify-between">
					<div className="px-4 divide-y divide-gray-200 sm:px-6">
						<div className="space-y-6 pt-6 pb-5">
							<div>
								<label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
									Project name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="project-name"
										id="project-name"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="description" className="block text-sm font-medium text-gray-900">
									Description
								</label>
								<div className="mt-1">
									<textarea
										id="description"
										name="description"
										rows={4}
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
										defaultValue={''}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="location" className="block text-sm font-medium text-gray-700">
									Category
								</label>
								<select
									id="Category"
									name="Category"
									className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
								>
									{
										ideaStore.categories.map( category =>
											<option>{ category.name }</option>
										)
									}
								</select>
							</div>

							<div>
								<label htmlFor="location" className="block text-sm font-medium text-gray-700">
									Bid Acceptance Criteria
								</label>
								<select
									id="acceptance_criteria"
									name="acceptance_criteria"
									className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
								>
									<option>Majority</option>
									<option>Super Majority</option>
								</select>
							</div>


							<div>
								<label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
									Discord
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<BsDiscord />
									</div>
									<input
										type="text"
										name="project-name"
										id="project-name"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="project-name" className="block text-sm font-medium text-gray-900">
									Twitter
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<BsTwitter />
									</div>
									<input
										type="text"
										name="project-name"
										id="project-name"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="flex-shrink-0 px-4 py-4 flex justify-end">
				<button
					type="button"
					onClick={ () => setOpen(false) }
					className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Save
				</button>
			</div>
		</form>
	);
}

export default observer(SubmitIdeaForm);