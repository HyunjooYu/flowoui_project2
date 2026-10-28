
import styles from "./page.module.css";
import DropDownComponent from "./components/DropDown";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <div>
      <DropDownComponent />
      <ProgressBar />
    </div>
  );
}
