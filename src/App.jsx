import { useState, useEffect } from "react";

const useEffectComponent = () => {
  useEffect(() => {
    return () => {
      console.log("Компонент был удален со страницы")
    }
  }, []);

  return (
    <div>
      Тестовый компонент для проверки удаления компонента со страницы
    </div>
  )
}

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [skills, setSkills] = useState(['Front-End', 'Back-End', 'CI/CD']);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [a, setA] = useState(0);
  useEffect(() => {
    console.log("Произошел первый рендер")
  }, [count, form]);

  const onChangeHandle = (event) => {
    setName(event.target.value);
    setCount(event.target.value.length);
  }

  const onSubmitAddSkill = (event) => {
    console.log(event);
    if(event.keyCode === 13) {
      setSkills((prevState) => {
        return [...prevState, event.target.value];
      });
    }
  }

  const onChangeFormHandle = (e) => {
    setForm((prevState) => {
      prevState = {...prevState}
      prevState[e.target.name] = e.target.value;
      return prevState;
    })
  }

  return (
    <div>
      <p>Вы нажали на меня {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>

      {
        count >= 10 ? <h1>компонент больше недоступен</h1> : <useEffectComponent />
      }
      <br />
      <h1>Привет, {name}!</h1>
      <input type="text" onChange={(event) => onChangeHandle(event)}/>
      <br />
      <input type="text" onKeyDown={(e) => onSubmitAddSkill(e)}/>
      <ul>
        {
          skills.map((skill) => <li>{skill}</li>)
        }
      </ul>
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <input type="email" name="email" 
        onChange={(e) => onChangeFormHandle(e)}
        value={form.email}/>
        <label>Password:</label>
        <input type="password" name="password" 
        onChange={(e) => onChangeFormHandle(e)}
        value={form.password}/>
        <button type="submit">Отправить форму</button>
      </form>
    </div>
  );
}

export default App