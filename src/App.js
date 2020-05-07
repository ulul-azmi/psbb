import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles.css'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="font-sans bg-white min-h-screen">
          <div
            className="bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white text-center"
            style={{
              height: 'calc(100vh - 155px)',
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582247371634-cc060c909a78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')"
            }}
          >
            <div className="absolute bg-green-theme w-full h-full opacity-50"></div>

            <h1 className="text-6xl tracking-widest leading-6 z-10 font-semibold">PSBB</h1>
            <p className="z-10 mt-8 text-3xl tracking-wide text-gray-100">Program Santunan Bagi Bareng</p>

            <p className="z-10 text-2xl tracking-normal text-gray-100 leading-10 mt-3">
              Santunan Paket Sembako <br /> untuk Masyarakat Membutuhkan
            </p>

            <p className="mt-10 text-2xl  text-gray-100 tracking-tigh z-10">Dana Yang terkumpul hingga 29 April 2020</p>
            <p className="text-5xl z-10 tracking-wide font-medium">Rp 5.000.000</p>

            <div className="z-10 bg-green-600 text-green-100 font-medium text-lg rounded-lg shadow-lg px-4 py-3 w-5/6 md:w-2/4 lg:w-1/4 cursor-pointer">
              Yuk Donasi
            </div>
          </div>

          <section className="flex flex-col items-center pt-4 bg-gray-50">
            <h3 className="text-gray-900 font-medium text-2xl tracking-wide leading-10">In Collaboration with</h3>

            <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 w-full gap-4 lg:p-4 mt-4">
              <img className="m-auto" src="http://acmelogos.com/images/logo-7.svg" />
              <img className="m-auto" src="http://acmelogos.com/images/logo-6.svg" />
              <img className="m-auto" src="http://acmelogos.com/images/logo-6.svg" />
              <img className="m-auto" src="http://acmelogos.com/images/logo-2.svg" />
              <img className="m-auto" src="http://acmelogos.com/images/logo-1.svg" />
            </div>
          </section>

          <section className="bg-white flex flex-col items-center py-4">
            <h3 className="text-gray-900 font-medium text-2xl tracking-wide leading-10 p-4">About PSBB</h3>

            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2  mt-3 px-3 gap-4">
              <div className="">
                <img
                  className="w-full object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                  alt=""
                />
              </div>

              <p className="text-justify leading-8 px-3">
                <span className="font-semibold">Assalamu'alaikum</span> <br />
                Saat ini, kita sedang dilanda wabah covid-19 (corona virus), keadaan ini sekejap merubah seluruh
                aktifitas masyarakat yang mengharuskan untuk bekerja dari rumah. Bekerja dari rumah hanya dapat
                dilakukan oleh sebagian orang, tidak berlaku untuk pedagang kecil, buruh harian, dan yang lainya. Mereka
                tetap berjuang untuk menafkahi keluarga di tengah wabah yang sedang terjadi. Pada kesempatan ini, kami
                ingin bergerak untuk membantu saudara kita yang sedang berjuang dijalan dengan memberikan{' '}
                <span className="font-semibold">Paket Sembako</span> yang insya Allah akan di distribusikan di setiap
                Jum'at, gerakan dan penggalangan donasi ini akan berlangsung sampai waktu yang tidak di tentukan,
                sedikit Rezeki yang kita beri akan memberikan banyak energi untuk mereka semua.
                <br />
                <br />
                <span className="italic">
                  "Perumpamaan orang-orang yang mendermakan (shodaqoh) harta bendanya di jalan Allah, seperti (orang
                  yang menanam) sebutir biji yang menumbuhkan tujuh untai dan tiap-tiap untai terdapat seratus biji dan
                  Allah melipat gandakan (balasan) kepada orang yang dikehendaki, dan Allah Maha Luas (anugrahNya) lagi
                  Maha Mengetahui“. (QS. Al-Baqoroh: 261)
                </span>
                <br />
                <br />
                Terimakasih atas perhatiannya Wassalamualaikum
              </p>
            </div>
          </section>

          <section className="bg-gray-50  flex flex-col items-center py-6">
            <h3 className="text-gray-900 font-medium text-2xl tracking-wide leading-10 p-2">Pelaksanaan Acara</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 mt-3 px-3 gap-10 lg:gap-40">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12">
                  <path
                    className="primary text-green-theme fill-current"
                    d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"
                  />
                  <path
                    className="secondary text-green-theme fill-current"
                    d="M13 13h3v3h-3v-3zM7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"
                  />
                </svg>

                <h4 className="text-gray-900 text-lg leading-7 tracking-wide text-gray-700">
                  Setiap jumat selama Ramadhan
                </h4>
              </div>

              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon-location-pin w-12 text-green-theme fill-current"
                >
                  <g>
                    <path
                      className="secondary"
                      d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z"
                    />
                    <path
                      className="primary"
                      d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
                    />
                  </g>
                </svg>

                <h4 className="text-gray-900 text-lg leading-7 tracking-wide text-gray-700">
                  DKI Jakarta dan sekitarnya
                </h4>
              </div>
            </div>
          </section>

          <section className="bg-green-theme flex py-4 flex-col items-center">
            <h3 className="text-green-100 font-medium text-2xl tracking-wide leading-10 p-2">Gallery</h3>
            <h5 className=" w-5/6 lg:w-full text-center text-lg leading-7 text-green-100">
              Beberapa foto yang acara yang sudah pernah kita laksanakan
            </h5>

            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 p-6">
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />

              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
              <img
                className="w-full object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt=""
              />
            </div>
          </section>

          <section className="bg-white flex py-4 flex-col items-center">
            <h3 className="text-gray-900 font-medium text-2xl tracking-wide leading-10 p-2">Donasi</h3>
            <h5 className="text-lg leading-7 text-gray-700">Donasi Dapat diberikan melalui </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 mt-5 w-5/6 lg:w-3/5">
              <div className="space-y-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 pb-10 lg:pr-10">
                <h5 className="text-center text-lg leading-7">Transfer Bank</h5>
                <div className="bg-white rounded shadow-lg flex flex-col w-full items-center justify-around text-gray-900 p-4 text-lg">
                  <span className="text-gray-900 ml-4 text-blue-500 font-semibold leading-7">BCA</span>
                  <p className="mt-2 tracking-wide leading-7">6330961421 a.n Sofyan Ali K.</p>
                </div>

                <div className="bg-white rounded shadow-lg flex flex-col w-full items-center justify-around text-gray-900 p-4 text-lg">
                  <span className="text-gray-900 ml-4 text-green-500 font-semibold leading-7">BNI Syariah</span>
                  <p className="mt-2 tracking-wide leading-7">6330961421 a.n Sofyan Ali K.</p>
                </div>
              </div>

              <div className="space-y-5 lg:pr-10">
                <h5 className="text-center text-lg leading-7">E-Wallet</h5>
                <div className="bg-white rounded shadow-lg flex flex-col w-full items-center justify-around text-gray-900 p-4 text-lg">
                  <span className="text-gray-900 ml-4 text-green-500 font-semibold leading-7">Gopay</span>
                  <p className="mt-2 tracking-wide leading-7">6330961421 a.n Sofyan Ali K.</p>
                </div>

                <div className="bg-white rounded shadow-lg flex flex-col w-full items-center justify-around text-gray-900 p-4 text-lg">
                  <span className="text-gray-900 ml-4 text-purple-500 font-semibold leading-7">OVO</span>
                  <p className="mt-2 tracking-wide leading-7">6330961421 a.n Sofyan Ali K.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 mt-5 w-5/6 lg:w-3/5 mt-10 ">
              <div className="px-4 py-2 bg-green-theme text-green-100 text-center shadow rounded-lg cursor-pointer flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                  <path
                    className="primary"
                    d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
                  />
                  <path
                    className="secondary"
                    d="M19.3 3.3a1 1 0 0 1 1.4 1.4L16.42 9H19a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2.59l4.3-4.3z"
                  />
                </svg>
                <span>Konfirmasi donasi PIC Sofyan</span>
              </div>

              <div className="px-4 py-2 bg-green-theme text-green-100 text-center shadow rounded-lg cursor-pointer flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                  <path
                    className="primary"
                    d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z"
                  />
                  <path
                    className="secondary"
                    d="M19.3 3.3a1 1 0 0 1 1.4 1.4L16.42 9H19a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2.59l4.3-4.3z"
                  />
                </svg>
                <span>Konfirmasi donasi PIC Kesta</span>
              </div>
            </div>
          </section>
        </div>
      </Router>
    </Provider>
  )
}

export default App
