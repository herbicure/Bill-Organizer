import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  description: React.PropTypes.string,
  amount: React.PropTypes.string,
  dueDate: React.PropTypes.string,
  handlePosting: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
  id: React.PropTypes.string,
  calculateTotal: React.PropTypes.func,
};

class BillPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localDescription: this.props.description || '',
      localAmount: this.props.amount || 0,
      localDueDate: this.props.dueDate || '',
    };
    this.handleEditOfDescription = this.handleEditOfDescription.bind(this);
    this.handleEditOfAmount = this.handleEditOfAmount.bind(this);
    this.handleEditOfDueDate = this.handleEditOfDueDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.isSaved = this.isSaved.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localDescription: nextProps.description || '',
      localAmount: nextProps.amount || '',
      localDueDate: nextProps.dueDate || '',
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
  handleEditOfDueDate(e) {
    const newDueDate = e.target.value;
    this.setState({
      localDueDate: newDueDate,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePosting({
      id: this.props.id,
      description: this.state.localDescription,
      amount: this.state.localAmount,
      dueDate: this.state.localDueDate,
    });
    this.setState({ saved: true });
  }
  handleRemoveClick() {
    this.props.handleRemove(this.props.id);
  }
  isSaved() {
    return this.props.description === this.state.localDescription &&
          this.props.amount === this.state.localAmount &&
          this.props.dueDate === this.state.localDueDate;
  }
  render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="active-buttons">
          <button id="removeButton" onClick={this.handleRemoveClick}>Remove</button>
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
          <input
            type="date"
            name="input-date"
            placeholder="Due date"
            id="due-date"
            value={this.state.localDueDate}
            onChange={this.handleEditOfDueDate}
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
