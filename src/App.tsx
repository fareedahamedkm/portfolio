import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Shield, 
  Server, 
  Network, 
  Database, 
  Terminal,
  ChevronDown,
  ExternalLink,
  Download
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showSkillDetails, setShowSkillDetails] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#0B1120] via-[#0F1A2E] to-[#1B2C4B]">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/95 via-[#0F1A2E]/90 to-[#1B2C4B]/85 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-circuit-board-1839-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B1120]/95 shadow-lg shadow-indigo-500/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              FA
            </span>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'education'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="/r.pdf" 
                download
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-32 text-center relative z-10">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Fareed Ahamed KM
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
              Aspiring Cybersecurity Architect | Building Secure and Scalable IT Solutions
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/fareed-ahamed-k-m-46915028b/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:fareedahamed@gmail.com" icon={<Mail />} label="Email" />
            </div>
            <div className="animate-bounce mt-16">
              <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle>About Me</SectionTitle>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-indigo-500/20">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            I am a second-year Computer Engineering student at Rajalakshmi Engineering College (Class of 2027), driven by a focused ambition to become a Cybersecurity Architect. My interests span the critical pillars of modern IT—cybersecurity, computer networking, and IT infrastructure management.

In a digital era defined by rapid technological advancement and rising threats, I aim to design and implement secure, scalable, and resilient systems that stand the test of real-world complexity. I bring a strong foundation in networking concepts, system administration, and security principles—strengthened through self-initiated research, continuous learning, and project development.

As an innovationist, I go beyond traditional learning. I actively work on projects that integrate modern security strategies with practical implementation—ranging from secure server deployment and domain configuration to intrusion detection and remote management solutions. My technical journey is backed by a growing portfolio of hands-on projects and a roadmap of industry certifications that validate my skills and commitment.

I value precision, resilience, and clarity in design—traits essential for a future architect responsible for critical digital systems. I’m currently sharpening my expertise in areas like network defense, enterprise security architecture, virtualization, and cloud computing, while staying aligned with industry standards and emerging innovations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <StatCard number="3+" label="Projects Completed" />
              <StatCard number="3+" label="Certifications" />
              <StatCard number="2+" label="Years Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Shield className="w-8 h-8 text-blue-400" />}
              title="Cybersecurity"
              skills={[
                "Intrusion Detection",
                "Vulnerability Assessment",
                "Firewall Configuration"
              ]}
            />
            <SkillCard 
              icon={<Network className="w-8 h-8 text-green-400" />}
              title="Networking"
              skills={[
                
                "Subnetting",
                "VLANs",
                "DHCP & DNS"
              ]}
            />
            <SkillCard 
              icon={<Server className="w-8 h-8 text-purple-400" />}
              title="System Administration"
              skills={[
                "Windows Server",
                "Linux (Ubuntu)",
                "Active Directory",
                "Domain Services"
              ]}
            />
            <SkillCard 
              icon={<Database className="w-8 h-8 text-yellow-400" />}
              title="Cloud Technologies"
              skills={[
                "Office 365 Administration",
                "Domain Migration",
                "VMware ESXi",
                "IT Infrastructure"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Home Virtual Lab"
              description="Designed and implemented a comprehensive virtual lab environment with Windows Server, Linux Ubuntu Server, and client PCs. Configured networking, Active Directory, and DNS services."
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
              link="https://github.com"
            />
            <ProjectCard
              title="Bare Metal Server Configuration"
              description="Successfully configured a bare metal server with RAID setup and VMware ESXi for virtual machine management."
              image="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80"
              link="https://github.com"
            />
            <ProjectCard
              title="Office 365 Domain Migration"
              description="Led a successful Office 365 domain migration project and implemented website hosting solutions."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              link="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle>Education & Certifications</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-indigo-500/20 mb-12">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Rajalakshmi Engineering College
              </h3>
              <p className="text-gray-300 text-lg">B.E. Computer Engineering (2023 - 2027)</p>
            </div>
            <div className="space-y-6">
              <CertificationCard
                title="Fortinet Certified Associate  (FCA)"
                issuer="Fortinet"
                icon={<Terminal className="w-6 h-6" />}
                date="2025"
             />
              <CertificationCard
                title="Introduction to Networking"
                issuer="Cisco"
                icon={<Network className="w-6 h-6" />}
                date="2023"
              />
              <CertificationCard
                title="Introduction to Cybersecurity"
                issuer="Cisco"
                icon={<Shield className="w-6 h-6" />}
                date="2024"
              />
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-indigo-500/20">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300 mb-6">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <a
                href="mailto:fareedahamed@gmail.com"
                className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                fareedahamedkm@gmail.com
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/fareed-ahamed-k-m-46915028b/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:fareedahamed@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 relative bg-[#0B1120]/90">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Fareed Ahamed KM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      <div className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>
      <span className="absolute -bottom-8 scale-0 group-hover:scale-100 transition-transform bg-gray-900 text-white text-sm py-1 px-2 rounded">
        {label}
      </span>
    </a>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      {children}
    </h2>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="text-center p-4 rounded-lg bg-gray-800/50">
      <div className="text-3xl font-bold text-blue-400 mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-indigo-500/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        {title}
      </h3>
      <ul className={`space-y-2 transition-all duration-300 ${isHovered ? 'text-blue-400' : 'text-gray-300'}`}>
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="group bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}

function CertificationCard({ title, issuer, icon, date }) {
  return (
    <div className="group bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-indigo-500/20 flex items-center transform transition-all duration-300 hover:-translate-x-2">
      <div className="mr-6 p-3 bg-gray-800 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {title}
        </h4>
        <p className="text-gray-300 text-sm">{issuer}</p>
      </div>
      <div className="text-gray-400 text-sm">{date}</div>
    </div>
  );
}

export default App;
