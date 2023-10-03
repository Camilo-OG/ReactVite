import { useForm } from 'react-hook-form';
export default function SingUpForm() {

  const {register, handleSubmit, reset, formState: { errors }} = useForm();

  const handleClearClick = () => {
    reset()
  }

  const handleSubmitForm = (data) => {
    console.log(data)
  }

  console.log(errors)
  
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label >
        Name
        <input 
          {...register('name', {required: true})}
        />
      </label>
      <label >
        Age
        <input 
          {...register('age', {required: true})}
          
        />
      </label>
      <label >
        Adress
        <input 
          {...register('adress', {required: true})}
          
        />
      </label>
      <label >
        Phone
        <input 
          {...register('phone', {required: true})}
          
        />
      </label>
      <label >
        Mail
        <input 
          {...register('mail', {required: true})}
          
        />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>Clear</button>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  )
}
