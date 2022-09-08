import React, { lazy, Suspense } from "react";
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
const CounterPage = lazy(() => import("./pages/CounterPage"));
const TaskPage = lazy(() => import("./pages/UserPage"));
const UserPage = lazy(() => import("./pages/TaskPage"));

function App(props) {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/todo">todo</NavLink>
        </li>
        <li>
          <NavLink to="/counter">counter</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/todo" element={<TaskPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

/*
store - общее хранилище js object
reducer - чистая функция (state,action)=> newState
dispatch - функция-передавальщик action 
action - object {type:''}
connect - HOC, которая подмешивает store
mapStateToProps - функция которая откусывает нужное состояние
Provider - компонент, который делится сторой
*/
