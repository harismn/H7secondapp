import { StackNavigator } from 'react-navigation'
import styles from './style'

import Level from './Level'
import NewVocab from './newVocab'
import Selector from './selector'
import Sidebars from './sidebars'
import Splash from './splash'
import Swipes from './swipes'
import Tinder from './tinder'
import Try from './try'
import Login from './Login'
import Welcome from './welcome'
import Vocab from './Vocab'
// import styles from './swipes/style'


const AppNavigator = StackNavigator({
    level: {
        screen: Level,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    vocab: {
        screen: Vocab,
        navigationOptions: {
            headerStyle: styles.header,
            header: null
        }
    },
    newvocab: {
        screen: NewVocab,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    selector: {
        screen: Selector,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    sidebars: {
        screen: Sidebars,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    splash: {
        screen: Splash,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    swipes: {
        screen: Swipes,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    tinder: {
        screen: Tinder,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    try: {
        screen: Try,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
    welcome: {
        screen: Welcome,
        navigationOptions: {
            headerStyle: styles.header,
            header: null,
        }
    },
})

export default AppNavigator