import { Header } from "./components/Header/Header";
import { UserInfoProvider } from "./contexts/UserInfoProvider";
import { Body } from "./components/Body/Body";
import { ProductProvider } from "./contexts/ProductProvider";
import { ApiProvider } from "./contexts/ApiProvider";

export const App = () => {
  return (
    <>
      <ApiProvider>
        <ProductProvider>
          <UserInfoProvider>
            <Header />
            <Body />
          </UserInfoProvider>
        </ProductProvider>
      </ApiProvider>
    </>
  );
};
