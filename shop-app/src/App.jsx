import { Header } from "./components/Header/Header";
import { ApiProvider } from "./contexts/ApiProvider";
import { UserInfoProvider } from "./contexts/UserInfoProvider";
import { Body } from "./components/Body/Body";

export const App = () => {
  return (
    <>
      <ApiProvider>
        <UserInfoProvider>
          <Header />
          <Body />
        </UserInfoProvider>
      </ApiProvider>
    </>
  );
};
