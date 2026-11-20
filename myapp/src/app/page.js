import DropDownComponent from "./components/ui/DropDown";
import ProgressBar from "./components/ui/ProgressBar";
import Table from "./components/ui/Table";
import InputForm from "./components/ui/InputForm.jsx";
import Button from "./components/ui/Button.jsx";
import NavBar from "./components/ui/NavBar";
import TopNavBar from "./components/ui/TopNavBar";
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
