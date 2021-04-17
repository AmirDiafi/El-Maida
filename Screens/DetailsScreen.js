import React from 'react'
import DetailsContent from '../Components/DetailsContent'

class DetailsScreen extends React.Component {
  state = {}
  render() {
    return (
      <DetailsContent
        data={this.props.route.params}
        navigation={this.props.navigation}
      />
    )
  }
}

export default DetailsScreen
