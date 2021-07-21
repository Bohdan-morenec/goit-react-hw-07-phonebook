import "./App.css";
import FormContact from "./component/FormContact";
import ContactsFilter from "./component/ContactsFilter";
import ContactList from "./component/ContactList";
import { connect } from "react-redux";
import { logger } from "./redux/contacts/contact-selectors";
import styles from "./App.module.scss";

const App = ({ logger }) => {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Phonebook</h1>
      <FormContact />
      <div>
        <h2 className={styles.title}>contacts</h2>
        <ContactsFilter />
        <ContactList />
        {logger && <h1 className={styles.preloader}>Загрузк...</h1>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  logger: logger(state),
});

export default connect(mapStateToProps)(App);
