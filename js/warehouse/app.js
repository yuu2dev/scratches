import React from 'react';
import {combineReducers, createStore} from 'redux';

const Warehouse = () => {

    // 입고
    const importProduct = (name, quantity, price) => {
        return {
            type: 'IMPORT_PRODUCT',
            payload: {name, quantity, price}
        }
    }
    // 출고
    const exportProduct = (name, quantity) => {
        return {
            type: 'EXPORT_PRODUCT',
            payload: {name, quantity},
        }
    }
    // 상품목록
    const productList = (list = [], action) => {
        switch (action.type) {
            case 'IMPORT_PRODUCT':
                list = [...list, action.payload.name];
                break;
            case 'EXPORT_PRODUCT':
                list = list.filter(name => name !== action.payload.name);
                break;
        }
        
        return list;
    }
    // 전체수량
    const totalQuantity = (totalQuantity = 0, action) => {
        switch (action.type) {
            case 'IMPORT_PRODUCT':
                totalQuantity += action.payload.quantity;
                break;
            case 'EXPORT_PRODUCT':
                if (totalQuantity > action.payload.quantity) {
                    totalQuantity -= action.payload.quantity;
                } else {
                    totalQuantity = 0;
                }
                break;
        }
        return totalQuantity;
    }
    const myWarehouse = combineReducers({
        productList, totalQuantity
    });

    const store = createStore(myWarehouse);

    store.dispatch(importProduct('메로나', 3, 500));
    console.log(store.getState());
    store.dispatch(exportProduct('메로나', 1));
    console.log(store.getState());
    store.dispatch(exportProduct('메로나', 1));
    console.log(store.getState());
    store.dispatch(exportProduct('메로나', 1));
    console.log(store.getState());
    
    return <></>;
}

export default Warehouse;