import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Template from '../../templates/default';
import styles from './styles';


class Event extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  }

  render() {
    return (
      <Template>
        <Paper style={styles.root}>
          <div style={styles.meta}>
            <h2>Event {this.props.match.params.eventId} title</h2>
            <div>
              date
            </div>
          </div>
          <p style={styles.p}>
            Qui placeat fugit cupiditate culpa dolorum alias et. Aliquam
            molestiae sit qui aut inventore possimus occaecati inventore. Eum
            consectetur ut reiciendis sint est fuga laboriosam vel. Itaque
            ducimus amet et vel itaque qui possimus explicabo. Aut id iusto
            molestiae. Officiis et est dolore pariatur consequatur sed. Commodi
            eum aliquam aut. Rerum cumque non ipsum est possimus est dolor.
          </p>
          <p style={styles.p}>
            Facere repudiandae sed iusto distinctio est et. Non ut quae fuga
            reprehenderit. Et nobis consectetur nesciunt et similique. Cumque in
            reiciendis natus error minima sit unde et. At voluptatibus aut quo
            animi non illo doloribus voluptatem. Molestias eos repudiandae
            possimus ex. Et dolorum at quo. Perferendis reiciendis beatae totam
            porro voluptas. Aut et et nihil in id. Blanditiis consequatur esse
            nobis omnis dignissimos laudantium maiores. Exercitationem sapiente
            doloremque omnis ipsam dolorem dicta reprehenderit. Tempore
            explicabo quia voluptates mollitia vitae ratione cumque.
          </p>
        </Paper>
      </Template>
    );
  }
}


export default Event;
