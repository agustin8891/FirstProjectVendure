import '../styles/globals.css'
import  {ApolloClient, HttpLink, gql, InMemoryCache, ApolloProvider} from '@apollo/client' 
import 'bootstrap/dist/css/bootstrap.css'



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink ({
    uri: 'http://localhost:3000/shop-api'
  })
})

function MyApp({ Component, pageProps }) {
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Ubuntu:wght@300&display=swap');
</style>
  </head>
  return (<ApolloProvider client={client}>
            <Component {...pageProps} />
         </ApolloProvider> 
        )
}

export default MyApp
