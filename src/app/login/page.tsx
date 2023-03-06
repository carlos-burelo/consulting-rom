import Input from '#/components/Input'
import _ from './login.module.scss'
import Image from 'next/image'

const LoginPage: Page = () => {
  return (
    <div className={_.container}>
      <form className={_.form}>
        <h1>Iniciar sesión</h1>
        <Input id="email" text="Correo electronico" type='email' />
        <Input id="password" text="Contraseña" type='password' />
        <button type="submit">Ingresar</button>
      </form>
      <Image
        priority
        className={_.image}
        src="/login.jpg"
        alt="Login"
        width={400}
        height={400}
      />
    </div>
  )
}

export default LoginPage