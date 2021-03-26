import hero from '../images/herolive.png'
import Video from '@/components/Video'
import LayoutWrapper from '@/components/LayoutWrapper'
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.css'

function Home() {
  return (
    <div className="space-y-28 ipad:-space-y-32">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.css"
        />
        {/* This is Header font (Serif) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutWrapper>
        <div className="lg:mx-0 lg:-px-0 2xl:px-0">
          <img
            src={hero}
            className="absolute inset-0 object-cover w-full xxs:h-72 2xl:h-full lg:h-auto sm:mt-28 md:mt-28 2xl:mt-28 md:border-t-2 md:border-transparent md:dark:border-transparent"
            alt=""
          />
          {/*<svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163"></svg>*/}
          <div className="relative px-2 py-16 mx-auto overflow-hidden sm:max-w-xl ipad:-mt-32 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:px-0 xl:px-3 2xl:px-0 lg:mt-0 xl:mt-0 lg:pt-20">
            <div className="flex flex-col items-center justify-between lg:flex-row lg:space-x-6   xl:flex-row">
              <div className="z-40 mt-20 sm:mt-20 md:mt-8 lg:-mt-8 xl:ml-0 w-full max-w-xl mb-12 xl:mb-6 xl:mt-10 xl:pr-16 xl:w-full">
                <h2 className="dark:text-white text-gray-800 ipad:text-gray-100  md:text-gray-100 max-w-lg mb-6 text-4xl font-serif font-bold tracking-tight lg:text-white sm:text-4xl sm:leading-none">
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a lazy dog
                </h2>

                <p className="dark:text-gray-100 max-w-xl mb-4 text-base ipad:text-gray-100 md:text-lg md:text-gray-100">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudan, totam rem aperiam, eaque ipsa quae.
                </p>
                <button className="z-40 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 shadow-md border border-transparent rounded-md shadow-sm text-base font-medium text-white transition duration-500 ease-in-out bg-indigo-600 hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 ...">
                  Learn More
                </button>
              </div>
              <div className="container w-full ipad:w-full ipad:mb-0 md:w-full md:h-80 lg:w-5/6 lg:px-0 lg:pt-3 lg:py-1 xl:w-1/2 xl:h-72 xl:mx-0.5 xl:my-0.5 xl:pt-4 2xl:-mr-0 2xl:h-96 2xl:py-14 2xl:-mr-3">
                <Video className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>

      <main className="mt-20 xs:mt-28 xxs:mt-96">
        <div
          className="relative -mt-96 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: '75vh',
          }}
        >
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="z-999 pb-20 bg-gray-300 -mt-52 lg:-mt-56 xl:-mt-80 2xl:-mt-96">
          <div className="container mx-auto px-4 ipad:px-20 lg:px-0 xl:px-4 pt-20 pb-20 lg:pt-56 xl:pt-80 2xl:-mt-20 2xl:pt-10 2xl:max-w-7xl 2xl:px-0">
            <div className="flex flex-wrap 2xl:pt-32">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold text-gray-900">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into parts. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold text-gray-900">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information. Remember that by
                      this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold text-gray-900">Verified Company</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a feature will be
                      enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold font-serif leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to any element. Just
                  make sure you enable them first via JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get started faster. You can
                  change the text and images and you're good to go. Just make sure you enable them
                  first via JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: '95px',
                        top: '-94px',
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
                      summer, and that process will continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white dark:text-indigo fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg "
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-10 lg:mt-0">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold font-serif">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you get started faster.
                    You can change the text and images and you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2 pad:text-center">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Carefully crafted components</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4 ipad:px-20 lg:px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
                  NSIDClead scentist, puts the potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://source.unsplash.com/random"
                    className="shadow-lg rounded-full w-36 h-36 mx-auto"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://source.unsplash.com/random"
                    className="shadow-lg rounded-full w-36 h-36 mx-auto"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://source.unsplash.com/random"
                    className="shadow-lg rounded-full w-36 h-36 mx-auto"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://source.unsplash.com/random"
                    className="shadow-lg rounded-full w-36 h-36 mx-auto"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 top-24 ipad:top-6 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2580 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 ipad:px-20 lg:px-4 pt-10">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white font-serif">Build something</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white font-serif">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white font-serif">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white font-serif">Launch time</h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900 pt-36">
          <div className="container mx-auto px-4 ipad:px-20 lg:px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
