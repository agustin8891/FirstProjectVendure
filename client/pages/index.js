import  {useQuery, gql} from '@apollo/client' 
import React, { useState } from 'react';
import ProductCard from './ProductCard/ProductCard'
import Paginado from './Paginado/Paginado.jsx'
import Router from 'next/router'

const all = gql `
query {
  products(options:{take:54}) {
    items{
      id
      name        
      slug
      variants{
        price
      }
      featuredAsset{
        preview
        width
        height
      }
      collections{
          name
      }
    }
  }
}
`

export default function Home() {
  <head>
    <title>Mi app</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </head>


	const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(4) 

  const{loading, error, data} =useQuery(all)
  if(loading) return "loading";
  if(error) return "error;"

  let allProducts=data.products.items


	const indexOfLastProduct=currentPage * productsPerPage 
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage

	let currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber)
	}


  return (

    <div class="title text-center mainStyle">

      <main>

        <h1 class= "titleClass">List of products</h1>

        <div class="container fatherOfPages">
          <Paginado
                  productsPerPage= {productsPerPage}
                  allProducts={allProducts.length}
                  paginado={paginado}
          />
        </div>	
        

        
        <div class="container">
              <div class="row mx-5 fatherOfCards">
                    { currentProducts.length>0 ?
                currentProducts?.map((p) => {
                  return (
                    <fragment class="col-sm-12 col-md-6 col-lg-3 fragmentClass" onClick={e => Router.push('/products/[id]', `/products/${p.id}`)}>							
                        <ProductCard name={p.name} id={p.id} slug={p.slug} 
                            collections={p.collections} image={p.featuredAsset.preview}
                            price={p.variants[0].price} 
                        />
                    </fragment>
                    )
                }) : <h1>Loading...</h1> }
                </div>
        </div>

      </main>
      
    </div>
  )
}

