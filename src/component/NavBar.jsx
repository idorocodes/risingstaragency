import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const NavBar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const clickMenu = () => {
    setMobileMenuOpen(false)
   }
    const navigation = [
  { name: "Home", href: "#home" },
  { name: "Find Jobs", href: "#findjobs" },

  
  { name: "Contacts Us ", href: "#contact-us" },
];
    return (

         <header className="inset-x-0 -top-3  fixed bg-[#f0f5ffc7] backdrop-blur-2xl z-50">
                <nav
                  aria-label="Global"
                  className="flex items-center  justify-between p-4 lg:px-8"
                >
                  <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Risingstar Recruitment Agency</span>
                      <img
                        alt=""
                        src="https://i.ibb.co/4Q3pVWw/risinglogo.png"
                        className="h-12 p-1 w-auto "
                      />
                    </a>
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="size-7 bg-[#02101b] text-white rounded-2xl p-1" />
                    </button>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm/6  text-gray-900 hover:text-[#008eca] "
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-[#008eca]">
                      Log in 
                    </a>
                  </div>
                </nav>
                <Dialog
                  open={mobileMenuOpen}
                  onClose={setMobileMenuOpen}
                  className="lg:hidden "
                >
                  <div className="fixed inset-0 z-50" />
                  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  bg-[#f0f5ff81] backdrop-blur-2xl p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center text-center  justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        
                        <img
                          alt=""
                          src="https://i.ibb.co/4Q3pVWw/risinglogo.png"
                          className="h-15 w-auto"
                        />
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className=" size-7 bg-[#02101b] text-white rounded-2xl p-1" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 p-16">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={clickMenu}
                              className="-mx-3 block text-center rounded-lg px-3 py-2 font-medium gap-5 text-gray-900 text-[1.3em]  hover:text[#f14126] "
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </Dialog>
              </header>
        
    )
}


export default NavBar;