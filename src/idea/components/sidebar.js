import { observer } from 'mobx-react-lite';
import { 
	FireIcon, 
	TrendingUpIcon, 
	UserGroupIcon
} from '@heroicons/react/outline'
import { useRootStore } from '../../app/rootstore';

const navigation = [
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Close to Threshold', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideBar = observer(() => {
	const store = useRootStore();
	return (
		<div className="hidden lg:block lg:col-span-3 xl:col-span-2">
		<nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
			<div className="pb-8 space-y-1">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50',
							'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						<item.icon
							className={classNames(
								item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
								'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
							)}
							aria-hidden="true"
						/>
						<span className="truncate">{item.name}</span>
					</a>
				))}
			</div>
			<div className="pt-10">
				<p
					className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
					id="communities-headline"
				>
					Categories
				</p>
				<div className="mt-3 space-y-2" aria-labelledby="communities-headline">
					{store.ideaStore.categories.map((category) => (
						<a
							key={category.name}
							href="#"
							className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
						>
							<span className="truncate">{category.name}</span>
						</a>
					))}
				</div>
			</div>
		</nav>
		</div>
	)
});

export default SideBar;