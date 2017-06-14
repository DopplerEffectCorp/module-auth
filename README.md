# module-auth

# Requirement
* Database
    * `/users/roles/${uid}` = {firebaseid: 'admin', firebaseid2: 'super-admin'}
* Routes
    * /login (when need to login)
    * /unauthorized (when unauthorized to access some route)
# Available Guards
* LoggedInGuard
* LoggedOutGuard
* AdminRoleGuard