import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class StoryListItem extends Component {

  state = {
    openDelete: false,
    openPublish: false
  };


  openPublishDialog = () => {
    this.setState({openPublish: true});
  };

  closePublishDialog = () => {
    this.setState({openPublish: false});
  };

  openDeleteDialog = () => {
    this.setState({openDelete: true});
  };

  closeDeleteDialog = () => {
    this.setState({openDelete: false});
  };

  renderDeleteButton = () => {
    const actionsDelete = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.closeDeleteDialog}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onClick={this.closeDeleteDialog}
      />,
    ];
    return (
      <div>
        <FlatButton
          label='DELETE'
          onClick={(e) => {
            e.preventDefault();
            this.setState({openDelete: true});;
          }}
          >
          <Dialog
            title="Are you sure you want to delete?"
            actions={actionsDelete}
            modal={true}
            open={this.state.openDelete}
          >
            Story cannot be restored later
          </Dialog>
        </FlatButton>
      </div>
    )
  }

  renderPublishButton = () => {
    const actionsPublish = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.closePublishDialog}
      />,
      <FlatButton
        label="Publish"
        primary={true}
        onClick={this.closePublishDialog}
      />,
    ];
    return (
      <FlatButton
        label='PUBLISH'
        onClick={(e) => {
          e.preventDefault();
          this.setState({openPublish: true});;
        }}
        >
        <Dialog
          title="Are you sure you want to publish?"
          actions={actionsPublish}
          modal={true}
          open={this.state.openPublish}
        >
        </Dialog>
      </FlatButton>
    )
  }

  renderStoryAssets = () => {
    const { title, tagLine, editor } = this.props.story;

    return (
      <div className="ListItemDescription">
        <p>{title}</p>
        <p>{tagLine}</p>
        <p>{editor}</p>
      </div>
    )
  }

  render() {

    const style = {
      height: 80,
      width: '100%'
    };

    return (
      <div className="StoryListItem">
        <Paper className="Paper" style={style} zDepth={1} children={this.renderStoryAssets()}/>
        <div className='Buttons'>
          {this.renderDeleteButton()}
          {this.renderPublishButton()}
        </div>
      </div>
    );
  }
}


export default StoryListItem;
