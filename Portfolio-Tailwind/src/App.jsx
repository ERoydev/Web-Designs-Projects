import { Hero, About, Projects, Experience, Approach, Education, Footer } from "./sections/index";
import Nav from "./components/Nav";
import TopButton from "./sections/TopButton";

export default function App() {
  return (
    <main className="relative bg-color-gradient">

      <section>
        <Nav />
      </section>
      
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

      {/* <section className="padding">
        <Education />
      </section> */}

      <section className="sm:px-16 px-8 xl:pt-52 md:pt-24 pt-12 pb-12">
        <Footer />
      </section>

      <section>
        <TopButton />
      </section>

    </main>
  )
}