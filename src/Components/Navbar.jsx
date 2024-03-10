import '../App.css'
import Favicon from '../../public/favicon.png'

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
      navbar.classList.add('fixed');
  } else {
      navbar.classList.remove('fixed');
  }
});

function Navbar() {

  return (
    <>
        <nav id='navbar' className="w-full h-24 flex justify-center absolute z-50">
          <div className="wrapper sm:container flex justify-center">
            <ul className="grid grid-cols-5 items-center gap-10">
              <li><img src={Favicon} alt="favicon" className='sm:w-16 w-12'/></li>
              <li className="text-white text-lg font-bold">Home</li>
              <li className="text-white text-lg font-bold">About</li>
              <li className="text-white text-lg font-bold">Services</li>
              <li className="text-white text-lg font-bold">Contact</li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar
