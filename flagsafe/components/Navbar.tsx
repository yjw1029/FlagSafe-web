'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const researchItems = [
    { href: '/research', label: '研究总览' },
    {
      href: '/research/deception',
      label: '欺骗',
      submenu: [
        { href: '/research/deception/deception-sandbox', label: '欺骗诱导沙箱' },
        { href: '/research/deception/mllm-deception', label: '多模态欺骗检测' },
        { href: '/research/deception/agent-deception', label: 'Agent欺骗检测' },
        { href: '/research/deception/text-deception', label: '纯文本欺骗检测' }
      ]
    }
  ];

  const platformItems = [
    { href: '/red-team', label: '红队演练' },
    { href: '/blue-team', label: '蓝队防御' },
    { href: '/white-box', label: '白盒透视' }
  ];

  const handleSubmenuMouseEnter = (label: string) => {
    if (submenuTimeout.current) {
      clearTimeout(submenuTimeout.current);
    }
    setActiveSubmenu(label);
  };

  const handleSubmenuMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 500); // 增加到500ms延迟，更容易操作
  };

  const handleSubmenuAreaEnter = () => {
    if (submenuTimeout.current) {
      clearTimeout(submenuTimeout.current);
    }
  };

  const handleDropdownMouseEnter = (dropdown: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 200); // 主菜单200ms延迟
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/baai-logo.png"
              alt="BAAI Logo"
              className="w-9 h-9"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-gray-900">FlagSafe</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-wider leading-none">
                大模型安全平台
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 安全指南 */}
            <Link
              href="/consensus"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
            >
              安全指南
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            {/* 前沿探索 - 下拉菜单 */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('research')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 group py-1">
                前沿探索
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'research' && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fadeIn">
                    {researchItems.map((item, idx) => (
                      <div key={idx}>
                        {item.submenu ? (
                          <div
                            className="relative"
                            onMouseEnter={() => handleSubmenuMouseEnter(item.label!)}
                            onMouseLeave={handleSubmenuMouseLeave}
                          >
                            <Link
                              href={item.href!}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </Link>
                            {activeSubmenu === item.label && (
                              <div
                                className="absolute left-full top-0 -ml-px"
                                onMouseEnter={handleSubmenuAreaEnter}
                                onMouseLeave={handleSubmenuMouseLeave}
                              >
                                <div className="w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fadeIn">
                                  {item.submenu.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href!}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 安全平台 - 下拉菜单 */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('platform')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 group py-1">
                安全平台
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'platform' && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fadeIn">
                    {platformItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 新闻资讯 */}
            <Link
              href="/news"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
            >
              新闻资讯
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-xs text-gray-400 font-medium hover:text-gray-600 transition-colors">
              CN / EN
            </button>
            <Link
              href="/console"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              进入控制台
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link
                href="/consensus"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                安全指南
              </Link>

              {/* 前沿探索 - 移动端 */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">前沿探索</div>
                <div className="pl-4 space-y-2">
                  {researchItems.map((item, idx) => (
                    <div key={idx}>
                      <Link
                        href={item.href!}
                        className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.submenu && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 安全平台 - 移动端 */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900">安全平台</div>
                <div className="pl-4 space-y-2">
                  {platformItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/news"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                新闻资讯
              </Link>

              <Link
                href="/console"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium text-center transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                进入控制台
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
