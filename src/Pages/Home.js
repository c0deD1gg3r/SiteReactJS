import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 style={{ color: '#5c62ec' }} className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, HTML, SASS, CSS, NPM, BootStrap, Yarn</p>
            </li>
            <li className="content-list__item">
              <h2 style={{ color: '#5c62ec' }} className="title-2">Backend</h2>
              <p>It'll be here soon</p>
            </li>
          </ul>

        </div>
      </main>
    </>
  );
};

export default Home;