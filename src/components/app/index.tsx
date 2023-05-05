// libraries
import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';

// components
import Home from "../home";
import Header from "../layout/header";
import Page404 from "../layout/page404";
import Instructions from "../instructions";
import Footer from "../layout/footer";

// methods / hooks / styles
import styles from "./app.module.css";

library.add(fas);

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Header />
      <Suspense fallback={<div className={styles.loadingScreen}>Loading...</div>}>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
