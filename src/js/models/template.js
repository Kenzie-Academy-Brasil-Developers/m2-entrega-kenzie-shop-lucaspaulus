
class Template{
    static buildTemplate(content){
        const showcase = document.getElementsByClassName("showcase")[0]
        
        for(let i = 0; i < content.products.length; i++){
            
            const urlImgProduto = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${content.products[i].id}/Image.png`
            const productReview = content.products[i].reviews
            const productReviewImgStarFull = `../../src/img/star-full.png`
            const productReviewImgStarEmpty = `../../src/img/star-empty.png`
            const productStatus = content.products[i].promotionStatus
            const productPriceValue = content.products[i].price.productPrice
            const productPromotionPriceValue = content.products[i].price.productPromotionPrice

            const li = document.createElement("li")
            const productImg = document.createElement("img")
            const containerProductReview = document.createElement("div")
            const productName = document.createElement("h3")
            const productPrice = document.createElement("p")
            const productPromotionPrice = document.createElement("p")
            const btn = document.createElement("button")

            productImg.src = urlImgProduto
            productName.innerText = content.products[i].productName
            btn.innerText = "COMPRAR"
            
            li.appendChild(productImg)
            
            let myarr = []
            for(let i = 1; i <= productReview; i++){
                
                const productReviewStar = document.createElement("img")
                myarr.push(productReviewStar)
                productReviewStar.src = productReviewImgStarFull
                containerProductReview.appendChild(productReviewStar)
                li.appendChild(containerProductReview)
                
            }
            
            const diferenceFullAndEmptyStars = 5 - myarr.length

            for(let i = 0; i < diferenceFullAndEmptyStars; i++){
                const productReviewStar = document.createElement("img")
                productReviewStar.src = productReviewImgStarEmpty
                containerProductReview.appendChild(productReviewStar)
                li.appendChild(containerProductReview)
            } 
            
            li.appendChild(productName)
            
            
            if(productStatus){
                productPrice.innerText =  `De R$ ${productPriceValue}`
                productPromotionPrice.innerText = `Por R$ ${productPromotionPriceValue.toString().replace(".",",")}`
                productPromotionPrice.classList.add("productPrice")
                productPrice.classList.add("productPriceOld")
                

                li.appendChild(productPrice)
                li.appendChild(productPromotionPrice)              
                
            }else{
                productPrice.classList.add("productPrice")
                productPrice.innerText =  `R$ ${productPriceValue}`

                
                li.appendChild(productPrice)
            }
            
            li.appendChild(btn)

            showcase.appendChild(li)
       }    
       
    }

}

export {Template}