import { useForm, useFormState } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState:{error},
  } = useForm();
  
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="container bg-pink-900 py-40 flex align-middle justify-center rounded-2xl border-yellow-300">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            {...register("username")}
            type="text"
            className="rounded-xl p-3 text-black outline-none border-black shadow-lg w-96 "
          />
          {/* {error.username && error.username.message} */}
          <br />
          <br />

          <input
            placeholder="password"
            {...register("password")}
            type="password"
            className="rounded-xl p-3 text-black outline-none border-black shadow-lg w-96 "/>
          <br />
          <br />

          <input type="submit" value="submit" className="flex m-auto" />
        </form>
      </div>
    </>
  );
}

export default App

