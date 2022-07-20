import styles from './Avatar.module.css';

type AvatarProps = {
    src: string;
    hasBorder?: boolean;
}


export function Avatar({src, hasBorder = true} : AvatarProps) {
    return (
        <div>   
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatarWithNoBorder} src={src} />
        </div>
    );
}