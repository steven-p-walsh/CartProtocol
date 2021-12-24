
import Timeline from './timeline'
import AppHeader from './appheader'
import IdeaSubheader from './ideasubheader'
import IdeaDetails from './ideadetails'
import Comments from './comments'
import Footer from '../../app/components/footer'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function IdeaDetailPage() {
  return (
    <>
      <div className="min-h-full bg-gray-100">
				<AppHeader />
        <main className="py-10">
          <IdeaSubheader />
          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
							<IdeaDetails />
              <Comments />
            </div>
					  <Timeline />
          </div>
        </main>
				<Footer />
      </div>
    </>
  )
}
