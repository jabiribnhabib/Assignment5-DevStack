import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <nav className=' text-muted border-b-border border-2'>
            <div className='h-15 font-semibold container mx-auto flex justify-between  items-center'>
                <div><a href=""><img src={Logo} alt="" /></a>
                </div>
                <ul className='flex justify-between items-center gap-4'>
                    <li><a className='text-brand-strong' href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className='flex justify-between items-center gap-1'>
                    <button>Sign In</button>
                    <button className='text-surface bg-brand rounded-2xl py-1 px-3'>Sign Up</button>
                </div></div>
        </nav>
    );
};

export default Nav;