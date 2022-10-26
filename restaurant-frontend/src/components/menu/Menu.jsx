import React, { useEffect, useRef } from 'react';
import "./Menu.css";
import MenuList from './MenuList';
import { getAllRestaurant } from '../../utils/Restaurant';
import { useState } from 'react';

const Menu = () => {

    //.envファイルに後ほどAPIkeyを移動させる
    const initalUrl =
        "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=3ef703ec65645fef&large_area=Z011&format=json";

    useEffect(() => {
        const fetchRestaurantData = async () => {
            //全てのレストランのデータを取得
            let res = await getAllRestaurant(initalUrl);
            setRestaurantData(res.results);
        };
        fetchRestaurantData();
    }, []);

    const [restaurantData, setRestaurantData] = useState([]);
    const [isAvailable, setAvailable] = useState(false);
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [inputValue, setInputValue] = useState();

    const isFirstRef = useRef(true);

    const ErrorText = () => (
        <p className="App-error-text">不具合が生じました</p>
    );

    //緯度経度を取得用
    useEffect(() => {
        isFirstRef.current = false;
        if ('geolocation' in navigator) {
            setAvailable(true);
        }
    }, [isAvailable]);

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setPosition({ latitude, longitude });

            const fetchCurrentRestaurantData = async () => {
                const currentLocationUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=3ef703ec65645fef&lat=${latitude}&lng=${longitude}&range=5&order=4&format=json`;
                let res = await getAllRestaurant(currentLocationUrl);
                setRestaurantData(res.results);
            };
            fetchCurrentRestaurantData();
        }, []);
    };

    const onChangeValue = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);

        const fetchCurrentRestaurantData = async () => {
            const searchedRestaurant = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=3ef703ec65645fef&range=5&order=4&name=${inputValue}&format=json`;
            let res = await getAllRestaurant(searchedRestaurant);
            setRestaurantData(res.results);
        };
        fetchCurrentRestaurantData();
    }

    const onChangeValueRange = (e) => {
        e.preventDefault();
        if (e.target.value <= 300) {
            e.target.value = "1";
        } else if (300 < e.target.value && e.target.value <= 500) {
            e.target.value = "2";
        } else if (500 < e.target.value && e.target.value <= 1000) {
            e.target.value = "3";
        } else if (1000 < e.target.value && e.target.value <= 2000) {
            e.target.value = "4";
        } else if (2000 < e.target.value && e.target.value <= 3000) {
            e.target.value = "5";
        } else {
            e.target.value = "3";
        }

        setInputValue(e.target.value);
        const fetchCurrentRestaurantData = async () => {
            const searchedRestaurant = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=3ef703ec65645fef&range=${inputValue}&order=4&format=json`;
            let res = await getAllRestaurant(searchedRestaurant);
            const currentPosition = getCurrentPosition(res);
            setRestaurantData(currentPosition);
        };
        fetchCurrentRestaurantData();
    }

    return (
        <>
            <div className='menu'>
                {/* 下のmap関数の部分を一度コメントアウト、そしてコメントアウト解除しないとうまくlocalhost上で動作が確認できない(原因調査中) } */}
                {/* {restaurantData.shop.map((data) => (
                    <MenuList data={data} key={data.id} />
                ))} */}
            </div>

            <div className="buttons">
                <div className='menuGeolocationMain'>
                    {!isFirstRef && !isAvailable && <ErrorText />}
                    {isAvailable && (
                        <div>
                            <button onClick={getCurrentPosition} className="menuLocationButton">現在地付近のレストランを検索</button>
                        </div>
                    )}
                </div>
                <p className='menuTittle'>店名、現在地から半径を指定できます</p>
                <div className='inputs'>
                    <p className='restaurantNameText'>
                        店名 : <input type="text" onChange={(e) => onChangeValue(e)} className="restaurantNameInput" />
                    </p>
                    <p className='restaurantRangeText'>
                        半径 : <input type="text" onChange={(e) => onChangeValueRange(e)} className="restauratRangeInput" />m
                    </p>
                </div>

            </div>
        </>
    )
}

export default Menu;