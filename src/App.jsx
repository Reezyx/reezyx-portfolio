import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Skill = lazy(() => import("./pages/Skill"));
const Experience = lazy(() => import("./pages/Experience"));
const Certification = lazy(() => import("./pages/Certification"));

function LoadingState() {
  return <div className="loading-state" role="status"><span />Loading portfolio</div>;
}

function App() {
  return <BrowserRouter><Suspense fallback={<LoadingState />}><Routes><Route element={<Layout />}><Route path="/" element={<Home />} /><Route path="/project" element={<Project />} /><Route path="/skill" element={<Skill />} /><Route path="/experience" element={<Experience />} /><Route path="/certification" element={<Certification />} /></Route></Routes></Suspense></BrowserRouter>;
}

export default App;
