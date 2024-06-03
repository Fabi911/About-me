import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Board() {
  return (
    <ContainerProjectBoard>
      <Project>
        <HeadlineProject>Capstone Stranger Plants</HeadlineProject>
        <ProjectBox>
          <PreviewImage>
            <Link
              href={"https://capstone-plant-care.vercel.app/"}
              target="_blank"
            >
              <Image
                src={"/img/capstone.png"}
                alt={"test"}
                style={{
                  width: "70%",
                  height: "auto",
                }}
                width={1200}
                height={800}
              />
            </Link>
          </PreviewImage>
          <ProjectInfo>
            <h3>Description</h3>
            <p>
              An app for plant enthusiasts that supports you in your regular
              caretaking tasks. You can add, delete, and edit plants, manage
              images (including CRUD operations) and organize them into a
              gallery. The app also includes custom reminder functions for
              watering and fertilizing, along with a custom coded calendar to
              display all tasks on the correct dates.
            </p>
            <h3>Tech Stack</h3>
            <ul>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Node.js</li>
              <li>MongoDB Atlas</li>
              <li>mongoose</li>
              <li>useSWR</li>
              <li>Cloudinary</li>
              <li>styled-components</li>
              <li>NextAuth</li>
            </ul>
            <Link
              href={"https://github.com/Fabi911/Capstone_Plant_Care"}
              target="_blank"
            >
              <Image
                src={"/img/github.png"}
                alt={"github link"}
                style={{
                  width: "100px",
                  height: "auto",
                }}
                width={200}
                height={200}
              />
            </Link>
          </ProjectInfo>
        </ProjectBox>
      </Project>
    </ContainerProjectBoard>
  );
}

const ContainerProjectBoard = styled.div`
  width: 60vw;
  margin: 60px 0 60px 0;
  background-color: rgba(60, 60, 60, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;
  border-radius: 5px;
  box-shadow: 1px 2px 40px #000;
`;

const PreviewImage = styled.figure`
  width: 30%;
`;

const ProjectInfo = styled.article`
  width: 40%;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  background-color: rgba(120, 120, 120, 0.8);
  width: 80%;
  border-radius: 5px;
  box-shadow: 1px 2px 40px #000;
`;

const HeadlineProject = styled.h2`
  align-self: flex-start;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
`;
