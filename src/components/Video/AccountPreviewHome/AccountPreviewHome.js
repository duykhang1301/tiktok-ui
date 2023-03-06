import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestAccounts/AccountPreview';

function AccountPreviewHome({ children, data }) {
    return (
        <div>
            <Tippy
                interactive
                hideOnClick={false}
                delay={[800, 600]}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview data={data?.user} outlineButton={true} bioDescription={true} />
                        </PopperWrapper>
                    </div>
                )}
                placement={'bottom-start'}
            >
                {children}
            </Tippy>
        </div>
    );
}

AccountPreviewHome.propTypes = {
    children: PropTypes.node,
};

export default AccountPreviewHome;
