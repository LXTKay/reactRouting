import { Link } from "react-router-dom";

export default function TestProfile(){
  return (
    <>
      <p>This is a test Profile!</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
}