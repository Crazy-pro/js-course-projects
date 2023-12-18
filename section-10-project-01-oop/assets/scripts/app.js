const productList = {
    products: [
        { 
            title: 'A sofa', 
            imageUrl : 'someUrl', 
            price: 2000, 
            description: 'A soft sofa'
        },
        { 
            title: 'A sofa', 
            imageUrl : 'someUrl', 
            price: 2000, 
            description: 'A soft sofa'
        },
        { 
            title: 'A sofa', 
            imageUrl : 'someUrl', 
            price: 2000, 
            description: 'A soft sofa'
        }
    ],
    render() {
        const renderHook = document.getElementById('app')
        const productLi = document.getElementById('ul')
        productLi.className = 'product-list'
        for (const product of this.products) {
            const productEl = document.createElement('li')
            productEl.className = 'product-item'
            productEl.innerHTML = `
                <div>
                    <img src="${product.imageUrl}" alt="${product.title}" >
                    <div class="product-item__content">
                        <h2>${product.title}</h2>
                        <h3>\$${product.price}<h3>
                        <p>${product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>        
            `
            productLi.append(productEl)
        }
        renderHook.append(productLi)
    }
}

productList.render()