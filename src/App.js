import React from "react";
import "./styles.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Layout>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
