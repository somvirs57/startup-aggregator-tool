import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/signUpPage";
import Signin from "./pages/auth/signInPage";
import Articles from "./pages/learing/articles";
import ArticleDetail from "./pages/learing/articles/article-detail";
import Guides from "./pages/learing/guides";
import GuidesDetail from "./pages/learing/guides/detail";
import Templates from "./pages/learing/templates";
import TemplatesDetail from "./pages/learing/templates/detail";
import Tools from "./pages/learing/tools";
import ToolsDetail from "./pages/learing/tools/detail";
import Blogs from "./pages/learing/blogs";
import BlogsDetail from "./pages/learing/blogs/detail";
import CommunityActivity from "./pages/learing/community";
import CommunityQuestions from "./pages/learing/community/questions";
import Faq from "./pages/learing/faq";
import Mentor from "./pages/mentor";
import Investor from "./pages/Investor";
import Forum from "./pages/Forum";
import Educate from "./pages/Educate";
import Learing from "./pages/learing";
import Dashboard from "./pages/dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signin />}></Route>
      <Route path="/learing" element={<Learing />}></Route>
      <Route path="/learing/articles" element={<Articles />}></Route>
      <Route path="/learing/articles/:title" element={<ArticleDetail />} />
      <Route path="/learing/guides" element={<Guides />} />
      <Route path="/learing/guides/:title" element={<GuidesDetail />} />
      <Route path="/learing/templates" element={<Templates />} />
      <Route path="/learing/templates/:title" element={<TemplatesDetail />} />
      <Route path="/learing/tools" element={<Tools />} />
      <Route path="/learing/tools/:title" element={<ToolsDetail />} />
      <Route path="/learing/blogs" element={<Blogs />} />
      <Route path="/learing/blogs/:title" element={<BlogsDetail />} />
      <Route path="/learing/community" element={<CommunityActivity />} />
      <Route path="/learing/community/questions/:title" element={<CommunityQuestions />} />
      <Route path="/learing/faqs" element={<Faq />} />

      <Route path="/mentor" element={<Mentor />} />
      <Route path="/investor" element={<Investor />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/educate" element={<Educate />} />
      <Route path="/dashboard" element={<Dashboard />} />




    </Routes>
  </BrowserRouter>
);
