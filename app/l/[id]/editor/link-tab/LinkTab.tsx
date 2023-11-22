import { Form } from "./Form";

export function LinkTab() {
  return (
    <div className="p-5 md:p-8">
      <div>
        <h1 className="text-2xl font-bold md:text-5xl">Customize your links</h1>
        <p className="mt-2 text-sm text-gray-500">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
