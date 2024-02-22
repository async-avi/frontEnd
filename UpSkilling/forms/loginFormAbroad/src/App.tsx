import LoginPage from "./components/LoginPage";
import { login } from "./atoms/atom";
import { useRecoilValue, useRecoilState } from "recoil";

export default function App() {
  const LoginValue = useRecoilValue(login);
  return <>{LoginValue ? <LoginPage /> : <DefaultScreen />}</>;
}

function DefaultScreen() {
  const [loginValue, setLogin] = useRecoilState(login);
  return (
    <div className="w-screen h-screen flex justify-center items-center text-white">
      <button
        className="bg-blue-500 px-4 py-2 rounded-lg mx-2"
        onClick={() => setLogin(!loginValue)}
      >
        Login
      </button>
      <button className="bg-blue-500 px-4 py-2 rounded-lg">Signup</button>
    </div>
  );
}
