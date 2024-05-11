type EncodedProps = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export default function Encoded({ token, setToken }: EncodedProps) {
  return (
    <div className="h-full">
      <h1 className="text-2xl mb-3 dark:text-white">Encoded</h1>
      <div className="h-full">
        <div
          aria-label="token-input"
          aria-placeholder="Enter your token here"
          className="w-full h-full p-4 border rounded-md text-sm font-mono focus:outline focus:outline-2 focus:outline-indigo-600 dark:bg-dark-dimmed dark:text-white dark:border-gray-800"
          contentEditable
          onInput={(e) => setToken(e.currentTarget.textContent)}
          suppressContentEditableWarning={true}
        >
          {token}
        </div>
      </div>
    </div>
  );
}
