import Lottie from 'lottie-react';
import animatedHouse from 'assets/animated-house.json';
export default function Hero() {
  return (
    <div className='container mx-auto'>
      <div class='text-center text-gray-800 py-20 px-6'>
        <h1 class='text-4xl text-blue-900 font-bold mt-0 mb-6'>
          Doğanın Sesini Ahşap Evinizde Dinleyin
        </h1>
        <h3 class='text-base font-thin mb-8'>
          Uygun fiyatlı ve kişiselleştirilebilir ahşap ev çözümleriyle
          hizmetinizdeyiz!
        </h3>
        <a
          className='inline-block px-2 py-2 bg-green-700 text-white font-medium text-md leading-normal capitalize rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          href='#!'
          role='button'
        >
          Gezinmeye Başla
        </a>
      </div>
      <Lottie animationData={animatedHouse} className='h-48 max-w-full' />
    </div>
  );
}
