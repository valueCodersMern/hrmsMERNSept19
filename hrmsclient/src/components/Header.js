import React from 'react'
import logo from './logo.png'
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'

class Header extends React.Component {
    render() {
        return(
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                         KEY RESULT AREA
                        </Menu.Item>
                        <Menu.Item  className='right'>Login</Menu.Item>

                    </Container>
                </Menu>
            </div>
        )
    }
}
export default Header;