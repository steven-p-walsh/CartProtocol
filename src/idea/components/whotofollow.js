import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'

const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function WhoToFollow() {
	return (
		<section aria-labelledby="who-to-follow-heading">
			<div className="bg-white rounded-lg shadow">
				<div className="p-6">
					<h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
						Who to follow
					</h2>
					<div className="mt-6 flow-root">
						<ul role="list" className="-my-4 divide-y divide-gray-200">
							{whoToFollow.map((user) => (
								<li key={user.handle} className="flex items-center py-4 space-x-3">
									<div className="flex-shrink-0">
										<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
									</div>
									<div className="min-w-0 flex-1">
										<p className="text-sm font-medium text-gray-900">
											<a href={user.href}>{user.name}</a>
										</p>
										<p className="text-sm text-gray-500">
											<a href={user.href}>{'@' + user.handle}</a>
										</p>
									</div>
									<div className="flex-shrink-0">
										<button
											type="button"
											className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
										>
											<PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" aria-hidden="true" />
											<span>Follow</span>
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-6">
						<a
							href="#"
							className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
						>
							View all
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}