'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Facebook, 
  Instagram, 
  Cpu, 
  Briefcase, 
  BookOpen, 
  Award, 
  Sparkles, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  Home,
  Palette,
  CheckCircle,
  FolderOpen,
  User,
  Calendar,
  Layers,
  Heart,
  FileText,
  Bookmark,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Academic pathways expand/collapse flags
  const [expandedSsc, setExpandedSsc] = useState(false);
  const [expandedHsc, setExpandedHsc] = useState(false);
  const [expandedGoal, setExpandedGoal] = useState(false);

  // Documents & Certificates cards expand/collapse flags
  const [expandedDoc1, setExpandedDoc1] = useState(false);
  const [expandedDoc2, setExpandedDoc2] = useState(false);
  const [expandedDoc3, setExpandedDoc3] = useState(false);

  // Handle scroll backdrop blur in navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-neutral-200 selection:bg-[#c9a84c] selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/[0.05] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c9a84c] to-[#ede5d8] p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0c0c0c] flex items-center justify-center font-serif text-sm font-bold text-[#c9a84c]">
                ASN
              </div>
            </div>
            <span className="font-serif text-base tracking-widest text-neutral-100 uppercase hidden sm:block">Abu Sayed Noyon</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-widest uppercase text-neutral-400">
            {['home', 'about', 'education', 'skills', 'goals', 'contact'].map((sec) => (
              <button 
                key={sec} 
                onClick={() => scrollToSection(sec)}
                className={`transition-colors duration-300 hover:text-[#c9a84c] ${activeSection === sec ? 'text-[#c9a84c]' : ''}`}
              >
                {sec}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-neutral-400 hover:text-[#c9a84c]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0c0c] flex flex-col justify-center items-center gap-8 text-sm tracking-widest uppercase font-medium border-b border-white/[0.05]">
          {['home', 'about', 'education', 'skills', 'goals', 'contact'].map((sec) => (
            <button 
              key={sec} 
              onClick={() => scrollToSection(sec)}
              className="text-neutral-300 hover:text-[#c9a84c] transition-colors"
            >
              {sec}
            </button>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] text-neutral-400 uppercase tracking-widest">
            <Sparkles size={12} className="text-[#c9a84c]" /> Open to International Opportunities
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-neutral-100 leading-none">
            Abu Sayed <span className="text-[#c9a84c] italic font-normal">Noyon</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm font-light text-neutral-400 leading-relaxed max-w-xl">
            A vision-driven student from Sylhet, Bangladesh. Aspiring International Business specialist, IELTS candidate, and creative mind focused on sustainable global management strategies.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 rounded-full bg-[#c9a84c] text-black font-medium text-xs tracking-widest uppercase hover:bg-[#dfbc5e] transition-all transform hover:-translate-y-0.5">
              Connect Now
            </button>
            <button onClick={() => scrollToSection('about')} className="px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-neutral-300 text-xs tracking-widest uppercase hover:bg-white/[0.05] transition-all">
              Read Story
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 border-t border-white/[0.02] px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] text-[#c9a84c] uppercase tracking-widest font-mono font-bold">01 / Profile Statement</span>
            <h2 className="font-serif text-3xl font-light tracking-wide text-neutral-100">The Genesis of Ambition</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-sm font-light text-neutral-400 leading-relaxed">
            <p>
              Born and raised in the cultural heart of <strong className="text-neutral-200 font-medium">Sylhet, Bangladesh</strong>, my educational journey is grounded in an intense appreciation for systemic growth, global economies, and creative expression. Having recently completed my Higher Secondary Certificate (HSC) from the Humanities disciplines, I have engineered a unique worldview that fuses cultural empathy with business logistics.
            </p>
            <p>
              My primary target is to achieve a profound expertise in <strong className="text-neutral-200 font-medium">International Business and Management</strong> through world-class European institutions. I believe that modern market synchronization requires not just numerical intelligence, but acute social consciousness.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 bg-[#080808] border-t border-b border-white/[0.02] px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] text-[#c9a84c] uppercase tracking-widest font-mono font-bold">02 / Educational Milestone</span>
            <h2 className="font-serif text-3xl font-light tracking-wide text-neutral-100">Academic Trajectory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SSC Card */}
            <div className="bg-[#0c0c0c] border border-white/[0.04] p-8 rounded-2xl space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-neutral-500 font-mono">2022 Milestone</span>
                  <h3 className="font-serif text-xl font-light text-neutral-200 mt-1">Secondary School Certificate</h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[#c9a84c]">GPA 3.89</span>
              </div>
              <p className="text-xs text-neutral-400 font-light">
                Science Discipline &bull; Boroiuri Dadu's Sunna Bohumukhi Alim Madrasha. Fostered logic, mathematical inquiry, and analytical frameworks.
              </p>
              <button 
                onClick={() => setExpandedSsc(!expandedSsc)}
                className="inline-flex items-center gap-1.5 text-[10px] text-[#c9a84c] uppercase tracking-wider font-medium"
              >
                {expandedSsc ? 'Hide Framework' : 'View Core Modules'} {expandedSsc ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
              {expandedSsc && (
                <div className="pt-2 text-[11px] text-neutral-500 space-y-1 border-t border-white/[0.03] mt-2">
                  <p>&bull; General Mathematics & Higher Analytical Geometry</p>
                  <p>&bull; Physics Principles & Structural Chemistry</p>
                  <p>&bull; Empirical Research Methodologies</p>
                </div>
              )}
            </div>

            {/* HSC Card */}
            <div className="bg-[#0c0c0c] border border-white/[0.04] p-8 rounded-2xl space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] text-neutral-500 font-mono">2025 Graduation</span>
                  <h3 className="font-serif text-xl font-light text-neutral-200 mt-1">Higher Secondary Certificate</h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[#c9a84c]">GPA 3.17</span>
              </div>
              <p className="text-xs text-neutral-400 font-light">
                Humanities Discipline &bull; Dakshin Surma Govt. College, Sylhet. Broadened communication matrices, sociology, and geopolitical history knowledge.
              </p>
              <button 
                onClick={() => setExpandedHsc(!expandedHsc)}
                className="inline-flex items-center gap-1.5 text-[10px] text-[#c9a84c] uppercase tracking-wider font-medium"
              >
                {expandedHsc ? 'Hide Framework' : 'View Core Modules'} {expandedHsc ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
              {expandedHsc && (
                <div className="pt-2 text-[11px] text-neutral-500 space-y-1 border-t border-white/[0.03] mt-2">
                  <p>&bull; Civic Governance & Constitutional Paradigms</p>
                  <p>&bull; Global Socio-Cultural History</p>
                  <p>&bull; Advanced Communication & Logic Structures</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] text-[#c9a84c] uppercase tracking-widest font-mono font-bold">03 / Competency Matrix</span>
          <h2 className="font-serif text-3xl font-light tracking-wide text-neutral-100">Acquired Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Technical Assets', icon: <Cpu size={16} />, skills: ['AI Automation Systems', 'Microsoft Word Suite', 'PowerPoint Engineering', 'Digital Resource Research', 'Corporate Email Writing'] },
            { title: 'Human Capital', icon: <User size={16} />, skills: ['Interpersonal Communication', 'Systemic Problem Solving', 'Strategic Time Allocation', 'Cohesive Teamwork Architecture', 'Dynamic Quick Learning'] },
            { title: 'Linguistic Talents', icon: <Globe size={16} />, skills: ['Bangla (Native Proficiency)', 'English (Professional/Intermediate)'] },
            { title: 'Creative Synthesis', icon: <Palette size={16} />, skills: ['Fine Arts & Painting', 'Industrial DIY Crafts', 'Handmade Product Assembly'] }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white/[0.01] border border-white/[0.03] p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-[#c9a84c] font-serif text-sm">
                {cat.icon} <span>{cat.title}</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-400 font-light">
                {cat.skills.map((s, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c]/50" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* GOALS SECTION */}
      <section id="goals" className="py-24 bg-[#080808] border-t border-b border-white/[0.02] px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] text-[#c9a84c] uppercase tracking-widest font-mono font-bold">04 / Strategic Intentions</span>
            <h2 className="font-serif text-3xl font-light tracking-wide text-neutral-100">The Global Roadmap</h2>
          </div>

          <div className="space-y-4">
            {[
              { step: '01', title: 'IELTS Standard Qualification', desc: 'Currently in an immersive preparation phase targeting an overall score of Band 6.5 or above to satisfy prerequisites for European academic admission.' },
              { step: '02', title: 'Pre-University Academic Buffering', desc: 'Enrolling in self-paced foundational courses detailing Global Macroeconomics, Trade Logistics, and Corporate Ethics via Coursera.' },
              { step: '03', title: 'Altruistic Service Alignment', desc: 'Participating in local volunteer groups and community service projects to enhance organizational management and social responsibility credentials.' },
              { step: '04', title: 'European Higher Education Onboarding', desc: 'Targeting world-renowned public and application-oriented universities across Germany, Finland, and the Netherlands for an International Business undergraduate degree.' }
            ].map((g, idx) => (
              <div key={idx} className="p-6 bg-[#0c0c0c] border border-white/[0.03] rounded-2xl flex gap-6 items-start">
                <span className="font-serif text-2xl font-light text-[#c9a84c]/30">{g.step}</span>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-neutral-200">{g.title}</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 max-w-6xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] text-[#c9a84c] uppercase tracking-widest font-mono font-bold">05 / Communication Node</span>
            <h2 className="font-serif text-4xl font-light text-neutral-100">Initiate Correspondence</h2>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Open to academic queries, mentorship, institutional interactions, or professional networking requests.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:kaziabusayednoyon@gmail.com" className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl flex flex-col justify-between h-36 hover:border-[#c9a84c]/30 transition-all">
              <Mail className="text-[#c9a84c]" size={20} />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Email Address</span>
                <span className="text-xs text-neutral-200 font-light truncate mt-1 block">kaziabusayednoyon@gmail.com</span>
              </div>
            </a>

            <a href="https://www.facebook.com/kazis.Noyon" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl flex flex-col justify-between h-36 hover:border-[#c9a84c]/30 transition-all">
              <Facebook className="text-[#c9a84c]" size={20} />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Social Identity</span>
                <span className="text-xs text-neutral-200 font-light truncate mt-1 block">facebook.com/kazis.Noyon</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.03] py-12 text-center text-[10px] tracking-widest text-neutral-600 uppercase">
        &copy; 2026 Abu Sayed Noyon &bull; Sylhet, Bangladesh &bull; Engineered with Next.js
      </footer>

    </div>
  );
}
