// modules
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JzVueHS2b48QenGFAC3gjbvUpIfkXJo5xVvNeMdl1aKsc4dP09w9BywKZTyD7eXmcHjSO3XYuTFpD7LXSVQ6fWA00yXlpOmiJ'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
