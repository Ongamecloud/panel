import { Gear, House, Lock } from '@gravity-ui/icons';
import { NavLink } from 'react-router-dom';
import Logo from '@/components/elements/PyroLogo';

interface MainHeaderProps {
    onSelectAdminPanel: () => void;
    rootAdmin: boolean;
}

const MainHeader = ({ onSelectAdminPanel, rootAdmin }: MainHeaderProps) => {
    return (
        <header className='w-full bg-[rgba(0,0,0,0.6)] border-b border-[rgba(255,255,255,0.08)] px-8 py-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <NavLink to={'/'} className='flex shrink-0 h-8 w-fit'>
                        <Logo uniqueId='main-header' />
                    </NavLink>
                    
                    <div className='h-8 w-[1px] bg-[rgba(255,255,255,0.2)]' />
                    
                    <nav className='flex items-center gap-6'>
                        <NavLink
                            to={'/'}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-2 font-semibold text-sm transition-colors ${
                                    isActive ? 'text-brand' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            <House width={20} height={20} fill='currentColor' />
                            <span>Servers</span>
                        </NavLink>
                        
                        <NavLink
                            to={'/account/api'}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-2 font-semibold text-sm transition-colors ${
                                    isActive ? 'text-brand' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            <Lock width={20} height={20} fill='currentColor' />
                            <span>Api keys</span>
                        </NavLink>
                        
                        <NavLink
                            to={'/account'}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-2 font-semibold text-sm transition-colors ${
                                    isActive ? 'text-brand' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            <Gear width={20} height={20} fill='currentColor' />
                            <span>Settings</span>
                        </NavLink>
                    </nav>
                </div>
                
                {rootAdmin && (
                    <button
                        onClick={onSelectAdminPanel}
                        className='px-4 py-2 bg-brand hover:bg-brand/90 text-white font-semibold text-sm rounded-md transition-colors'
                    >
                        Admin panel
                    </button>
                )}
            </div>
        </header>
    );
};

export default MainHeader;
