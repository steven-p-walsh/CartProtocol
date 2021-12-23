import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Header from './header'
import Hero from './hero'
import Logocloud from './logocloud'
import AlternatingFeature from './alternatingfeature'
import GradientFeature from './gradientfeature'
import StatsDetails from './statsdetails'
import CTA from './cta'
import Footer from '../../app/components/footer'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Landing() {
  return (
    <div className="bg-white">
			<Header />
			
      <main>
				<Hero />
				<Logocloud />
				<AlternatingFeature />
				<GradientFeature />
				<StatsDetails />
				<CTA />
      </main>

			<Footer />
    </div>
  )
}
