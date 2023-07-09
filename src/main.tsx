import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blossom from "./pages/Blossom.tsx";
import Header from "./components/Header.tsx";

const pagesData = [
  {
    name: "Blossom Ozurumba",
    href: "/",
    component: "Blossom",
    linkedin: "https://www.linkedin.com/in/blossomozurumba",
    email: "Blossom.Ozurumba@nnpcgroup.com",
    phone: "+2348033413213",
  },
  {
    name: "Muniru Mai",
    href: "/Muniru",
    component: "Muniru",
    linkedin: "https://www.linkedin.com/in/muniru-mai-68691319",
    email: "Muniru.Mai@nnpcgroup.com",
    phone: "+2348033499226",
  },
  {
    text: "Rasheed O. Ojulari",
    href: "/Rasheed",
    component: "Rasheed",
    linkedin: "https://www.linkedin.com/in/olushola-ojulari-9a669a135",
    email: "Olushola.Ojulari@nnpcgroup.com",
    phone: "+2347034008095",
  },
  {
    text: "Olatomiwa James",
    href: "/Olatomiwa",
    component: "Olatomiwa",
    linkedin: "https://www.linkedin.com/in/olatomiwa-james-1644a430",
    email: "Olaniyi.Olatomiwa@nnpcgroup.com",
    phone: "+2348038745696",
  },
  {
    text: "Mudi Abubakar",
    href: "/Mudi",
    component: "Mudi",
    linkedin: "",
    email: "Abubakar.Mudi@nnpcgroup.com",
    phone: "+2348131760592",
  },
  {
    text: "Gesiyi T. Amakoromo",
    href: "/Gesiyi",
    component: "Gesiyi",
    linkedin: "https://www.linkedin.com/in/gesiyi-amakoromo-a4a01b21",
    email: "Gesiyi.Amakoromo@nnpcgroup.com",
    phone: "+2348033365663",
  },
  {
    text: "Sadiq Ahmad",
    href: "/Sadiq",
    component: "Sadiq",
    linkedin: "https://www.linkedin.com/in/sadiq-salihijo-ahmad-7a334010a",
    email: "Sadiq.Ahmad@nnpcgroup.com",
    phone: "+2348079185822",
  },
  {
    text: "Emmanuel Okwudili ",
    href: "/Emmanuel",
    component: "Emmanuel",
    linkedin: "https://www.linkedin.com/in/emmanuel-o-8979b71a0",
    email: "Emmanuel.Okwudili@nnpcgroup.com",
    phone: "+2347060500646",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      {pagesData.map(({ text, href }, index) => (
        <Route path={href} element={<Blossom name={text} />} key={index} />
      ))}
    </Routes>
  </BrowserRouter>
);
