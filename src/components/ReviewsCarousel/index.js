import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  getArrayLength = array => array.length

  getPreviousReview = () => {
    const {reviewsList} = this.props
    const length = this.getArrayLength(reviewsList)
    const {index} = this.state

    if (index > 0) {
      this.setState({index: index - 1})
    }
  }

  getNextReview = () => {
    const {reviewsList} = this.props
    const length = this.getArrayLength(reviewsList)
    const {index} = this.state

    if (index < length - 1) {
      this.setState({index: index + 1})
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewObject = reviewsList[index]
    const {imgUrl, username, companyName, description} = reviewObject
    return (
      <div className="reviews-bg-container">
        <div className="reviews-card">
          <h1 className="title">Reviews</h1>
          <img src={imgUrl} className="image" alt={username} />
          <div className="arrows-container">
            <button
              className="arrow-btn"
              type="button"
              data-testid="leftArrow"
              onClick={this.getPreviousReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="name">{username}</p>
            <button
              className="arrow-btn"
              type="button"
              data-testid="rightArrow"
              onClick={this.getNextReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="employee-review">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
