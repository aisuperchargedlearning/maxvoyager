import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Studio', href: '/' },
  { title: 'Storytelling', href: '#storytelling' },
  { title: 'Testa Rossa Story', href: '#testa-rossa' },
  { title: 'Operation Sky Accord', href: '#sky-accord' },
  { title: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.children ? (
                  <div>
                    <button
                      ref={buttonRef}
                      onClick={() => toggleSubmenu(item.title)}
                      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
                    >
                      {item.title}
                    </button>
                    {openSubmenu === item.title && (
                      <div
                        ref={submenuRef}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5"
                      >
                        <div className="py-1">
                          {item.children.map((child) => (
                            <a
                              key={child.title}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-purple-500/20"
                              onClick={() => setOpenSubmenu(null)}
                            >
                              {child.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500/20"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium flex items-center justify-between"
                    >
                      {item.title}
                    </button>
                    {openSubmenu === item.title && (
                      <div className="pl-4">
                        {item.children.map((child) => (
                          <a
                            key={child.title}
                            href={child.href}
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/20"
                            onClick={() => {
                              setOpenSubmenu(null);
                              setIsOpen(false);
                            }}
                          >
                            {child.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}