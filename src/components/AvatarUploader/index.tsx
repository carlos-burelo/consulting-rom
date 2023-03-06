'use client'
import _ from './AvatarUploader.module.scss'
import { useState } from 'react'
import Image from 'next/image'

const AvatarUploader: FC = () => {
  const [avatarPreview, setAvatarPreview] = useState('')

  const handleAvatar = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }



  return (
    <div className={_.avatar}>
      <input
        onInput={handleAvatar}
        type="file"
        title='Subir imagen'
        name="profilePic"
        id="profilePic"
      />

      {avatarPreview ? (
        <Image
          width={110}
          height={130}
          src={avatarPreview}
          alt="avatar"
          className={_.avatarPreview}
        />
      ) : (
        <span>🧑‍⚕️</span>
      )}
    </div>
  )
}

export default AvatarUploader
