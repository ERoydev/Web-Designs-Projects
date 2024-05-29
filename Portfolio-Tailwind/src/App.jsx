import { Hero, About, Projects, Experience, Approach, Education, Footer } from "./sections/index";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative bg-primary">
      <Nav />
      <section className="xl:padding-1 padding-b">
        <Hero />
      </section>

      <section className="padding bg-electric-blue">
        <About />
      </section>

      <section className="padding">
        <Projects />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Experience />
      </section>

      <section className="padding">
        <Approach />
      </section>

      <section className="padding">
        <Education />
      </section>

      <section className="padding">
        <Footer />
      </section>

    </main>
  )
}