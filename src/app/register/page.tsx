import AvatarUploader from '#/components/AvatarUploader'
import Input from '#/components/Input'
import { cx } from '#/lib/utils'
import Image from 'next/image'
import _ from './register.module.scss'

const RegisterPage: Page = () => {
  return (
    <div className={_.container}>
      <form className={_.form}>
        <h1>Crear una cuenta</h1>
        <div className={cx(_.formModule, _.adaptable)}>
          <AvatarUploader />
          <Input id="license" text="Cédula profesional" type='number' />
        </div>
        <div className={_.formModule}>
          <Input id="firstName" text="Nombre(s)" />
          <Input id="lastName" text="Apellidos" />
        </div>
        <Input id="email" text="Correo electronico" type='email' />
        <div className={_.formModule}>
          <Input id="password" text="Contraseña" type='password' />
          <Input id="repeatPassword" text="Repetir contraseña" type='password' />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <Image
        priority
        className={_.image}
        src="/register.jpg"
        alt="Register"
        width={400}
        height={400}
      />
    </div>
  )
}

export default RegisterPage