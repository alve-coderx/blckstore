import logo from '../assets/logo.png'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
import { NavLink } from 'react-router-dom';


const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { activate, deactivate, account } = useWeb3React();
  // const {acc} = 
  console.log(account)
  return (
    <div className="bg-transparent">
      <div className="pt-6 px-5 lg:px-56">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div >
              <img className="w-40" src={logo} alt="" />
            </div>
            {
              !mobileMenuOpen && <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <AiOutlineMenu className='text-white' />
                </button>
              </div>
            }
            <div className="hidden lg:flex items-center lg:gap-x-8">
              <NavLink to='/' className="cursor-pointer font-semibold text-white hover:text-[#E8296F] hover:shadow-lg shadow-[#E8296F]">
                Home
              </NavLink>
              <p onClick={() => window.open("https://www.dextools.io/app/en/bnb/pair-explorer/0xfd92ab31b95dc644dc63ca7268f951531058e0f4")} className="cursor-pointer font-semibold text-white hover:text-[#E8296F] hover:shadow-lg shadow-[#E8296F]">
                Chart
              </p>
              <NavLink to='/' className="cursor-pointer font-semibold text-white hover:text-[#E8296F] hover:shadow-lg shadow-[#E8296F]">
                Staking
              </NavLink>
              <p onClick={() => window.open("https://docs.onestopblockshop.io/osbs-whitepaper")} className="cursor-pointer font-semibold text-white hover:text-[#E8296F] hover:shadow-lg shadow-[#E8296F]">
                Whitepaper
              </p>

              {
                account ? <button onClick={() => deactivate()} className='text-white border-[#E8296F] border-[3px] px-4 py-2 rounded-lg'>disconnect wallet</button>
                  :
                  <button onClick={() => activate(Injected)} className='text-white border-[#E8296F] border-[3px] px-4 py-2 rounded-lg'>connect wallet</button>
              }
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-transparent px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                  </a>
                </div>
                <div className="flex ">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <AiFillCloseCircle className='text-white' />
                  </button>
                </div>
              </div>
              <div className="mt-6 p-5 flow-root glass rounded-lg">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <NavLink to='/' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
                      Home
                    </NavLink>
                    <p onClick={() => window.open("https://www.dextools.io/app/en/bnb/pair-explorer/0xfd92ab31b95dc644dc63ca7268f951531058e0f4")} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
                      Chart
                    </p>
                    <NavLink to='/' className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
                      Staking
                    </NavLink>
                    <p onClick={() => window.open("https://docs.onestopblockshop.io/osbs-whitepaper")} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
                      Whitepaper
                    </p>
                    <button className='text-white border-[#E8296F] border-[3px] px-4 py-2 rounded-lg'>connect wallet</button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
