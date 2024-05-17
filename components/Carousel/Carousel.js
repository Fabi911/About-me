import { techStack } from "@/lib/db";
import Image from "next/image";
import { Container, CarouselStyled, CarouselFace, Span } from "./carosuelClass";

export default function Carousel() {
  return (
    <Container>
      <CarouselStyled>
        {techStack.map((skill) => (
          <CarouselFace key={skill.name}>
            <Span>
              <Image
                src={skill.logo}
                alt={skill.name}
                style={{
                  width: "auto",
                  height: "4.5rem",
                }}
                width={1200}
                height={800}
              />
            </Span>
          </CarouselFace>
        ))}
      </CarouselStyled>
    </Container>
  );
}
