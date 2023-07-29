import { Button } from '@nextui-org/react';

function App() {
  return (
    <>
      <h1 className="w-full text-3xl text-center font-bold hover:underline">Hello World!</h1>
      <div className="flex justify-center">
        <Button shadow auto className="text-center px-10">
          Click me
        </Button>
      </div>
    </>
  );
}

export default App;
