import { ConfigProvider, theme } from "antd";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div>
        <Homepage />
      </div>
    </ConfigProvider>
  );
}

export default App;
