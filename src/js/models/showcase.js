import {Template} from "./template.js"
class Showcase{
    static endpoint = 'https://m2-kenzie-shop.herokuapp.com/products'
    static request(){
        
        fetch(this.endpoint)

        .then((response) => response.json())
        .then((data) => {
                   
           Template.buildTemplate(data)
        })
    
    }

}


export {Showcase}