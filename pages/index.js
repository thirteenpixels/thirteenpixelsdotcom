import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>thirteenpixels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          You probably didn&rsquo;t mean to land here but just in case you did I will try to be hospitable.
        </p>
        <p className="description">
          My name is <a href="https://keybase.io/thirteenpixels">Bill</a>. I work <a href="https://tsyklonstudio.com">here</a>. When I&rsquo;m not making things there I&rsquo;m probably doing something that you can view on <a href="https://www.strava.com/athletes/53379311">here</a>.
        </p>
        <p className="description">
          If you&rsquo;d like to get in touch with me for something work related you can find me <a href="https://www.linkedin.com/in/thirteenpixels/">here</a>.
        </p>        
        <p className="description">
          If you&rsquo;d like to get in touch for some other reason you can use this simple form (no spam from me if I don&rsquo;t get any from you, deal? <em>Deal</em>.)
        </p>          
        <form name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
