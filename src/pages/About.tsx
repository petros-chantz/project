import { Copyright } from "../components/Copyright";
import { Exit } from "../components/Exit";
import { Icons } from "../data/Icons";

export const About = () => {
  return (
    <section className="flex flex-col p-5 md:p-10">
      <Exit />
      <div className="flex flex-col self-center gap-20 py-20 md:w-2/3 desktop:w-2/4">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="self-center w-2/3 lg:w-1/3">
            <img src="assets/profile-photo.jpg" alt="petros" />
          </div>
          <div className="flex flex-col justify-start gap-5 md:justify-between">
            <div className="flex flex-col gap-5">
              <p className="about--name">Petros Chantzopoulos</p>
              <p className="font-medium">Interaction & Product Designer</p>
              <p className="">
                <span className="block">BSc. & MSc. Industrial Design</span>
                <span className="block">
                  {" "}
                  Technical University of Eindhoven, TU/e
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-xl">
                petros.chantzopoulos [at] gmail [dot] com
              </p>
              <p className="">+31 6513 two 14 nine 0</p>
              <div className="flex flex-row ">
                <div className="flex flex-row gap-5">
                  {Icons.map((icon: any, index: number) => {
                    return (
                      <a
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={`item-${index}`}
                        aria-label="social media links"
                      >
                        {icon.img}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:pt-24">
          <p className="about--subtitle">
            I’m interested in the connection between the physical & the digital
            world.
          </p>
          <p className="leading-10">
            I research, explore, prototype and develop new modalities of
            interactions. I love translating (often) abstract and ambiguous
            user/stakeholder needs and wishes into detailed interaction
            requirements for tech teams. I thrive in multidisciplinary teams and
            enjoy working in diverse projects and domains.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="about--subtitle">"Show me, don't tell me" mindset.</p>
          <p className="leading-10">
            Experiences are always felt, never described. Designing meaningful
            interactions is an act of doing, not an act of “gut feelings”. In my
            work, experience and interaction take central role in informing my
            design process and the design decisions I make. I don't design
            things for myself, thus testing soon and often with real people is
            my modus operandi.
          </p>
        </div>
      </div>
      <Copyright />
    </section>
  );
};

export default About;
