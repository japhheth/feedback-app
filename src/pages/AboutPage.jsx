import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This is a react project that offers feedback on products and services
        </p>
        <p>Version: 1.1.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutUsPage;
