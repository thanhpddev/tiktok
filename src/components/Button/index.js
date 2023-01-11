import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    className = false,
    LeftIcon = false,
    RightIcon = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    //change button
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // disable btn

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled,
        rounded,
        className,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
}

export default Button;
