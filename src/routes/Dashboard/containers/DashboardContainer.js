import { connect } from 'react-redux'
import { increment, decrement } from '../modules/dashboard'

import Dashboard from '../components/Dashboard'

const mapDispatchToProps = {
  increment,
  decrement
}

const mapStateToProps = (state) => ({
  counter : null
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
