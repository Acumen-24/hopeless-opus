import { styled } from "styled-components";
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 5rem 0;
  background-color: #1a1a1d;
  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`;

const DivScrolling = styled.div`
  overflow-x: hidden;
`;

const Div = styled.div`
  margin-top: 10rem;
  margin-left: 50%;
  margin-bottom: 10rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 760px) {
    margin-left: 1rem;
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    height: fit-content;
    overflow: hidden;
  }
`;

const DivEventCard = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem; /* Reduced width */
  height: 25rem; /* Reduced height */
  background: linear-gradient(
    159.14deg,
    rgba(1, 1, 1, 0.9) -6.84%,
    rgba(33, 33, 33, 0.7) 118.48%
  );
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  padding: 1.5rem; /* Adjusted padding */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 760px) {
    width: 90%;
    height: auto;
    padding: 1.5rem;
  }
`;

const EventCardTitle = styled.div`
  font-size: 2rem; /* Adjusted font size */
  font-weight: 700;
  color: #fff;
  @media (max-width: 760px) {
    font-size: 1.6rem; /* Adjusted font size */
  }
`;

const EventCardBody = styled.div`
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 400;
  color: #cfcfcf;
  margin-top: 1rem;
  padding-top: 1rem; /* Adjusted padding */
  border-top: solid 0.1rem rgba(255, 255, 255, 0.1);
  @media (max-width: 760px) {
    font-size: 1.2rem;
  }
`;

const EventCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  height: 5rem;
`;

const CardSlider = React.forwardRef(
  ({ onIntersection = () => {} }, forwardedRef) => {
    const [ref, inView] = useInView({
      onChange: (inView) => {
        if (inView) {
          onIntersection();
        }
      },
    });

    const horizontalScrollingSection = useRef(null);

    // GSAP initialization
    useGSAP(() => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 760px)", () => {
        let eventCards = gsap.utils.toArray(".eventCard");
        gsap.to(eventCards, {
          xPercent: -110 * eventCards.length,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: horizontalScrollingSection.current,
            pin: true,
            scrub: 0.5,
            end: () => "+=" + horizontalScrollingSection.current.offsetWidth,
          },
        });
      });

      const refreshScrollTrigger = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", refreshScrollTrigger);

      return () => {
        window.removeEventListener("resize", refreshScrollTrigger);
      };
    });

    const [events, setEvents] = useState([
      {
        ID: 100,
        Name: "Codalympics",
        ShortDesc:
          "Coding challenges in debugging, algorithm development, and relay coding.",
      },
      {
        ID: 200,
        Name: "NeuralClash",
        ShortDesc: "An exciting image classification competition.",
      },
      {
        ID: 300,
        Name: "Neural Dreams",
        ShortDesc:
          "Workshop on neural networks and style transfer for artistic expression.",
      },
      {
        ID: 400,
        Name: "DreamForge",
        ShortDesc:
          "Web development competition to build innovative dream-inspired apps.",
      },
      {
        ID: 500,
        Name: "DevForge",
        ShortDesc:
          "API development workshop to unlock backend development skills.",
      },
      {
        ID: 600,
        Name: "VoltVoyage",
        ShortDesc:
          "Hackathon exploring the realms of electronics and circuit crafting.",
      },
      {
        ID: 700,
        Name: "Commsync",
        ShortDesc: "Workshop on antenna-based communication.",
      },
      {
        ID: 800,
        Name: "Questscape",
        ShortDesc: "A three-round technical treasure hunt.",
      },
    ]);

    return (
      <Section id="event">
        <div ref={forwardedRef}>
          <DivScrolling ref={horizontalScrollingSection}>
            <Div ref={ref}>
              {events.map((event) => (
                <DivEventCard key={event.ID} className="eventCard">
                  <EventCardTitle>{event.Name}</EventCardTitle>
                  <EventCardBody>{event.ShortDesc}</EventCardBody>
                  <EventCardFooter>
                    {/* Removed the ExpandEventButton and link icon */}
                  </EventCardFooter>
                </DivEventCard>
              ))}
            </Div>
          </DivScrolling>
        </div>
      </Section>
    );
  }
);

CardSlider.displayName = "CardSlider";

export default CardSlider;
