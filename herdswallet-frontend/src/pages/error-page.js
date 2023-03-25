import '../styles/landing.scss';
import { useRouteError } from "react-router-dom";
import {Helmet} from "react-helmet";
import BrandNavbar from "../components/navbar.js"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <BrandNavbar/>
      <Helmet> <title>Herds Wallet | Error</title> </Helmet>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} | {error.statusText || error.message}</i>
      </p>
    </div>
  );
}