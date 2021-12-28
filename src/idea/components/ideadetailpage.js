import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Timeline from './timeline'
import AppHeader from './appheader'
import IdeaSubheader from './ideasubheader'
import IdeaDetails from './ideadetails'
import Comments from './comments'
import Footer from '../../app/components/footer'
import { useRootStore } from '../../app/rootstore';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const IdeaDetailPage = () => {
	
	const { ideaid } =  useParams();
	const { ideaStore } = useRootStore();

	useEffect(async () => {
		let idea = ideaStore.ideaIndex[ideaid];
		document.title = `Cart Protocol | ${ idea.name }`;
	},[]);

	const idea = ideaStore.ideaIndex[ideaid];

	return (
    <>
      <div className="min-h-full bg-gray-100">
				<AppHeader />
        <main className="py-10">
					{
						idea == null ? <div className=""> <span>Loading...</span> </div> :
						<div>
							<IdeaSubheader />
							<div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
								<div className="space-y-6 lg:col-start-1 lg:col-span-2">
									<IdeaDetails />
									<Comments />
								</div>
								<Timeline />
							</div>
						</div>
					}
        </main>
				<Footer />
      </div>
    </>
  )
}

export default observer(IdeaDetailPage);