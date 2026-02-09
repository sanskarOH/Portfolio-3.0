import Hero from "./sections/Hero";
import Layout from "./layout/Layout";
import Aboutme from "./sections/Aboutme";
function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Aboutme />
      </Layout>
    </>
  );
}

export default App;
