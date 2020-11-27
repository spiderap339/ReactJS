import React from 'react';
import './sidebarRow.css';
import Avatar from 'react-avatar';
import { useStateValue } from './StateProvider';

export default function SidebarRow({src, Icon, title}) {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebarRow">
            
            {src && <Avatar src={user.photoURL} round="100px" size="40"/> }
            {Icon && (
            <Icon size="25px" />
            
            )}
           
            
            <div className="sidebarRow__title">
                <strong>{title}</strong>
            </div>
            
        </div>
    )
}