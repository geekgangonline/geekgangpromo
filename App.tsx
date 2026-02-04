import { useState, useEffect } from 'react';
import { cn } from './utils/cn';

const services = [
  {
    icon: '🎵',
    title: 'Music Artists',
    description: 'Elevate your sound to the world. We handle branding, social media growth, playlist pitching, and viral marketing campaigns.',
  },
  {
    icon: '🏪',
    title: 'Small Business',
    description: 'Turn local into legendary. We create awareness campaigns, local SEO strategies, and community engagement that drives customers.',
  },
  {
    icon: '💡',
    title: 'Business Ideas',
    description: 'Got a vision? We help launch your concepts with pitch decks, investor outreach, and go-to-market strategies.',
  },
  {
    icon: '📱',
    title: 'App Promotion',
    description: 'Get your app the attention it deserves. ASO optimization, influencer partnerships, and user acquisition campaigns.',
  },
];

const stats = [
  { value: '50+', label: 'Countries Reached' },
  { value: '500+', label: 'Campaigns Launched' },
  { value: '10M+', label: 'Audience Engaged' },
  { value: '98%', label: 'Client Satisfaction' },
];

const workExamples = [
  { category: 'Music', client: 'Rising Artist', result: '2M Streams in 30 Days', color: 'from-pink-500 to-rose-500' },
  { category: 'Business', client: 'Tech Startup', result: '10K Users in Week 1', color: 'from-cyan-500 to-blue-500' },
  { category: 'App', client: 'Fitness App', result: '50K Downloads Launch', color: 'from-violet-500 to-purple-500' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Custom Cursor Glow */}
      <div
        className="fixed pointer-events-none w-96 h-96 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 blur-3xl transition-transform duration-300 ease-out z-0"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          transform: `scale(${scrolled ? 0.5 : 1})`,
        }}
      />

      {/* Navigation */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-6 py-4',
          scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              #Geekgang
            </span>
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Promo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs tracking-wider text-white/70">WORLDWIDE MARKETING AGENCY</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="block animate-fade-in-up">We Promote</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up delay-100">
              Everything
            </span>
            <span className="block text-white/50 animate-fade-in-up delay-200">Worth Noticing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
            From underground artists to groundbreaking apps, we amplify voices that matter. 
            Your vision, our expertise, global reach.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500">
            <a
              href="#contact"
              className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Start Your Campaign
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="px-8 py-4 text-lg font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-violet-600/20 to-transparent blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-600/20 to-transparent blur-xl animate-float-delayed" />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Marketing for the{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital Age
                </span>
              </h2>
              <p className="text-lg text-white/60 mb-6">
                #Geekgang Promo isn't just another marketing agency. We're your partners in growth, 
                dedicated to amplifying your message across borders and platforms.
              </p>
              <p className="text-lg text-white/60 mb-8">
                Founded on the belief that great ideas deserve global audiences, we've helped 
                hundreds of creators, entrepreneurs, and innovators break through the noise.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['🎵', '🏢', '🚀', '📱'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-white/10 border-2 border-[#0a0a0f] flex items-center justify-center text-xl"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/50">
                  <span className="text-white font-medium">500+</span> Clients Worldwide
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4 p-8 bg-white/5 border border-white/10 rounded-3xl">
                {[
                  { icon: '🌍', label: 'Global Reach' },
                  { icon: '⚡', label: 'Fast Results' },
                  { icon: '🎯', label: 'Targeted Growth' },
                  { icon: '🤝', label: 'Partner Mentality' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Comprehensive promotional strategies tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/40 group-hover:text-white/70 transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
            <p className="text-lg text-white/60">Real results for real clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workExamples.map((work) => (
              <div
                key={work.client}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 cursor-pointer"
              >
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100', work.color)} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <div className="relative p-8 h-80 flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{work.client}</h3>
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    {work.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-white/60">Simple process, powerful results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your vision, goals, and audience' },
              { step: '02', title: 'Strategy', desc: 'Custom campaign roadmap designed for success' },
              { step: '03', title: 'Execution', desc: 'Launch and manage campaigns across platforms' },
              { step: '04', title: 'Scale', desc: 'Optimize and grow based on real data' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent -translate-x-1/2" style={{ width: 'calc(100% - 2rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-white/60">
              Ready to take your brand to the next level? Drop us a line.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Service Interest</label>
                <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors">
                  <option value="">Select a service...</option>
                  <option value="music">Music Artist Promotion</option>
                  <option value="business">Small Business Marketing</option>
                  <option value="ideas">Business Idea Launch</option>
                  <option value="app">App Promotion</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@geekgang.promo</span>
              </div>
              <div className="flex items-center gap-4">
                {['Twitter', 'Instagram', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              #Geekgang
            </span>
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase">Promo</span>
          </div>
          <p className="text-sm text-white/40">
            © 2025 #Geekgang Promo. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}

export default App;
