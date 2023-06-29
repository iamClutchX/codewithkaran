import { FaNode, FaReact, FaAws, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { DiMongodb, DiCss3, DiJavascript1 } from 'react-icons/di';
import { SiExpress, SiMongoose, SiHtml5, SiLinux, SiCss3, } from 'react-icons/si';

const skillsData = [
  { id: 1, name: "Mongo DB", Icon: DiMongodb },
  { id: 2, name: "CSS", Icon: DiCss3 },
  { id: 4, name: "Node JS", Icon: FaNode },
  { id: 5, name: "React", Icon: FaReact },
  { id: 6, name: "REST", Icon: SiCss3 },
  { id: 7, name: "Express OS", Icon: SiExpress },
  { id: 8, name: "JavaScript", Icon: DiJavascript1 },
  { id: 10, name: "Git", Icon: FaGitAlt },
  { id: 11, name: "HTTP", Icon: SiCss3 },  // Couldn't find a specific HTTP icon
  { id: 12, name: "AWS", Icon: FaAws },
  { id: 13, name: "HTML", Icon: SiHtml5 },
  { id: 14, name: "Linux", Icon: SiLinux },
];

export default skillsData;
