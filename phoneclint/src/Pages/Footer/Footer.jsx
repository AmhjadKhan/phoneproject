import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <div className='mt-4'>
      <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
  <div className="grid">
           <img src={logo} alt="" className="h-12 w-12 rounded-full ml-7" style={{border: '2px solid gray'}} />
           <p className="font-bold text-2xl">Mobile SHOP</p>
           </div>
           <p>Dolor sit amet, consectetur adipisicing elit. Itaque, voluptatibus.</p>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer
