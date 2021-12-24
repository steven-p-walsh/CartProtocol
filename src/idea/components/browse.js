
import AppHeader from './appheader'
import SideBar from './sidebar'
import SortingTabs from './sortingtabs'
import QuestionListing from './questionlisting'
import Trending from './trending'
import WhoToFollow from './whotofollow'
import Footer from '../../app/components/footer'


export default function BrowseLayout() {
  return (
    <>
      <div className="min-h-full bg-gray-100">
        <AppHeader />
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
						<SideBar />
            <main className="lg:col-span-9 xl:col-span-6">
							<SortingTabs />
							<QuestionListing />
            </main>
            <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
								<WhoToFollow />
							  <Trending />
              </div>
            </aside>
          </div>
        </div>
				<Footer />
      </div>
    </>
  )
}
