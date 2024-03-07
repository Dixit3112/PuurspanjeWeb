// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./common/header";
// import Home from "./componets/home";
// import MainActivity from "./componets/activiteiten";
// import BlogPostPg from "./componets/blogPostPage";
// import BlogingPage from "./componets/blogpg";
// import MainContact from "./componets/contact";
// import RegioOverVeiw from "./componets/regioOverveiwPg";
// import ProvinceOverVu from "./componets/provinceOverveiwPg";
// import RegioDetails from "./componets/regioDetailpg";
// import MainGolfPage from "./componets/lasGolf";
// import MainSporten from "./componets/sportenpg";
// import Footer from "./common/footer";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route index element={<Home />}></Route>
//           <Route path="activiteiten" element={<MainActivity />}></Route>
//           <Route path="blog-post-page" element={<BlogPostPg />}></Route>
//           <Route path="bloging" element={<BlogingPage />}></Route>
//           <Route path="contact" element={<MainContact />}></Route>
//           <Route path="regio-overveiw" element={<RegioOverVeiw />}></Route>
//           <Route path="province-overveiw" element={<ProvinceOverVu />}></Route>
//           <Route path="ragio_deTails" element={<RegioDetails />}></Route>
//           <Route path="sporten" element={<MainSporten />}></Route>
//           <Route path="golf-playing-ground" element={<MainGolfPage />}></Route>
//           <Route index element={<Footer />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { RouterProvider } from "react-router-dom";
import router from "./routes/home";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;