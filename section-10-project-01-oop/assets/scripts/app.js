class Product {
    title = 'Default'
    imageUrl
    description
    price

    constructor(title, imageUrl, description, price) {
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }
}

class ProductItem {
    constructor(product){
        this.product = product
    }

    render(){
        const productLi = document.createElement('li')
        productLi.className = 'product-item'
        productLi.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}<h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>        
        `
        return productLi
    }
}

class ProductList {
    products = [
        new Product(
            'A sofa', 
            'https://leatherexpressions.com/wp-content/uploads/2018/09/divani-sofa.jpg', 
            2399, 
            'A soft sofa'
        ),
        new Product(
            'A sofa', 
            'https://leatherexpressions.com/wp-content/uploads/2018/06/image-44.jpg', 
            5399,
            'A soft sofa'
        ),
        new Product(
            'A sofa', 
            'https://leatherexpressions.com/wp-content/uploads/2018/06/image-36.jpg', 
            3399, 
            'A soft sofa'
        )
    ]

    constructor() {}

    render() {
        const renderHook = document.getElementById('app')
        const productUl = document.createElement('ul')
        productUl.className = 'product-list'
        for (const product of this.products) {
            const productItem = new ProductItem(product)
            const productLi = productItem.render()
            productUl.append(productLi)
        }
        renderHook.append(productUl)
    }
}

const productList = new ProductList()
productList.render()