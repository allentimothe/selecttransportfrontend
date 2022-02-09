import Header1 from "./components/Header/Header1";
import Footer from "./components/Footer/Footer";
import './App.css';

useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      setState((prevState) => ({
        ...prevState,
        user,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        user: null,
      }));
    }
  });
  async function getContacts() {
    const contact = await fetchReviews();
    setContactsState({ contact });
  }
  getContacts();
}, []);

async function handleAdd(formInputs) {
  try {
    const contact = await createContact(formInputs);
    setContactState({ contact });
  } catch (error) {
    console.log(error);
  }
}

async function handleDelete(reviewId) {
  try {
    const contact = await deleteContact(reviewId);
    setContactState({ contact });
  } catch (error) {
    console.log(error);
  }
}

async function handleUpdate(formInputs) {
  try {
    const contact = await updateContact(formInputs);
    setContactState({ contact });
  } catch (error) {
    console.log(error);
  }
}
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header user={state.user} />

        <main>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
