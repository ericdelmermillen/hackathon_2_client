import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
    const [level, setLevel] = useState("");
   

    const setLevelHandler = (level) => {
        setLevel(level);
        console.log(level);
    }

    return (
        <div>
            <h2>It’s Not What You Say… </h2>
            <h2>It’s how you say it</h2>
            <h3>Choose your level</h3>
            <div>
                <Link onClick={() => setLevelHandler("easy")}>Easy</Link>
                <Link onClick={() => setLevelHandler("medium")}>Medium</Link>
                <Link onClick={() => setLevelHandler("hard")}>Hard</Link>
            </div>
            <Button text={"Ready!"} path={`/${level}`} />
        </div>
    );
};

export default Home;