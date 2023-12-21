import { Disclosure } from '@headlessui/react'



const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'About Me', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-dms text-blue text-4xl font-puffinLiquid ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8 ">
            
            <nav className="hidden lg:flex lg:space-x-8 lg:py-2 " aria-label="Global">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-dms text-blue shadow-xl shadow-white rounded-full' : 'hover:rounded-full',
                    'hover:bg-dmbg py-2 px-8 text-lg hover:shadow-inner hover:shadow-dms '
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </Disclosure>
  )
}
