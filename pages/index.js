import Newsletter from "components/newsletter";
import Subscribe from "components/Subscribe";
import SmallNewsletter from "components/SmallNewsletter";
import Layout from "components/Layout";
import { useSession, signIn, signOut } from "next-auth/react"

// import data from 'pages/api/data.json'
export default function Home({resources}) {
  const { data :session } = useSession()
  console.log(session)
  if(session){
    return (
      <div>
        <Layout>
          <Newsletter resources={resources.slice(0,2)} />
          <Subscribe />
          <SmallNewsletter resources={resources.slice(2)} />
        </Layout>
      </div>
    );   
  }
  return (<>
  <Layout>
  Not signed in <br/>
  <button onClick={() => signIn()}>Sign in</button>
  </Layout>

   </>)

}

export async function getServerSideProps(){
   
  const resData = await fetch('http://localhost:3000/api/resources');
  const data = await resData.json()
  console.log("calling getServerSideProps.....")



  return{
    props:{
      resources : data
    }
  }
}

// export async function getStaticProps(){

//   console.log("calling get StaticProps.....")

//   return{
//     props:{
//       resources : data
//     }
//   }
// }