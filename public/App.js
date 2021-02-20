// function ProductTable(props) { 
class ProductTable extends React.Component {
  render() {
    const productRows = this.props.products.map(product => /*#__PURE__*/React.createElement(ProductRow, {
      key: product.id,
      product: product
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Product Name"), /*#__PURE__*/React.createElement("td", null, "Price"), /*#__PURE__*/React.createElement("td", null, "Category"), /*#__PURE__*/React.createElement("td", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
  }

} // function ProductRow(props) {


class ProductRow extends React.Component {
  render() {
    const products = this.props.product;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, products.productName), /*#__PURE__*/React.createElement("td", null, "$", products.price), /*#__PURE__*/React.createElement("td", null, products.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: products.image,
      target: "_blank"
    }, "View")));
  }

}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const product = {
      price: document.querySelector('#price').value,
      productName: document.querySelector('#productName').value,
      image: document.querySelector('#image').value,
      category: document.querySelector('#category').value
    };
    this.props.createProduct(product);
    document.querySelector('#price').value = "";
    document.querySelector('#productName').value = "";
    document.querySelector('#image').value = "";
    document.querySelector('#category').value = "";
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      id: "productForm",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "category"
    }, "Category"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      name: "category",
      id: "category"
    }, /*#__PURE__*/React.createElement("option", null, "Shirts"), /*#__PURE__*/React.createElement("option", null, "Jeans"), /*#__PURE__*/React.createElement("option", null, "Jackets"), /*#__PURE__*/React.createElement("option", null, "Sweaters"), /*#__PURE__*/React.createElement("option", null, "Accessories")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "productName"
    }, "Product Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "productName",
      id: "productName"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Add Product")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "price"
    }, "Price Per Unit"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "price",
      id: "price",
      placeholder: "$"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "image"
    }, "Image URL"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "image",
      id: "image"
    }), /*#__PURE__*/React.createElement("br", null)));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(product) {
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    product.id = this.state.products.length + 1;
    this.setState({
      products: newProductList
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "My Company Inventory"), /*#__PURE__*/React.createElement("div", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const application = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(application, document.querySelector('#content'));