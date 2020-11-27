import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
// import Avatar from 'react-avatar';
import {FiFlag, FiMessageSquare, FiVideo} from 'react-icons/fi';
import {FaUserFriends} from 'react-icons/fa';
import {BiStore, BiGroup} from 'react-icons/bi';
import {GrGroup} from 'react-icons/gr';
import { useStateValue } from './StateProvider';

export default function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow 
                src={user.photoURL}
                
                title={user.displayName}
            />

            <SidebarRow Icon={FiFlag} title="Flag"/>
            <SidebarRow Icon={BiGroup} title="Pages"/>
            <SidebarRow Icon={FiMessageSquare} title="Messages"/>
            <SidebarRow Icon={BiStore} title="Store"/>
            <SidebarRow Icon={FiVideo} title="Videos"/>

            <div className="sidebar__line">
                <hr />
            </div>
            
        </div>
    )
}