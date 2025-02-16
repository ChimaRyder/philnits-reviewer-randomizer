import {useEffect, useState} from 'react'
import './App.css'
import random from 'random'

function App() {
    const [year, setYear] = useState("2024");
    const [month, setMonth] = useState("Oct");
    const [set, setSet] = useState("AM");
    const [question, setQuestion] = useState("1");
    const [link, setLink] = useState("2024Oct_FE_AM_Questions.pdf");

    useEffect(() => {
       setLink(`${year}${month}_FE_${set}_Questions.pdf`)
    }, [year, month, set]);

    const setRandom = () => {
        let randYear = random.int(2007, 2024).toString()
        setYear(randYear)
        document.getElementById("year").value = randYear;

        let randMonth = random.choice(["Oct", "Apr"])
        setMonth(randMonth)
        document.getElementById("month").value = randMonth;

        let randSet = random.choice(["AM", "PM"])
        setSet(randSet)
        document.getElementById("set").value = randSet;


        let randQuestion = random.int(1, 60)
        setQuestion(randQuestion.toString())
        document.getElementById("question").value = randQuestion;
    }

  return (
  <div>
      <h2>PhilNITS Reviewer Randomizer</h2>
      <form method={"post"} target="_blank" action={`/pdf/${link}#search=Q${question}`}>
          <select name="year" id="year" onChange={e => setYear(e.target.value)}>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024" selected>2024</option>
          </select>

          <select name="month" id="month" onChange={e => setMonth(e.target.value)}>
              <option value="Oct" selected>October</option>
              <option value="Apr">April</option>
          </select>

          <select name="set" id="set" onChange={e => setSet(e.target.value)}>
              <option value="AM" selected>AM</option>
              <option value="PM">PM</option>
          </select>

          {/*<input name={"question"} id={"question"} type="number" max={60} min={1} defaultValue={"1"} onChange={e => setQuestion(e.target.value)}/>*/}

          <br/>
          <button type={"button"} onClick={setRandom}>Randomize</button>
          <button type={"submit"}>Open Reviewer</button>
      </form>
  </div>
  )
}

export default App
