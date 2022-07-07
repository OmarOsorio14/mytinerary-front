import React from 'react';
import '../styles/App.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/logo.svg'
import full from '../assets/full_logo.svg'
import default_user from '../assets/default_user.png'
import {Link as LinkRouter, useLocation} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import userActions from '../redux/actions/userActions';


let navigation;
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
	const dispatch = useDispatch()
	const user = useSelector(store => store.userReducer.user)

	const location = useLocation();
		if(location.pathname === '/' ){
			navigation = [
				{ name: 'Home', to: '/', current: true },
				{ name: 'Cities', to: '/cities', current: false }
			]
		}else if(location.pathname === '/cities'){
			navigation = [
				{ name: 'Home', to: '/', current: false },
				{ name: 'Cities', to: '/cities', current: true }
			]
		}else{
			navigation = [
				{ name: 'Home', to: '/', current: false },
				{ name: 'Cities', to: '/cities', current: false }
			]
		}

  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
									<LinkRouter to="/">
										<img
											className="block lg:hidden h-14 w-auto"
											src={logo}
											alt="MyTinerary"
										/>
									</LinkRouter>
                  <LinkRouter to="/">
									<img
                    className="hidden lg:block h-14 w-auto"
                    src= {full}
                    alt="MyTinerary"
                  />
									</LinkRouter>
                
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 items-center mt-3">
                    {navigation.map((item) => (
                      <LinkRouter
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </LinkRouter>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user == null ? default_user : user.photo}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      {user == null 
											? <><Menu.Item>
											{({ active }) => (
												<LinkRouter
													to="/login"
													className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
												>
												Log In
												</LinkRouter>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<LinkRouter
													to="/signup"
													className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
												>
													Sign Up
												</LinkRouter>
											)}
										</Menu.Item></> 
										: 	<Menu.Item>
										{({ active }) => (
											<button
												onClick={() => dispatch(userActions.signOutUser())}
												className={classNames(active ? 'bg-gray-100 w-full' : '', 'block px-4 py-2 text-sm text-gray-700 w-full')}
											>
												Sign out
											</button>
										)}
									</Menu.Item>}
											
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
								<LinkRouter key={item.name} to={item.to}>
									<Disclosure.Button
										as="a"
										className={classNames(
											item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block px-3 py-2 rounded-md text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								</LinkRouter>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
