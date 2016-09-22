import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  description: React.PropTypes.string,
  amount: React.PropTypes.string,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
  id: React.PropTypes.string,
  calculateTotal: React.PropTypes.func,
};

class BillPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localDescription: this.props.description || '',
      localAmount: this.props.amount || '',
    };
    this.handleEditOfDescription = this.handleEditOfDescription.bind(this);
    this.handleEditOfAmount = this.handleEditOfAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localDescription: nextProps.description || '',
      localAmount: nextProps.amount || '',
    });
  }
  handleEditOfDescription(e) {
    const newDescription = e.target.value;
    this.setState({
      localDescription: newDescription,
    });
  }
  handleEditOfAmount(e) {
    const newAmount = e.target.value;
    this.setState({
      localAmount: newAmount,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      description: this.state.localDescription,
      amount: this.state.localAmount,
    });
    this.setState({ saved: true });
  }
  handleDeleteClick() {
    this.props.handleDelete(this.props.id);
  }
  isSaved() {
    return this.props.description === this.state.localDescription &&
          this.props.amount === this.state.localAmount;
  }

  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="active-buttons">
          <button id="removeButton" onClick={this.handleDeleteClick}>Remove</button>
        </div>
      );
    }
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'} >
        <form className="bill-post-display" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description of Bill"
            value={this.state.localDescription}
            onChange={this.handleEditOfDescription}
          />
          <input
            type="number"
            name="amount"
            step="0.01"
            placeholder="0.00"
            value={this.state.localAmount}
            onChange={this.handleEditOfAmount}
            className="amounts"
            id={this.props.id}
          />
          <button
            type="submit"
            value="Add"
            className="hidden">
            Add
          </button>
          {activeButtons}
        </form>

      </div>
    );
  }
}

BillPost.propTypes = propTypes;

export default BillPost;


 // pattern="/^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/"
