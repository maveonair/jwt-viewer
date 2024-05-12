import { useState } from "react";
import Decoded from "./Decoded";
import Encoded from "./Encoded";

const exampleToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default function App() {
  const [token, setToken] = useState<string | null>(exampleToken);

  return (
    <div className="dark:bg-dark">
      <div className="container p-5 mx-auto h-screen">
        <div className="flex gap-2 items-center mb-3">
          <img src="/jwt.svg" alt="logo" className="w-6 h-6" />
          <h1 className="text-indigo-600 font-medium">JWT Viewer</h1>
        </div>
        <div className="flex gap-4 min-x-96 h-auto">
          <div className="flex-1 h-full w-1/2 min-w-0 break-all">
            <Encoded token={token} setToken={setToken} />
          </div>
          <div className="flex-1 h-full w-1/2">
            <Decoded token={token} />
          </div>
        </div>
      </div>
    </div>
  );
}
