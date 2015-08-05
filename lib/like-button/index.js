import React from "react"

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: props.liked || false
    }
  }

  onClick(e) {
    e.preventDefault()
    let { liked } = this.state
    this.setState({
      liked: !liked
    })
  }

  render() {
    let { liked } = this.state
    return (
      <button onClick={ this.onClick.bind(this) }>
        You { liked ? "like" : "unlike" } this.
      </button>
    )
  }
}
