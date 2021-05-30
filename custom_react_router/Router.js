import React from 'react';

const Route = ({path, children}) => {
    const [curPath, setCurPath] = React.useState(window.location.pathname);
    const render = curPath === path ? children : null; 
    
    const onSetCurPath = () => {
        setCurPath(window.location.pathname);
    }

    React.useEffect(() => {
        window.addEventListener('popstate', onSetCurPath);
        return () => {
            window.removeEventListener('popstate', onSetCurPath);
        }
    }, []);

    return render;
}

const Link = ({href, children}) => {
    
    const onClickEvent = (e) => {
        e.preventDefault();
        // 히스토리 객체 추가
        window.history.pushState({}, '', href);
        // 히스토리가 변경되었음을 감지시키게함
        const popStateEvent = new PopStateEvent('popstate');
        window.dispatchEvent(popStateEvent);
    }

    return (
        <a onClick={onClickEvent} href={href}>{children}</a>
    )
}

export {Route, Link};