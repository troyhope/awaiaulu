import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Transition, Menu } from '@headlessui/react'
import onClickOutside from 'react-onclickoutside'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'

function Nav() {
  var [isOpen, setIsOpen] = useState(false) // Resources dropdown
  var [isMoreOpen, setIsMoreOpen] = useState(false) //Insights dropdown
  var [isAboutOpen, setIsAboutOpen] = useState(false) //About dropdown
  var [isProjectOpen, setIsProjectOpen] = useState(false) //Project dropdown

  var [isBurgerOpen, setIsBurgerOpen] = useState(false) //Mobile menu dropdown

  const toggle = () =>
    setIsOpen(!isOpen) ||
    setIsMoreOpen(!isMoreOpen) ||
    setIsAboutOpen(!isAboutOpen) ||
    setIsProjectOpen(!isProjectOpen)

  {
    /* When a user clicks outside of a modal, it will close. */
  }
  Menu.handleClickOutside = () =>
    setIsOpen(false) ||
    setIsMoreOpen(false) ||
    setIsBurgerOpen(false) ||
    setIsAboutOpen(false) ||
    setIsProjectOpen(false)

  return (
    <div className="z-50 relative -mx-3 -ml-3.5 sm:mx-4 md:mx-5 ipad:mx-16 lg:-mx-14">
      <div className="max-w-full mx-auto px-4 sm:px-0 pt-1">
        <div className="flex justify-between items-center border-b-0 border-gray-100 py-8 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                layout="fill"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              ></img>
            </a>
          </div>
          <div className="-mr-2 -my-2 ipad:visible lg:hidden">
            <button
              type="button"
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              className="dark:bg-indigo dark:text-gray-100 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="sm:z-999 hidden md:flex space-x-10">
            <Link
              href="/home"
              className="text-gray-900 dark:text-gray-100 dark:hover:text-purple-500"
            >
              <a className="text-gray-700 font-medium hover:text-purple-500 dark:text-gray-100 dark:hover:text-purple-500">
                Home
              </a>
            </Link>
            <div className="relative">
              {/* Resources Dropdown Button -- Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                id="aboutButton"
                type="button"
                //onMouseEnter={() => setIsAboutOpen(true)}
                //onMouseLeave={() => setIsAboutOpen(false)}
                onClick={() =>
                  setIsAboutOpen(!isAboutOpen) ||
                  setIsMoreOpen((isMoreOpen = false)) ||
                  setIsOpen((isOpen = false)) ||
                  setIsProjectOpen((isProjectOpen = false))
                }
                onBlur={() => setIsAboutOpen((isAboutOpen = false))}
                className="group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="hover:text-purple-500 text-gray-700 dark:text-gray-100 dark:hover:text-purple-500">
                  About
                </span>
                {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                <svg
                  className="ml-2 h-5 w-5 text-gray-700 group-hover:text-purple-500 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*
              'About' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

              <Transition
                show={isAboutOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                {/* These are the Project dropdown links -- */}
                {(ref) => (
                  <div
                    ref={ref}
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="dark:bg-indigo-light relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/chart-bar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Mission
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Get a better understanding of where your traffic is coming from.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/cursor-click */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Board
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Speak directly to your customers in a more meaningful way.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Staff
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Your customers&#039; data will be safe and secure.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/view-grid */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Translators
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Connect with third-party tools that you&#039;re already using.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 dark:bg-gray-700">
                        <div className="flow-root">
                          <a
                            href="/"
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-indigo-dark"
                          >
                            {/* Heroicon name: outline/play */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="ml-3 dark:text-gray-100">Watch Demo</span>
                          </a>
                        </div>

                        <div className="flow-root">
                          <a
                            href="/"
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-indigo-dark"
                          >
                            {/* Heroicon name: outline/phone */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <span className="ml-3 dark:text-gray-100">Contact Sales</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            </div>

            <div className="relative">
              {/* Resources Dropdown Button -- Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                id="resourcesButton"
                type="button"
                //onMouseEnter={() => setIsOpen(true)}
                //onMouseLeave={() => setIsOpen(false)}
                onClick={() =>
                  setIsOpen(!isOpen) ||
                  setIsMoreOpen((isMoreOpen = false)) ||
                  setIsAboutOpen((isAboutOpen = false)) ||
                  setIsProjectOpen((isProjectOpen = false))
                }
                onBlur={() => setIsOpen((isOpen = false))}
                className="group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="hover:text-purple-500 text-gray-700 dark:text-gray-100 dark:hover:text-purple-500">
                  Resources
                </span>
                {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                <svg
                  className="ml-2 h-5 w-5 text-gray-700 group-hover:text-purple-500 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*
              'Resources' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

              <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                {/* These are the Resources dropdown links -- */}
                {(ref) => (
                  <div
                    ref={ref}
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="dark:bg-indigo-light relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/chart-bar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Primary
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Get a better understanding of where your traffic is coming from.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/cursor-click */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              General
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Speak directly to your customers in a more meaningful way.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Online
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Your customers&#039; data will be safe and secure.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/view-grid */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Language
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Connect with third-party tools that you&#039;re already using.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Translations
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Resources for interpreting the Hawaiian language
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            </div>

            <div className="relative">
              {/* Projects Dropdown Button -- Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                id="projectsButton"
                type="button"
                //onMouseEnter={() => setIsOpen(true)}
                //onMouseLeave={() => setIsOpen(false)}
                onClick={() =>
                  setIsProjectOpen(!isProjectOpen) ||
                  setIsMoreOpen((isMoreOpen = false)) ||
                  setIsAboutOpen((isAboutOpen = false)) ||
                  setIsOpen((isOpen = false))
                }
                onBlur={() => setIsProjectOpen((isProjectOpen = false))}
                className="group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="hover:text-purple-500 text-gray-700 dark:text-gray-100 dark:hover:text-purple-500">
                  Projects
                </span>
                {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                <svg
                  className="ml-2 h-5 w-5 text-gray-700 group-hover:text-purple-500 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="false"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*
              'Projects' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

              <Transition
                show={isProjectOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                {/* These are the Project dropdown links -- */}
                {(ref) => (
                  <div
                    ref={ref}
                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="dark:bg-indigo-light relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <Link href="/projects">
                          <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark">
                            {/* Heroicon name: outline/chart-bar */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-indigo-600 "
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                                Primary
                              </p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                                Get a better understanding of where your traffic is coming from.
                              </p>
                            </div>
                          </a>
                        </Link>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/cursor-click */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              General
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Speak directly to your customers in a more meaningful way.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Online
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Your customers&#039; data will be safe and secure.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/view-grid */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Language
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Connect with third-party tools that you&#039;re already using.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Translations
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Resources for interpreting the Hawaiian language
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Project Item 1
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Morbi semper consequat augue in volutpat.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Project Item 2
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Donec non velit vehicula, pulvinar felis quis, ultrices erat.
                              Suspendisse.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Project Item 3
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Aenean vel diam est. Fusce nisl nunc, molestie ut cursus sed,
                              facilisis.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            </div>

            <div className="relative">
              {/* Insights Dropdown Button-- Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                id="insightsButton"
                type="button"
                //onMouseEnter={() => setIsMoreOpen(true)}
                //onMouseLeave={() => setIsMoreOpen(false)}
                onClick={() =>
                  setIsMoreOpen(!isMoreOpen) ||
                  setIsOpen((isOpen = false)) ||
                  setIsAboutOpen((isAboutOpen = false)) ||
                  setIsProjectOpen((isProjectOpen = false))
                }
                onBlur={() => setIsMoreOpen((isMoreOpen = false))}
                className="group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="hover:text-purple-500 text-gray-700 dark:text-gray-100 dark:hover:text-purple-500">
                  Insights
                </span>
                {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                <svg
                  className="ml-2 h-5 w-5 text-gray-700 group-hover:text-purple-500 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*
              'Insights' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

              <Transition
                show={isMoreOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                {/* These are the More dropdown links -- */}
                {(ref) => (
                  <div
                    ref={ref}
                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="dark:bg-indigo-light relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/support */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Get all of your questions answered in our forums or contact support.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/bookmark-alt */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Guides
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Learn how to maximize our platform to get the most out of it.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/calendar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              See what meet-ups and other events we might be planning near you.
                            </p>
                          </div>
                        </a>

                        <a
                          href="/"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-indigo-dark"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-purple-500">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-100 dark:hover:text-purple-500">
                              Understand how we take your privacy seriously.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="dark:bg-indigo-light px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3 className="text-sm tracking-wide font-medium text-gray-400 uppercase ">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            <li className="text-base truncate">
                              <a
                                href="/"
                                className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-purple-500"
                              >
                                Boost your conversion rate
                              </a>
                            </li>

                            <li className="text-base truncate">
                              <a
                                href="/"
                                className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-purple-500"
                              >
                                How to use search engine optimization to drive traffic to your site
                              </a>
                            </li>

                            <li className="text-base truncate">
                              <a
                                href="/"
                                className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-purple-500"
                              >
                                Improve your customer experience
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-5 text-sm">
                          <a
                            href="/"
                            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-gray-100 dark:hover:text-purple-500"
                          >
                            {' '}
                            View all posts <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Transition>
            </div>
          </nav>

          {/* Sign in & Sign up */}
          <div className="hidden ipad:hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ThemeSwitch />
            <a
              href="/"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Donate
              {/* Heroicon name: outline/play */}
              {/*<svg
                className="flex-shrink-0 h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              */}
            </a>
          </div>
        </div>
      </div>

      {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}

      <Transition
        show={isBurgerOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="dark:bg-indigo-light rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  ></img>
                </div>
                <div className="-mr-2">
                  {/* Burger menu / close transition-- */}
                  <button
                    type="button"
                    onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                    className="dark:bg-indigo-light dark:hover:bg-indigo-dark bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6 dark:text-gray-100"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                {/* These are the links shown when he burger menu is open and the screen is small.  -- */}
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-indigo-dark"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                      Analytics
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-indigo-dark"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                      Engagement
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-indigo-dark"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                      Security
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-indigo-dark"
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                      Integrations
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-indigo-dark"
                  >
                    {/* Heroicon name: outline/refresh */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Pricing
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Docs
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Enterprise
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Blog
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Help Center
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Guides
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Security
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100"
                >
                  Events
                </a>
              </div>
              <div>
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-100">
                  Existing customer?
                  <a href="/" className="text-indigo-600 hover:text-indigo-500">
                    {' '}
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Menu.handleClickOutside,
}

export default onClickOutside(Nav, clickOutsideConfig)
