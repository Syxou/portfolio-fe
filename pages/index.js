import Head from 'next/head'
import styled from 'styled-components'




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@3/distr/fira_code.css" />
      </Head>

      <main>
        <section className='header'>
          <div className="title">
            <h1>PORTFOLIO</h1>
            <h1>Illia Sukhostavskyi</h1>
          </div>
        </section>
      </main>
      <footer>
      </footer>

      <style jsx>{`

      .header{
        background: url('/Vector_header.svg') no-repeat;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h1{
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 79px;
        display: flex;
        align-items: center;
        text-align: center;
        margin:0;
        color: #FFFFFF;
      }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background: #292929;
        }

        * {
          font-family: 'Fira Code', monospace;
          font-size: 16px;
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}

const Header = styled.section`

`;
const H1 = styled.h1`

`
