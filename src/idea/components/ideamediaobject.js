import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom';

const IdeaMediaObject = (props) => {

	const idea = props.idea;

	return (
		<article>
			<div>
				<div className="flex space-x-3">
					<div className="flex-shrink-0">
						<img className="h-10 w-10 rounded-full" src="" alt="" />
					</div>
					<div className="min-w-0 flex-1">
						<p className="text-sm font-medium text-gray-900">
							<a href="#" className="hover:underline">
								{ idea.name }
							</a>
						</p>
						<p className="text-sm text-gray-500">
							<span>Auction Threshold: 45%</span>
						</p>
						<div className="min-w-1 flex-0">
							<div className="w-full bg-gray-200 h-1">
								<div className="bg-blue-400 h-1" style={{width: '45%'}}></div>
							</div>
						</div>
					</div>
					
				</div>
				<h2 className="mt-4 text-base font-medium text-gray-900">
					{idea.name}
				</h2>
			</div>
			<div
				className="mt-2 text-sm text-gray-700 space-y-4"
				dangerouslySetInnerHTML={{ __html: idea.description }}
			/>
			<div className="mt-6 flex justify-end">
				<div className="flex text-sm">
					<span className="inline-flex items-center text-sm">
						<Link 
							to={{ pathname: `/ideas/${idea.id}`}} 
							className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							View Details
						</Link>
					</span>
				</div>
			</div>
		</article>
	);

};

export default observer(IdeaMediaObject);

