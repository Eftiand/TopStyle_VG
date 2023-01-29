import { Header } from "./components/Header/Header";
import { UserInfoProvider } from "./contexts/UserInfoProvider";

export const App = () => {
  return (
    <>
      <UserInfoProvider>
        <Header/>
      </UserInfoProvider>
    </>
  );
};
