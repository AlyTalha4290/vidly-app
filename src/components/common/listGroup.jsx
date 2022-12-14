import React from "react";


const ListGroup = (props) => {
    const
     { items,
         textProperty,
          valueProptery,
           selectedItem,
            onItemSelect 
        } = props;

    return ( 
        <ul className="list group">
            { items.map(item => ( 
         <li
            onClick= {() => onItemSelect(item)}
            key={item[valueProptery]}
            className={
            item === selectedItem ? "list-group-item active" : "list-group-item"}>
            {item[textProperty]}
         </li> 
            ))}   
        </ul>
    );
};
 
ListGroup.defaultProps = {
    textProperty: 'name',
    valueProptery: '__id'
    };


export default ListGroup;