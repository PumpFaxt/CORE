import { Route, Router as PreactRouter } from "preact-iso";
import _404 from "./pages/_404.tsx";
import Login from "./pages/login/page.tsx";

export default function Router() {
  return (
    <PreactRouter>
      <Route path="discover" component={_404} />
      <Route path="login" component={Login} />

      <Route default component={_404} />
    </PreactRouter>
  );
}
