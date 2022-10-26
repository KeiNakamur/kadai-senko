import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HomeIcon />
                        <span className='sidebarListItemText'>ホーム</span>
                    </li>

                    <li className='sidebarListItem'>
                        <BookmarkIcon />
                        <span className='sidebarListItemText'>ブックマーク</span>
                    </li>

                    <li className='sidebarListItem'>
                        <PersonIcon />
                        <span className='sidebarListItemText'>プロフィール</span>
                    </li>

                    <li className='sidebarListItem'>
                        <NotificationsIcon />
                        <span className='sidebarListItemText'>通知</span>
                    </li>

                    <li className='sidebarListItem'>
                        <EmailIcon />
                        <span className='sidebarListItemText'>お問い合わせ</span>
                    </li>

                    <li className='sidebarListItem'>
                        <SettingsIcon />
                        <span className='sidebarListItemText'>設定</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar;