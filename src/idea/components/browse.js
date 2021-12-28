import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import AppHeader from './appheader'
import SideBar from './sidebar'
import SortingTabs from './sortingtabs'
import Trending from './trending'
import WhoToFollow from './whotofollow'
import Footer from '../../app/components/footer'
import IdeaListing from './idealisting';
import { useRootStore } from '../../app/rootstore';


const BrowseLayout = observer((props) => {

	const store = useRootStore();
	
	// fetch the inital listings based on defaults
	useEffect(async () => {
		document.title = "Cart Protocol | Browse Ideas"
		await store.ideaStore.fetchListings();
	},[]);

	return (
    <>
      <div className="min-h-full bg-gray-100">
        <AppHeader/>
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
						<SideBar />
            <main className="lg:col-span-9 xl:col-span-6">
							<SortingTabs />
							<IdeaListing />
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
});

export default BrowseLayout;