import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
      <br />
      <span>Updated at {props.bpi.time.updated}</span>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  /*
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log("Error", err));
*/
  return {
    bpi: data,
  };
};

export default Index;
