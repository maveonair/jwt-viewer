type EncodedProps = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export default function Encoded({ token, setToken }: EncodedProps) {
  return (
    <div className="h-full">
      <h1 className="text-2xl mb-3">Encoded</h1>
      <div className="h-full">
        <div
          aria-label="token-input"
          className="w-full h-full p-4 border border-gray-300 rounded-md font-mono"
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