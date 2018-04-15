import React, {
    Component
  } from 'react';
  import hoistStatics from 'hoist-non-react-statics';
  import Promise from 'bluebird';
  import _ from 'lodash';
  
  const connect = (func, props) => {
  
    return WrappedComponent => {
  
      class Connect extends Component {
  
        constructor() {
          super();
          this.state = {
            data: {}
          }
        }
  
        componentDidMount() {
          const promises = func(props);
          console.log('promises', promises);
          Promise.props(promises)
          .then(results => {
            console.log(results);
            return results;
          })
          .then(data => {
            console.log('data', data);
            this.setState({
              data: data
            });
          });
        }
  
        render() {
          return (
            <WrappedComponent {...this.state.data} {...props} />
          )
        }
  
      }
      return (
        <Connect />
      )
    }
  }
  
  export default connect;
  