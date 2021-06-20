import "./App.css";
import React from "react";
import Rows2 from "./components/Rows2";

function App() {
  return (
    <div className="App">
      {/* <html style={{background: "red"}}> */}
      <header className="App-header"></header>
      <body className="App-body">
        <h1>COVID-19 SLA test Calculator</h1>
        {/* <h1>COVID-19 Special Leave Accrual Calculator</h1> */}
        <button className="button" type="reset">
          Reset
        </button>
        <form className="fb-container">
          <table>
            <tr>
              <th colspan="2">SLA start/carryover</th>
              {/* <th colspan="2">Yearly SLA start/carryover</th> */}
            </tr>
            <tr>
              <th id="heads">SLA start</th>
              {/* <th id="heads">COVID-19 SLA start</th> */}
              <th id="heads">FY21 (1 Oct 2020)</th>
            </tr>
            <tr>
              {/* <td>Total leave days</td> */}
              <td>Total days</td>
              <td>
                <input type="number" id="inp1" required min="60" max="120" />
              </td>
            </tr>
            <tr>
              <td>Used</td>
              {/* <td>Leave used during year</td> */}
              <td>58</td>
            </tr>
            <tr>
              <td id="badstuff">Use/Lose</td>
              <td id="badstuff">15</td>
            </tr>
            <tr>
              <th id="heads">Adjusted SLA</th>
              <th id="heads">FY22 (1 Oct 2021)</th>
            </tr>
            <tr>
              <td>Total leave days</td>
              <td>63.5</td>
            </tr>
            <tr>
              <td>Leave used during year</td>
              <td>58</td>
            </tr>
            <tr>
              <td id="badstuff">Use/Lose</td>
              <td id="badstuff">15</td>
            </tr>
            <tr>
              <th id="heads">Adjusted SLA</th>
              <th id="heads">FY23 (1 Oct 2022)</th>
            </tr>
            <tr>
              <td>Total leave days</td>
              <td>63.5</td>
            </tr>
            <tr>
              <td>Leave used during year</td>
              <td>58</td>
            </tr>
            <tr>
              <td id="badstuff">Use/Lose</td>
              <td id="badstuff">15</td>
            </tr>
            <tr>
              <th id="heads">End COVID SLA</th>
              <th id="heads">FY24 (1 Oct 2023)</th>
            </tr>
            <tr>
              <td>Total leave days</td>
              <td>63.5</td>
            </tr>
          </table>

          <table>
            <thead>
              <tr>
                <th colspan="4">
                  Leave taken<br></br>
                  {/* <div style={{ fontSize: "1rem", color: "grey" }}>
                    (Enter on last day of leave month)
                  </div> */}
                </th>
              </tr>
            </thead>
            <tr>
              <th></th>
              <th id="heads">FY2021</th>
              <th id="heads">FY2022</th>
              <th id="heads">FY2023</th>
            </tr>
            <tr>
              <td id="mth">Oct</td>
              <td id="inptd">
                <input type="number" id="inp1"></input>
              </td>
              <td id="inptd">
                <input type="number" id="inp1"></input>
              </td>
              <td id="inptd">
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Nov</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Dec</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Jan</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Feb</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Mar</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Apr</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">May</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Jun</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Jul</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Aug</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            <tr>
              <td id="mth">Sep</td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
              <td>
                <input type="number" id="inp1"></input>
              </td>
            </tr>
            {/* </tbody> */}
          </table>
          {/* new table */}
          <table id="balance">
            <thead>
              <tr>
                <th colspan="3">
                  Balance<br></br>
                  {/* Leave accrual/balance<br></br> */}
                  <div style={{ fontSize: "1rem", color: "grey" }}> </div>
                </th>
              </tr>
            </thead>
            <tr>
              <th id="heads">FY2021</th>
              <th id="heads">FY2022</th>
              <th id="heads">FY2023</th>
            </tr>
            <Rows2 start="balance" />
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
          </table>
        </form>
        <script>
          {/* const remdetails = document.querySelector("h1"); remdetails.remove() */}
        </script>
      </body>
    </div>
  );
}

export default App;
