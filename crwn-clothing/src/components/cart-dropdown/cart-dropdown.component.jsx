// components
import CustomButton from '../custom-button/custom-button.component'

// styles
import './cart-dropdown.styles.sass'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

export default CartDropdown
