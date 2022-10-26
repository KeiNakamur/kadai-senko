import React from 'react';
import { useState } from 'react';
import "./MenuList.css";

const MenuList = ({ data }) => {
    //モーダルをuseStateで管理
    const [showModal, setShowModal] = useState(false);

    //モーダルを表示させる関数
    const onHandleData = () => {
        setShowModal(true);
    }
    //モーダルを閉じる関数
    const onCloseModal = () => {
        setShowModal(false);
    }

    const MenuListTrue = () => {
        return (
            <div className='overlay'>
                <div className="content">
                    <img src={data.photo.mobile.l} alt="" className='modalImg' />
                    <p className='modal'>{data.name}</p>
                    <span className='modalDesc'>住所 : {data.address}</span>
                    <span className='modalDesc'>代金 : {data.budget.average}</span>
                    <span className='modalDesciption'>営業時間 : {data.open} {data.close}</span>
                    <span className='modalDesciptionClose'>※{data.close}</span>
                    <button onClick={() => onCloseModal()} className="modalCloseButton">閉じる</button>
                </div>
            </div>
        )
    }

    const MenuListElse = () => {
        return (
            <div className='menuList'>
                <div className="menuListWrapper">
                    <div className="menulistItem" onClick={() => onHandleData()}>
                        <img src={data.photo.mobile.l} alt="" className='menuListImg' />
                        <div className="menuListItemDesc">
                            <span className='menuListName'>{data.name}</span>
                            <span className='menuListAccess'>{data.access}</span>
                            <span className='menuListCost'>{data.budget.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>

            {showModal ? <MenuListTrue /> : <MenuListElse />}
        </>
    )
}

export default MenuList;