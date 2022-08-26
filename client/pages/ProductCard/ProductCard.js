import React from "react"
import {useRouter} from 'next/router'

export default function ProductCard({id, name, slug, collections, image, price}) {
	const router=useRouter()
	const obj=router.query;
		return (
		<div class="card cardStyle" > 
			<div class="imageContainer">
						<img src = {image} alt="img not found" class="imagenstyle" />
			</div>	
				<div class="card-body cardBodyStyle"> 
					<h3 class="card-title">Name: {name}</h3>
					<p><strong>Slug: {slug} </strong> </p>

					<p><strong>Collections: </strong></p>	
					<p>◦ {collections[0].name}</p>
					<p>◦ {collections[1].name}</p>
					<p><strong>Price: ${price} </strong> </p>	
				</div> 			
		</div> 
	);
}

