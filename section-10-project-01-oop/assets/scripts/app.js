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

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName
        this.value = attrValue
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId
    }
    createRootElement(tag, cssClass, attributes) {
        const rootElement = document.createElement(tag)
        if (cssClass) {
            rootElement.className = cssClass
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value)
            }
        }
        document.getElementById(this.hookId).append(rootElement)
        return rootElement
    }
}

class ShopingCart extends Component {
    items = []

    get totalAmount() {
        return this.items.reduce(() => prevValue + curItem.price, 0)
    }

    set cartItems(items) {
        this.items = items
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toiFixed(2)}</h2>`
    }

    constructor(renderHookId) {
        super(renderHookId)
    }

    addProduct(product) {
        const updatedItems = [...this.items]
        updatedItems.push(product)
        this.cartItems = updatedItems
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart')
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now</button>
        `
        this.totalOutput = cartEl.querySelector('h2')
    }
}

class ProductItem extends Component {
    constructor(product, productId) {
        super(productId)
        this.product = product
    }

    addToCart() {
        App.addProductToCart(this.product)
    }

    render() {
        const productLi = this.createRootElement('li', 'product-item')
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
        const addCartButton = productLi.querySelector('button')
        addCartButton.addEventListener('click', this.addToCart.bind(this))
    }
}

class ProductList extends Component {
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

    constructor(renderHookId) {
        super(renderHookId)
    }

    render() {
        const productUl = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')])
        for (const product of this.products) {
            const productItem = new ProductItem(product, 'prod-list')
            productItem.render()
        }
        return productUl
    }
}

class Shop {
    render() {
        this.cart = new ShopingCart('app')
        this.cart.render()
        const productUl = new ProductList('app')
        productUl.render()
    }
}

class App {
    static cart

    static init() {
        const shop = new Shop()
        shop.render()
        this.cart = shop.cart
    }

    static addProductToCart(product) {
        this.cart.addProduct(product)
    }
}

App.init()
