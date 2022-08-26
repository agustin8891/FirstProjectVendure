import {useRouter} from 'next/router'
import  {useQuery, gql} from '@apollo/client'
import Router from 'next/router'	

const all = gql `
query {
  products(options:{take:54}) {
    items{
      id
      name        
      slug
	  description
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

export default function Products() {
	
	const{loading, error, data} =useQuery(all)
	if(loading) return "loading";
	if(error) return "error;"
	const router= useRouter();
	const id=router.query.id;
	let productId=data.products.items.filter((el) => el.id==id)
	productId=productId[0]
	console.log(productId)

	return (
		<div class="ContainerDetails">
			{	
			productId.hasOwnProperty('id') ?				
				<div class="ContainerDetails2">				
					<div class="card mb-3 ContainerDetails3" /* style=";" */>
						<div class="row g-0">
							<div class="col-md-4 imgDetail">
									<img src={productId.featuredAsset.preview} class="img-fluid rounded-start detailImage" alt="..."/>
							</div>
							<div class="col-md-8 divDescription">
								<div class="card-body">
									<p class="card-title marginBottonText"><strong>Name:</strong> {productId.name}</p>
									<p class="card-text marginBottonText"><strong>Slug:</strong> {productId.slug}</p>
									<p class="card-text marginBottonText"><strong>Description:</strong></p>
									<p class="card-text marginBottonText">{productId.description}</p>
									<p class="card-text"><strong>Collections: </strong> </p>
									<p class="card-text">◦ {productId.collections[0].name}</p>
									<p class="card-text">◦ {productId.collections[1].name}</p>
									<p class="card-text"><strong>Price: </strong>${productId.variants[0].price}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="buttonContainer">
						<button onClick={e => Router.push('/')} class="botonDetail">Go to Home</button>
					</div>
											
						</div> : <p>Loading...</p>
					}

		</div>
	)	
}