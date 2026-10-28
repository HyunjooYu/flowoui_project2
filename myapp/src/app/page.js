import DropDownComponent from "./components/DropDown";
import ProgressBar from "./components/ProgressBar";
import Table from "./components/Table";
import InputForm from "./components/InputForm.jsx";
import Button from "./components/Button.jsx";
import NavBar from "./components/NavBar";
import TopNavBar from "./components/TopNavBar";
export default function Home() {
  return (
    <div>
      <DropDownComponent />
      <ProgressBar />
      <InputForm />
      <Button />
      <Table />
      <TopNavBar />
      <NavBar />
    </div>
  );
}
