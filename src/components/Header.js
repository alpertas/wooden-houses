/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from 'assets/logo.png';

export default function Header() {
  return (
    <div className='bg-background-page-color'>
      <div className='container mx-auto h-16 flex items-center justify-between'>
        <div className='flex items-center gap-x-3'>
          <a href='#'>
            <img src={logo} alt='Wooden house main page logo' />
          </a>
          <nav className='flex gap-x-5 font-semibold'>
            <a
              href='#'
              className='text-black transition-all text-opacity-75 hover:text-opacity-100'
            >
              Ana Sayfa
            </a>
            <a
              href='#'
              className='text-black transition-all text-opacity-75 hover:text-opacity-100'
            >
              Takım
            </a>
            <a
              href='#'
              className='text-black transition-all text-opacity-75 hover:text-opacity-100'
            >
              Neden Biz?
            </a>
            <a
              href='#'
              className='text-black transition-all text-opacity-75 hover:text-opacity-100'
            >
              Hakkımızda
            </a>
          </nav>
        </div>
        <div>
          <nav>
            <a
              href='#'
              className='text-green-600 transition-all text-opacity-80 hover:text-opacity-100 font-bold'
            >
              Evini Oluştur
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
