import { observer } from "mobx-react-lite"
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const Drawer = (props) => {
	const [open, setOpen] = useState(false);
	const { buttonText, formbody } = props;

	return (
		<>
		<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden z-50" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
				<Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>


          <div className="fixed inset-y-0 pl-16 max-w-full right-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-2xl">
					
								{
									React.createElement(
										formbody,
										{
											setOpen: setOpen
										}
									)
								}

              </div>
            </Transition.Child>
          </div>
					
        </div>
      </Dialog>
    </Transition.Root>
		
			<a
				href="#"
				onClick={ () => setOpen(true) }
				className="ml-8 inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
			>
				{ buttonText }
			</a>

		</>
	);
}

export default observer(Drawer);