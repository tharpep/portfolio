import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Pryce Tharpe",
  description: "About Pryce Tharpe: Computer Engineering student and software developer.",
};

// DEV PORTFOLIO ABOUT PAGE
// This is the professional about page for the development portfolio
// Keep separate from photography about page at /photography/about

export default function About() {
  return (
    <main id="main" className="bg-neutral-900 text-neutral-100 px-4 sm:px-8 md:px-16 lg:px-32 py-12 min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold font-mono tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h1>
        <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
          Computer Engineering student and software developer passionate about 
          <span className="text-cyan-400 font-semibold"> thoughtful software design</span> and 
          <span className="text-blue-400 font-semibold"> practical problem-solving</span>.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-cyan-400 mb-1">4+</div>
          <div className="text-neutral-300 text-sm">Years Programming</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700">
          <div className="text-2xl font-bold text-emerald-400 mb-1">7+</div>
          <div className="text-neutral-300 text-sm">Projects Completed</div>
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
              I am a senior in Computer Engineering at Purdue University, where I have focused on software systems and building tools that make an impact. My journey has taken me from hands-on embedded systems coursework to cloud and AI engineering in industry. This mix has given me a perspective that combines low-level technical depth with high-level systems thinking.
            </p>
            <p>
              Through internships and projects, I have learned how to bridge academic rigor with practical software development. I have collaborated across teams, automated complex workflows, and explored emerging technologies. As I look ahead, I am driven to keep learning and contributing in environments where thoughtful design and scalable software meet real-world challenges.
            </p>
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
                {["Python", "C", "C++", "JavaScript", "TypeScript", "C#", "SQL", "Assembly"].map(tech => (
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
                {["Microsoft Azure", "Azure Data Factory", "Azure DevOps", "Microsoft Fabric", "Container Apps", "CI/CD", "GitHub Actions"].map(tech => (
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
                {["React", "Next.js", "Node.js", "RESTAPI", "Git/GitHub", "VSCode", "Linux", "Prompt Engineering", "AI Agents"].map(tech => (
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
                {["STM32", "USRP", "I2C", "SPI", "DMA", "DAC", "Circuit Design", "KiCAD"].map(tech => (
                  <span key={tech} className="px-3 py-1 text-sm font-medium bg-purple-900/30 text-purple-300 rounded-md border border-purple-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold font-mono tracking-wider text-cyan-300 mb-6">
            Beyond Code
          </h2>
          <div className="rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 p-6">
            <p className="text-neutral-300 leading-relaxed mb-4">
              When I&apos;m not coding, you&apos;ll find me exploring the intersection of technology and creativity. I&apos;m passionate about photography, and I&apos;m currently extending this site to showcase my work. I also enjoy building custom PCs and playing guitar and bass. These pursuits sharpen my attention to detail while giving me space to create in different ways.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              I believe that experiences outside of engineering make me a stronger problem solver and collaborator. Every perspective adds value to the development process.
            </p>
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
              href="https://www.linkedin.com/in/pryce-tharpe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-neutral-700 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </section>


      </div>
    </main>
  );
} 