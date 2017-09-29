Things to do..

*update schema to include bedroom, bathroom, garage selection \/
*update form to include samething \/

*Change new to browse image\/
*change image properties on Room object\/


===================ROUTES=====================
GET         /                   Main page / landing page
GET         /rooms              Place to browse all rooms, forms to search and refine search
GET         /rooms/:search      Handle search route
GET         /rooms/:id          Display information about one room

GET         /signup             Provides form to sign user up
POST        /signup             Post route to handle signing user up

GET         /login              Provides form to login the user
POST        /login              Handle logics to sign user in
GET         /logout             Log the current user out

GET         /dashboard          Provides interface to perform CRUD operation for user, list of operation                                   registerd user can do
GET         /rooms/new          Provides form to add new rooms
POST        /rooms              Handle POST request to add new rooms to database
GET         /rooms/edit         Provides form to edit existing form
PUT         /rooms              Update the room info
DELETE      /rooms/id/delete    Delete the room

Incremental

- Main page to display all the rooms
- Should be able to register
- Should be able to login
- Should be able to view user dashboard
- Should be able to add new room
- sbat update room
- sbat delete room
- sbat logout
- sbat update profile
- sbat update password
- sbat SEARCH



- Should be able to register
package needed
passport
passport-local
passport-local-mongoose
express-session
and redirect to dashboard

- Should be able to login
- Should be able to logout

- Dashboard

