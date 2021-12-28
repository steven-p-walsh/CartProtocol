import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'

const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
]

export default function IdeaDetails() {
	return (
		<section aria-labelledby="applicant-information-title">
			<div className="bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
						Title
					</h2>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">Subtitle</p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
					<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">field name</dt>
							<dd className="mt-1 text-sm text-gray-900">value</dd>
						</div>

						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">field name</dt>
							<dd className="mt-1 text-sm text-gray-900">value</dd>
						</div>

						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">field name</dt>
							<dd className="mt-1 text-sm text-gray-900">value</dd>
						</div>

						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">field name</dt>
							<dd className="mt-1 text-sm text-gray-900">value</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	)
}