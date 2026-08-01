import HeroImg from "@/assets/images/hero.webp";
import AKLogo from "@/assets/images/ak.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Engineer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Achal Kumar, a Software Engineer at{" "}
                <span className="font-bold text-white">
                  JMK Next Technologies
                </span>
                , passionate about building scalable full-stack applications
                using Next.js, TypeScript, React.js, React Native, Node.js,
                Express.js, MongoDB, and AWS.
              </p>

              <p className="text-white">
                I enjoy transforming ideas into modern, high-performance web
                applications by combining intuitive user experiences with
                reliable backend architectures. My focus is on writing clean,
                maintainable code, developing robust APIs, and delivering
                production-ready software that solves real-world problems.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    As a passionate developer and lifelong learner, I
                    continuously explore new technologies and best practices to
                    improve my craft. Whether it's full-stack web development,
                    mobile applications, or scalable backend systems, I strive
                    to build impactful digital products that create meaningful
                    experiences for users.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Achal Kumar — Software Engineer @ JMK Next Technologies
                    </cite>

                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={AKLogo}
                        alt="AK Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Full Stack Developer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
