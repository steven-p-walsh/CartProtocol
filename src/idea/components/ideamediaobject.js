import { observer } from 'mobx-react-lite'
import {
  ShareIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const IdeaMediaObject = (props) => {

	const question = props.idea;

	return (
		<article aria-labelledby={'question-title-' + question.id}>
			<div>
				<div className="flex space-x-3">
					<div className="flex-shrink-0">
						<img className="h-10 w-10 rounded-full" src={question.author.imageUrl} alt="" />
					</div>
					<div className="min-w-0 flex-1">
						<p className="text-sm font-medium text-gray-900">
							<a href={question.author.href} className="hover:underline">
								{question.author.name}
							</a>
						</p>
						<p className="text-sm text-gray-500">
							<a href={question.href} className="hover:underline">
								<time dateTime={question.datetime}>{question.date}</time>
							</a>
						</p>
					</div>
					
				</div>
				<h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
					{question.title}
				</h2>
			</div>
			<div
				className="mt-2 text-sm text-gray-700 space-y-4"
				dangerouslySetInnerHTML={{ __html: question.body }}
			/>
			<div className="mt-6 flex justify-between space-x-8">
				<div className="flex space-x-6">
					<span className="inline-flex items-center text-sm">
						<button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
							<ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
							<span className="font-medium text-gray-900">{question.likes}</span>
							<span className="sr-only">likes</span>
						</button>
					</span>
				</div>
				<div className="flex text-sm">
					<span className="inline-flex items-center text-sm">
						<button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
							<ShareIcon className="h-5 w-5" aria-hidden="true" />
							<span className="font-medium text-gray-900">Share</span>
						</button>
					</span>
				</div>
			</div>
		</article>
	);

};

export default observer(IdeaMediaObject);

