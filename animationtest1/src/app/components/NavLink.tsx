const NavLink = ({ href, title }: { href: string, title: string }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a 
            className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0" 
            href={href} 
            onClick={handleClick}
        >
            {title}
        </a>
    );
}

export default NavLink;
