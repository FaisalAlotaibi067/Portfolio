import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import Particles from "./components/Particles";

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      <Particles />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-10 text-center">
        {/* Name */}
        <div>
          <h1
            className="text-6xl md:text-7xl font-extrabold select-none bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(180,200,255,0.4))",
              backdropFilter: "blur(4px)",
            }}
          >
            Faisal Alotaibi
          </h1>
        </div>

        {/* Summary */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Full-Stack Software Engineer with hands-on experience in developing
          scalable web applications and modern digital solutions. Strong
          background in backend and frontend development, API design, and
          database optimization. Passionate about building user-focused products
          and collaborating in agile teams to deliver reliable and efficient
          software.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-5">
          <a
            href="https://www.linkedin.com/in/faisal-alotaibi-442953282/"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A66C2] hover:scale-110 transition-transform"
          >
            <SiLinkedin size={26} />
          </a>
          <a
            href="https://github.com/faisalalotaibi067"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:scale-110 transition-transform"
          >
            <SiGithub size={26} />
          </a>
          <a
            href="mailto:faisalalotaibi067@gmail.com"
            className="text-[#EA4335] hover:scale-110 transition-transform"
          >
            <SiGmail size={26} />
          </a>
          <a
            href="tel:+966500375077"
            className="text-[#34A853] hover:scale-110 transition-transform"
          >
            <FaPhoneAlt size={24} />
          </a>
        </div>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Technical Skills</h3>
              <p className="text-gray-300">
                Python · Django · Django REST Framework · React · JavaScript · REST APIs · Docker · SQL ·
                HTML · CSS · AWS · Tailwind CSS · PostgreSQL · MySQL · Git/GitHub · C# · C++
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Professional Skills</h3>
              <p className="text-gray-300">
                Problem Solving · Teamwork · Communication · Time Management · Adaptability ·
                Leadership · Planning · Critical Thinking
              </p>
            </div>
          </div>

        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">Education</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">
                Buraydah Technical College (2024)
              </h3>
              <p className="text-gray-200">
                Bachelor of Technical Engineering – Applied Programming and Web
                Development Engineering
                <br />
                GPA: 4.39 (Second Honor)
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">
                SDA × GA Bootcamp (2025)
              </h3>
              <p className="text-gray-200">
                Software Engineering Bootcamp (+480 hours)
                <br />
                Full-Stack Web Development (Python, Django, React, PostgreSQL,
                Docker)
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Experience</h2>
          <p className="text-gray-200">
            <strong>Hotel Manager – OPAL Hotel (2022–2024)</strong>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              Improved overall operational efficiency and reduced costs by <strong>36%</strong> through data-driven workflow optimization.
            </li>
            <li>
              Developed internal management tools using <strong>Python</strong> to automate maintenance tracking, resource allocation.
            </li>
            <li>
              Implemented lightweight automation scripts that reduced manual errors and boosted reporting accuracy.
            </li>
            <li>
              Enhanced team coordination and productivity through real-time dashboards and simplified process management.
            </li>
          </ul>
          </p>
        </section>

        {/* Projects */}
        <h2 className="text-3xl font-bold text-blue-300 mt-12 mb-4">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
            <h3 className="text-xl font-semibold text-blue-300">
              🌿 Plant Care Tracker
            </h3>
            <p className="text-gray-200 mt-2">
              Developed a responsive full-stack plant-management web app to
              track plant care schedules and automate reminders.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
            <h3 className="text-xl font-semibold text-blue-300">
              🌍 Volunteer Website, SQL, PHP  
            </h3>
            <p className="text-gray-200 mt-2">
              A platform that gives you the opportunity to volunteer in your area of expertise.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
            <h3 className="text-xl font-semibold text-blue-300">
              💉 Donate For Blood Application, C++
            </h3>
            <p className="text-gray-200 mt-2">
              An application that enables you to search for desired blood donors or donate blood in the selected city.
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
            <h3 className="text-xl font-semibold text-blue-300">
              🤖 IOT / AI Camera, Python
            </h3>
            <p className="text-gray-200 mt-2">
              A camera that uses AI to recognize human expressions and emotions and recognize objects.
            </p>
          </div>
        </div>

        {/* Courses */}
        <section className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Courses</h2>
          <p className="text-gray-200">
            IBM – R for Data Science – Simplilearn (2025)
            <br />
            Data Science Applications in the Government Sector – Doroob (2025)
            <br />
            Cybersecurity Basics – DPT_EDU (2024)
            <br />
            Microsoft Office (2019)
            <br />
            Start Your Business  (2019)
            <br />
            Financial savings  2019
            
          </p>
        </section>

        {/* Languages */}
        <section className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-md text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Languages</h2>
          <p className="text-gray-200">Arabic – Native | English – Fluent</p>
        </section>
      </main>
      <footer className="text-center text-gray-400 pb-10 text-sm relative z-10">
        © 2025 Faisal Alotaibi · Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
