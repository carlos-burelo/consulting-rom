import '#styles/global.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout: FC = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

// import './globals.css'
// import { db } from '#database'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout ({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }
