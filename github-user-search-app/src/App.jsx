import "./App.css";
import { client } from "./apollo-client/client";
import { ApolloProvider } from "@apollo/client";
import UserCard from "./components/UserCard";

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <header>
          <h1 className="title">devfinder</h1>
          <button>
            Light
            <img src="../assets/icon-sun.svg" alt="" />
          </button>
        </header>
        <form action="">
          <img src="../assets/icon-search.svg" alt="" />
          <input
            type="search"
            name="github-search"
            placeholder="Search GitHub username"
            id=""
          />
          <button>Search</button>
        </form>
        <UserCard />
      </main>
    </ApolloProvider>
  );
}

export default App;
