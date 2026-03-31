// ─────────────────────────────────────────────────────────────────────────────
//  ROUTER — App.jsx
//  To add a new page:
//    1. Create src/pages/MyPage.jsx  (duplicate any existing page)
//    2. import MyPage from "./pages/MyPage"
//    3. Add  <Route path="/my-page" element={<MyPage />} />  below
// ─────────────────────────────────────────────────────────────────────────────

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// ── Pages ─────────────────────────────────────
import Home          from "./pages/Home";
import Portfolio     from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import About         from "./pages/About";
import Contact       from "./pages/Contact";
import Design        from "./pages/Design";
import NotFound      from "./pages/NotFound";

// ── ADD NEW PAGES HERE ↓ ──────────────────────
// import MyPage from "./pages/MyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Core routes */}
          <Route path="/"                     element={<Home />} />
          <Route path="/portfolio"            element={<Portfolio />} />
          <Route path="/projects/:slug"       element={<ProjectDetail />} />
          <Route path="/about"                element={<About />} />
          <Route path="/contact"              element={<Contact />} />
          <Route path="/design"               element={<Design />} />

          {/* ── ADD NEW ROUTES HERE ↓ ──────────── */}
          {/* <Route path="/my-page" element={<MyPage />} /> */}

          {/* Catch-all */}
          <Route path="*"                     element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
