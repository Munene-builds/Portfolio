import React from 'react'

const Navbar = () => {
    // Nav Links Array
    const navLinks = [
        {name: "Home", href: "#"},
        {name: "Portfolio", href: "#portfolio"},
        {name: "About", href: "#about"},
        {name: "Resume", href: "#resume"},
        {name: "Contact", href: "#contact"},
    ];
  return (
    <header className='fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out'>
        <nav className='flex items-center justify-between max-w-6x1 mx-auto w- [90%] py-4'>
            
            {/* Logo*/ }

            <a href="#" className='text-2xl md:text-3xl font-bold mr-6'>
                Munene Builds <span className='text-primary text-3xl'>.</span>
                </a>
                {/* Nav links */}

                <div className='hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-3 rounded-b-full'>
                    
                    {navLinks.map((link, index) =>(
                        
                        <a href={link.href} className='text-content text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out' key={link.name || index}>{link.name}</a>
                    ))}
                </div>
        </nav>
    </header>
   
  )
}

export default Navbar
