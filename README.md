# Steps to firebase authorization
1. go to console.firebase.google.com
2. select web from console
3. register app and include firebase sdk
4. create login, register components
5. authentication > get started > enable email and password
6. attach form submission to submitHandler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword from react-firebase-hooks for sign up
9. if user is created redirected to expected page
10. useSignInWithEmailAndPassword from react-firebase-hooks for sign in
11. create requireAuth component
    - check user exist
    - track user location means site menu or category
12. in route wrap need require auth component

## firebase deploy hosting commands:
### install firebase cli
- npm install -g firebase-tools
### start deploying
- firebase login
- firebase init
- npm run build (build)
- firebase deploy
