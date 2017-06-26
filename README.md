# module-auth

## Requirement

#### Database

> You must have this structure for admin role
```
/users/roles/${totoId}

[
    randomId: 'admin',
    randomId2: 'super-admin'
    randomId3 : 'what-else'
]
```

#### Routes

> You have to create these routes
    
**/login** (when need to login)

**/unauthorized** (when unauthorized to access some route)
     
## Available Guards
1. LoggedInGuard
2. LoggedOutGuard
3. AdminRoleGuard