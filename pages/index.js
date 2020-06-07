import Head from 'next/head'
import axios from 'axios';
import dynamic from 'next/dynamic'
// import Layout from 'layouts/Main';
const Layout = dynamic(() => import('../layouts/Main'))
const Card = dynamic(() => import('../components/Card/Card'))

export async function getStaticProps() {
  // const res = await axios.get('http://127.0.0.1:5000/api/page/1/data')
  // const data = res.data
  const data = {
    fields: {
      cf_home_title: {
        data: "portfolio"
      },
      cf_home_sub_title: {
        data: 'illia Sukhostaskyi'
      }
    },
    projects: [
      {
        id: 0,
        name: 'Proyal',
        img: 'https://source.unsplash.com/random/800x600',
        titile: 'Text Project',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        btn_text: 'FIND_OUT_MORE',
        url: '/',
      },
      {
        id: 1,
        name: 'Proyal',
        img: 'https://source.unsplash.com/random/800x600',
        titile: 'Text Project',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        btn_text: 'FIND_OUT_MORE',
        url: '/',
      },
      {
        id: 2,
        name: 'Proyal',
        img: 'https://source.unsplash.com/random/800x600',
        titile: 'Text Project',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        btn_text: 'FIND_OUT_MORE',
        url: '/',
      },

    ]
  }
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
            <h1>{data.fields.cf_home_title.data}</h1>
            <h1>{data.fields.cf_home_sub_title.data}</h1>
          </div>
        </section>
        <section className='card-grid'>
          {
            data.projects.map((p, i) => (
              <Card key={p.id} project={p} id={p.id} />
            ))
          }
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
        font-size: 4rem;
        line-height: 79px;
        align-items: center;
        text-align: center;
        margin:0;
        color: #FFFFFF;
      }
      .card-grid{
        margin-top: 75px;
        display: grid;
        grid-template-columns: repeat(2, fit-content(40%));
        align-items: start;
        justify-content: center;
        grid-gap: 50px;
      }
      @media(max-width: 1000px) {
        .card-grid {
            grid-template-columns: repeat(1, fit-content(80%));
        }
       
      }
        @media (max-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(1, fit-content(90%));
        }
          h1{
            font-size: 2rem;
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
        @media (max-width: 768px) {
          * {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
