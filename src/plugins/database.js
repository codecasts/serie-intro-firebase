import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCXiVDIcg7uVSkR0qeHzOfhBOZE3gxOqsc',
  authDomain: 'expenses-b91bb.firebaseapp.com',
  databaseURL: 'https://expenses-b91bb.firebaseio.com',
  projectId: 'expenses-b91bb',
  storageBucket: 'expenses-b91bb.appspot.com',
  messagingSenderId: '185026501469'
}

const connection = Firebase.initializeApp(config)
const DB = connection.database()

export default function install (Vue, { router }) {
  Firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      router.push({ path: 'auth' })
    }
  })

  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    }
  })
}
