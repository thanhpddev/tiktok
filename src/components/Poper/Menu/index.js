import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PoperWrapper } from '~/components/Poper';
import MenuItem from './MenuItem';
import Header from './Header';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isparent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isparent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            visible
            delay={[0, 800]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-poper')}>
                        {history.length > 1 && (
                            <Header
                                title="Languages"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
