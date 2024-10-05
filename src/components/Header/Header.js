import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Hi, my name is <em>Maksim</em></strong><br />
            a frontend developer
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;