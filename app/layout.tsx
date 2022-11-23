import { PropsWithChildren } from 'react'

export default function Layout ({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Next App Directory + HLS Bug</title>
      </head>

      <body>
        {children}
      </body>
    </html>
    )
}
