import React from 'react'
import { ListItem } from '../ListItem/ListItem';
import PropTypes from 'prop-types';

class List extends React.Component{
    handleDeleteItems = data =>{
      console.log(data);
    };

  
    renderList = () => {
        const { data } = this.props;
        let list = null;
    
        if (data?.length) {
          list = data.map(function (item) {
            return <ListItem key={item.id} data={item} />;
          });
          
        } else {
          list = <p className="text-secondary">Нет дел</p>;
        }
        return list;
      };
    render(){
        return(
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        )
    }
}

List.propTypes = {
    data: PropTypes.array,
}
export {List};