import Link from "next/link";

// DEV PORTFOLIO ABOUT PAGE
// This is the professional about page for the development portfolio
// Keep separate from photography about page at /photography/about

export default function About() {
  return (
    <main className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h1>
        <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
          Computer Engineering student and software developer passionate about building 
          <span className="text-cyan-400 font-semibold"> scalable systems</span> and 
          <span className="text-blue-400 font-semibold"> innovative solutions</span>.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-cyan-400 mb-1">4+</div>
          <div className="text-neutral-300 text-sm">Years Programming</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-emerald-400 mb-1">7+</div>
          <div className="text-neutral-300 text-sm">Projects Completed</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
          <div className="text-neutral-300 text-sm">Team Rotations</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-purple-400 mb-1">2026</div>
          <div className="text-neutral-300 text-sm">Graduation Year</div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Bio Section */}
        <section>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            My Journey
          </h2>
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              I&apos;m Pryce Tharpe, a Computer Engineering student at Purdue University currently 
              rotating through Cloud, Mobile, and DevOps teams at Mesh Systems. My passion lies 
              at the intersection of <strong className="text-cyan-400">innovative technology</strong> and 
              <strong className="text-blue-400"> practical problem-solving</strong>.
            </p>
            <p>
              At Mesh Systems, I&apos;ve had the opportunity to work across multiple disciplines—from building 
              Azure ETL pipelines that reduced processing time by 95%, to developing company-wide AI standards 
              that were mandated by our VP of Engineering. This diverse experience has taught me that the 
              best solutions often come from understanding both the technical depth and business context.
            </p>
            <p>
                              What drives me most is the ability to take complex problems and break them down into elegant, 
                scalable solutions. Whether it&apos;s embedded firmware for music sequencers or enterprise AI frameworks, 
              I believe in writing code that not only works but tells a story.
            </p>
          </div>
        </section>

        {/* Technical Philosophy */}
        <section>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Technical Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
              <h3 className="font-bold text-lg text-white mb-3">Build for Impact</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Every line of code should serve a purpose. I focus on solutions that create measurable 
                                 value—whether that&apos;s saving hours of manual work or enabling new capabilities.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
              <h3 className="font-bold text-lg text-white mb-3">Learn Continuously</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Technology evolves rapidly. I embrace new tools and methodologies, from Azure cloud services 
                to cutting-edge AI frameworks, always staying curious and adaptable.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
              <h3 className="font-bold text-lg text-white mb-3">Collaborate Effectively</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                The best software is built by teams. I prioritize clear communication, mentoring others, 
                and creating documentation that enables everyone to contribute meaningfully.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
              <h3 className="font-bold text-lg text-white mb-3">Design for Scale</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Systems should be built to grow. I architect solutions with maintainability, 
                performance, and extensibility in mind from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Technical Expertise
          </h2>
          <div className="space-y-6">
            
            {/* Programming Languages */}
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C++", "JavaScript", "TypeScript", "C#", "SQL", "Assembly", "SystemVerilog", "MATLAB"].map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-300 rounded-md border border-blue-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {["Microsoft Azure", "Azure Data Factory", "Azure Functions", "Docker", "CI/CD", "GitHub Actions"].map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium bg-cyan-900/30 text-cyan-300 rounded-md border border-cyan-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "FastAPI", "LangChain", "Git/GitHub", "VSCode", "Linux"].map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium bg-emerald-900/30 text-emerald-300 rounded-md border border-emerald-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware & Embedded */}
            <div>
              <h3 className="font-bold text-lg text-white mb-3">Hardware & Embedded</h3>
              <div className="flex flex-wrap gap-2">
                {["STM32", "USRP", "Raspberry Pi", "Arduino", "I2C", "SPI", "DMA", "DAC", "Circuit Design", "KiCAD"].map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium bg-purple-900/30 text-purple-300 rounded-md border border-purple-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests - PLACEHOLDER SECTION */}
        <section>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Beyond Code
          </h2>
          <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
            <p className="text-neutral-300 leading-relaxed mb-4">
                             When I&apos;m not coding, you&apos;ll find me exploring the intersection of technology and creativity. 
                              I&apos;m passionate about photography, capturing moments that tell stories—much like well-written code.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {/* PLACEHOLDER: Add personal interests, hobbies, or activities */}
              <span className="text-neutral-500 italic">
                [PLACEHOLDER: Add personal interests, hobbies, volunteer work, 
                or other activities that show your personality and well-roundedness]
              </span>
            </p>
            <p className="text-neutral-300 leading-relaxed">
              I believe that diverse experiences outside of engineering make me a better problem solver 
              and collaborator. Every perspective adds value to the development process.
            </p>
          </div>
        </section>

        {/* Current Goals - PLACEHOLDER SECTION */}
        <section>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Current Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
              <h3 className="font-bold text-lg text-white mb-3">Short Term</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Complete Computer Engineering degree at Purdue (May 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Expand expertise in cloud architecture and AI integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-neutral-500 italic">[PLACEHOLDER: Add specific learning goals or certifications you&apos;re pursuing]</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
              <h3 className="font-bold text-lg text-white mb-3">Long Term</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Lead engineering teams in building scalable, impactful systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-neutral-500 italic">[PLACEHOLDER: Add career aspirations - team lead, startup, specific industry, etc.]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-neutral-500 italic">[PLACEHOLDER: Add personal goals or impact you want to make]</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in discussing new opportunities, technical challenges, 
            or just connecting with fellow developers and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              View My Work
            </Link>
            <a
              href="mailto:ptharpe@purdue.edu"
              className="px-8 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-neutral-700 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 2.25-10.5 8.25L3 9" />
              </svg>
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  );
} 