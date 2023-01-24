import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';


export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ProductReviewForm />
      </>
    );
  }
}
