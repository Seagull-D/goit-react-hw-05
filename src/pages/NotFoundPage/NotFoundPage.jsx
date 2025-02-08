import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const gobackURL = useRef(location?.state ?? "/");
  return (
    <div>
      <Link to={gobackURL.current}>Go Back</Link>
      <p>Not found 404 </p>;
    </div>
  );
};

export default NotFoundPage;
