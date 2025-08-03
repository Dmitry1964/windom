import cls from "./navbar-links.module.scss";
import cn from 'classnames';

type NavbarLinksProps = {
    isOpen: boolean;
    links: {
        name: string;
        href: string;
    }[];
}

const NavbarLinks = ({ links, isOpen }: NavbarLinksProps): React.ReactNode => {
    return (
        <div className={cn(cls.navbar__links, { [cls.navbar__links_active]: isOpen })}>
            {links.map((link) => (
                <a key={link.name} className={cls.navbar__link} href={link.href}>{link.name}</a>
            ))}
        </div>
    );
};

export default NavbarLinks;
