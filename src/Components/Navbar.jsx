import logo from '../assets/logo.png'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

const CoinbaseWallet = new WalletLinkConnector({
 url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 appName: "Web3-react Demo",
 supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Chart', href: 'https://www.dextools.io/app/en/bnb/pair-explorer/0xfd92ab31b95dc644dc63ca7268f951531058e0f4' },
  { name: 'Staking', href: '#' },
  { name: 'Whitepaper', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { activate, deactivate } = useWeb3React();
 
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
              {navigation.map((item) => (
                <a key={item.name} onClick={() => window.open(item.href)} className="cursor-pointer font-semibold text-white hover:text-[#E8296F] hover:shadow-lg shadow-[#E8296F]">
                  {item.name}
                </a>
              ))}
              
              <button onClick={() => activate(Injected)} className='text-white border-[#E8296F] border-[3px] px-4 py-2 rounded-lg'>connect wallet</button>
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
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
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
