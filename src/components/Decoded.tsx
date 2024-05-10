import { useMemo, useState } from "react";

type DecodedProps = {
  token: string | null;
};

export default function Decoded({ token }: DecodedProps) {
  const [error, setError] = useState<string | null>(null);

  const header: string | null = useMemo(() => {
    setError(null);

    if (!token) {
      return null;
    }

    try {
      const value = atob(token.split(".")[0]);
      return JSON.stringify(JSON.parse(value), null, 2);
    } catch (e) {
      if (e instanceof Error) {
        setError("Invalid input");
      }

      return null;
    }
  }, [token]);

  const payload: string | null = useMemo(() => {
    setError(null);

    if (!token) {
      return null;
    }

    try {
      const value = atob(token.split(".")[1]);
      return JSON.stringify(JSON.parse(value), null, 2);
    } catch (e) {
      if (e instanceof Error) {
        setError("Invalid input");
      }

      return null;
    }
  }, [token]);

  return (
    <div className="h-full">
      <h1 className="text-2xl mb-3 dark:text-white">Decoded</h1>
      <div className="border rounded h-full dark:bg-dark-dimmed dark:text-white dark:border-gray-800">
        <div className="border-b uppercase text-xs p-2 dark:border-gray-800">
          Header: <span className="text-gray-500">Algorithms & Token Type</span>
        </div>
        <div className="border-b p-2 whitespace-pre-wrap font-mono text-sm dark:border-gray-800">
          {header}
        </div>
        <div className="border-b uppercase text-xs p-2 dark:border-gray-800">
          Payload: <span className="text-gray-500">Data</span>
        </div>
        <div className="p-2 whitespace-pre-wrap font-mono text-sm">
          {payload}
        </div>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
