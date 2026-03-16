import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navigation } from '@/data/navigation'

interface LayoutProps {
  readonly children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  const closeMobile = useCallback(() => setSidebarOpen(false), [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.doc-section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-[264px] bg-white shadow-xl lg:hidden overflow-y-auto"
              initial={{ x: -264 }}
              animate={{ x: 0 }}
              exit={{ x: -264 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SidebarContent activeId={activeId} onNavigate={closeMobile} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[264px] shrink-0 sticky top-0 h-screen flex-col border-r border-gray-200 bg-white overflow-y-auto scrollbar-thin">
        <SidebarContent activeId={activeId} onNavigate={closeMobile} />
      </aside>

      {/* Main area */}
      <div className="flex-1 min-w-0">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center gap-3 px-5 py-3 glass lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
            aria-label="メニューを開く"
          >
            <Menu size={18} />
          </button>
          <img src="/images/ai-jedi-logo.png" alt="AI JEDI" className="w-[26px] h-[26px] object-contain rounded-md" />
          <span className="text-[13px] font-bold text-gray-900">AI JEDI</span>
        </header>

        {/* Page content */}
        <main>
          <div className="max-w-[880px] mx-auto px-6 sm:px-12 py-10 lg:py-10 pb-20">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

interface SidebarContentProps {
  readonly activeId: string
  readonly onNavigate: () => void
}

function SidebarContent({ activeId, onNavigate }: SidebarContentProps) {
  const handleClick = useCallback(
    (href: string) => {
      onNavigate()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    [onNavigate]
  )

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
        className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-100 no-underline"
      >
        <img src="/images/ai-jedi-logo.png" alt="AI JEDI" className="w-9 h-9 object-contain rounded-lg" />
        <div>
          <div className="text-[13px] font-bold text-gray-900 tracking-[0.02em]">AI JEDI</div>
          <div className="text-[10px] text-gray-400 font-semibold tracking-[0.1em] uppercase mt-px">AI Implementation</div>
        </div>
      </a>

      {/* Navigation */}
      <nav className="flex-1 px-2.5 py-2.5">
        {navigation.map((group) => (
          <div key={group.category} className="mb-1">
            <p className="px-3 py-2.5 pb-1.5 text-[10px] font-bold text-gray-400 tracking-[0.12em] uppercase">
              {group.category}
            </p>
            <div className="space-y-px">
              {group.items.map((item) => {
                const isActive = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
                    className={`
                      relative flex items-center gap-2 px-3 py-[7px] rounded-lg text-[13px] font-medium transition-all cursor-pointer no-underline
                      ${isActive
                        ? 'bg-gray-50 text-gray-800 font-semibold'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full bg-gray-700"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto text-[9px] font-bold bg-gray-100 text-gray-600 px-[7px] py-px rounded-full tracking-[0.04em]">
                        {item.badge}
                      </span>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
        <span className="text-[10px] text-gray-400">AI JEDI Inc. — 2026</span>
      </div>
    </div>
  )
}
