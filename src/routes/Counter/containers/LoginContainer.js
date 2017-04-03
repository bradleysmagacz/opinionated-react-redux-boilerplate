import { connect } from 'react-redux'
import { increment, decrement } from '../modules/login'

import Login from '../components/Login'

const mapDispatchToProps = {
  increment,
  decrement
}

const mapStateToProps = (state) => ({
  counter : state.login
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
