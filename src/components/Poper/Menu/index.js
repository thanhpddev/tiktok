import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PoperWrapper } from '~/components/Poper';
import MenuItem from './MenuItem';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };
    return (
        <Tippy
            className="hello world"
            delay={[0, 800]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-poper')}>{renderItems()}</PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
