import { NavLink } from "react-router-dom";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p style={{ color: 'lightblue' }}>Sterlitamak, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <NavLink to='https://t.me/cdd13r'>@cdd13r </NavLink>
              /
              <NavLink to='https://web.whatsapp.com'> +7 987 046 9775</NavLink>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><NavLink to='https://e.mail.ru/inbox'>maks.skurlygin@mail.ru</NavLink></p>
          </li>
        </ul>

      </div>
    </main>
  );
};

export default Contacts;