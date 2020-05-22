import Head from 'next/head'
import axios from 'axios';

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get('http://localhost:5000/api/page/1/data')
  const data = res.data

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}

function Home({ data }) {
  console.log(data)
  return (
    <div className="container">
      <Head>
        <title>PORTFOLIO Sukhostavskyi</title>
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

export default Home
