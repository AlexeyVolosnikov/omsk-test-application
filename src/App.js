import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Informational from './Informational/Informational';
import ConsultForm from "./ConsultForm/ConsultForm";
import axios from 'axios';
import $ from "jquery";
import './App.css';
import store from "./store/index";
import {Provider} from "react-redux";

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    'X-Requested-With': 'XMLHttpRequest'
  }
};

function App(props) {
  const submitConsult = props => {
    props.preventDefault()
    let data = {}
    data.message = props.message;
    data.email = props.email;
    if (props.phone !== undefined) {
      data.phone = props.phone;
    }
    console.log("Sendning data", data)
    $.ajax({
      type: "POST",
      url : 'http://localhost/omsk-test-application/server/send.php',
      data : JSON.stringify(data),
      "async": true,
      "crossDomain": true,
      "headers": {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json"
      }
    }, function(data) {
      alert("Успешно!", data)
    })

  }
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Informational />
            <ConsultForm onSubmit={submitConsult} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
